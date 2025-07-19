import { google } from 'googleapis';

// Function to validate environment variables
export function validateEnvVars() {
    const required = ['GOOGLE_SHEET_ID', 'GOOGLE_PROJECT_ID', 'GOOGLE_PRIVATE_KEY_ID', 'GOOGLE_PRIVATE_KEY', 'GOOGLE_CLIENT_EMAIL', 'GOOGLE_CLIENT_ID'];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

// Google service account credentials
export function getCredentials() {
    validateEnvVars();

    return {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID!,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID!,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL!,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`,
    };
}

// Configuration for different registration types
export interface RegistrationConfig {
    sheetName: string;
    headers: readonly string[];
    range: string; // e.g., 'A:G' or 'A:K'
}

export const REGISTRATION_CONFIGS = {
    summit: {
        sheetName: 'Summit Registrations',
        headers: ['Timestamp', 'Full Name', 'University', 'Email', 'Phone Number', 'Line ID', 'Student Card'],
        range: 'A:G'
    },
    ccs: {
        sheetName: 'CCS Registrations',
        headers: ['Timestamp', 'Team Name', 'Team Leader Name', 'Team Member 1', 'Team Member 2', 'Team Member 3', 'University', 'Major', 'Email', 'Phone Number', 'Team Personal Data File', 'Proof of Payment'],
        range: 'A:L'
    }
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function appendToSheet(values: any[], config: RegistrationConfig): Promise<void> {
    try {
        console.log('Starting Google Sheets append operation...');
        console.log('Values to append:', values);
        console.log('Sheet config:', config);

        const credentials = getCredentials();
        console.log('Credentials loaded:', {
            project_id: credentials.project_id,
            client_email: credentials.client_email,
            has_private_key: !!credentials.private_key,
        });

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

        console.log('Attempting to append to spreadsheet:', SPREADSHEET_ID);
        console.log('Sheet name:', config.sheetName);

        // First, try to create the sheet if it doesn't exist
        try {
            console.log('Checking if sheet exists or creating new sheet...');
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                requestBody: {
                    requests: [{
                        addSheet: {
                            properties: {
                                title: config.sheetName,
                            },
                        },
                    }],
                },
            });

            console.log('New sheet created, adding headers...');
            // Add headers if it's a new sheet
            await sheets.spreadsheets.values.append({
                spreadsheetId: SPREADSHEET_ID,
                range: `${config.sheetName}!A1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [config.headers as string[]],
                },
            });
            console.log('Headers added successfully');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log('Sheet probably already exists:', error.message);
        }

        // Append the data
        console.log('Appending data to sheet...');
        const appendResult = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${config.sheetName}!${config.range}`,
            valueInputOption: 'RAW',
            requestBody: {
                values: [values],
            },
        });

        console.log('Data appended successfully:', appendResult.data);
    } catch (error) {
        console.error('Error appending to Google Sheets:', error);
        throw error;
    }
}

// Helper function to create timestamp
export function createTimestamp(): string {
    return new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
} 