import { NextRequest, NextResponse } from 'next/server';
import { validateEnvVars, appendToSheet, createTimestamp, REGISTRATION_CONFIGS } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
    try {
        console.log('=== Starting IIC Registration API ===');

        // Validate environment variables first
        validateEnvVars();
        console.log('Environment variables validated');

        const formData = await request.formData();
        console.log('Form data received');

        const teamName = formData.get('teamName') as string;
        const teamLeaderName = formData.get('teamLeaderName') as string;
        const teamMember1Name = formData.get('teamMember1Name') as string;
        const teamMember2Name = formData.get('teamMember2Name') as string;
        const teamMember3Name = formData.get('teamMember3Name') as string;
        const university = formData.get('university') as string;
        const major = formData.get('major') as string;
        const email = formData.get('email') as string;
        const phoneNumber = formData.get('phoneNumber') as string;
        const teamPersonalDataFile = formData.get('teamPersonalDataFile') as string;
        const abstractTimeFile = formData.get('abstractTimeFile') as string;
        const teamWorkOriginalitySheetFile = formData.get('teamWorkOriginalitySheetFile') as string;
        const scannedProofOfPayment = formData.get('scannedProofOfPayment') as string;

        console.log('Parsed form data:', {
            teamName,
            teamLeaderName,
            teamMember1Name,
            teamMember2Name,
            teamMember3Name,
            university,
            major,
            email,
            phoneNumber,
            teamPersonalDataFile,
            abstractTimeFile,
            teamWorkOriginalitySheetFile,
            scannedProofOfPayment,
        });

        // Validate required fields
        if (!validateRequiredFields({ teamName, teamLeaderName, teamMember1Name, teamMember2Name, teamMember3Name, university, major, email, phoneNumber, teamPersonalDataFile, abstractTimeFile, teamWorkOriginalitySheetFile, scannedProofOfPayment })) {
            console.log('Validation failed: missing required fields');
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Prepare data for Google Sheets
        const timestamp = createTimestamp();
        const values = [timestamp, teamName, teamLeaderName, teamMember1Name, teamMember2Name, teamMember3Name, university, major, email, phoneNumber, teamPersonalDataFile, abstractTimeFile, teamWorkOriginalitySheetFile, scannedProofOfPayment];

        console.log('Prepared data for sheets:', values);

        // Append to Google Sheets
        await appendToSheet(values, REGISTRATION_CONFIGS.iic);

        console.log('=== Registration completed successfully ===');

        return NextResponse.json({
            message: 'Registration submitted successfully',
            data: {
                timestamp,
                teamName,
                teamLeaderName,
                teamMember1Name,
                teamMember2Name,
                teamMember3Name,
                university,
                major,
                email,
                phoneNumber,
                teamPersonalDataFile,
                abstractTimeFile,
                teamWorkOriginalitySheetFile,
                scannedProofOfPayment,
            }
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('=== Error submitting registration ===');
        console.error('Error details:', error);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        return NextResponse.json(
            {
                error: 'Failed to submit registration',
                details: error.message
            },
            { status: 500 }
        );
    }
} 