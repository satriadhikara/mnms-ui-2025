import { NextRequest, NextResponse } from 'next/server';
import { validateEnvVars, appendToSheet, createTimestamp, REGISTRATION_CONFIGS } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
    try {
        console.log('=== Starting Summit Registration API ===');

        // Validate environment variables first
        validateEnvVars();
        console.log('Environment variables validated');

        const formData = await request.formData();
        console.log('Form data received');

        const fullName = formData.get('fullName') as string;
        const university = formData.get('university') as string;
        const email = formData.get('email') as string;
        const phoneNumber = formData.get('phoneNumber') as string;
        const lineId = formData.get('lineId') as string;
        const studentCardLink = formData.get('studentCardLink') as string;

        console.log('Parsed form data:', {
            fullName,
            university,
            email,
            phoneNumber,
            lineId,
            studentCardLink,
        });

        // Validate required fields
        if (!fullName || !university || !email || !phoneNumber || !lineId) {
            console.log('Validation failed: missing required fields');
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Use provided Google Drive link for student card
        const studentCardUrl = studentCardLink || '';
        if (studentCardUrl) {
            console.log('Student card link provided:', studentCardUrl);
        } else {
            console.log('No student card link provided');
        }

        // Prepare data for Google Sheets
        const timestamp = createTimestamp();
        const values = [timestamp, fullName, university, email, phoneNumber, lineId, studentCardUrl];

        console.log('Prepared data for sheets:', values);

        // Append to Google Sheets
        await appendToSheet(values, REGISTRATION_CONFIGS.summit);

        console.log('=== Registration completed successfully ===');

        return NextResponse.json({
            message: 'Registration submitted successfully',
            data: {
                timestamp,
                fullName,
                university,
                email,
                phoneNumber,
                lineId,
                studentCardUrl,
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