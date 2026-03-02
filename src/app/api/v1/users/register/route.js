import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const backendUrl = `https://bfg-website-api.onrender.com/api/v1/users/register`;
        
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        
        console.log('Response from backend:', backendUrl);
        const data = await response.json();
        
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error('Error proxying register request:', error);
        return NextResponse.json(
            { error: 'Failed to register' },
            { status: 500 }
        );
    }
}
