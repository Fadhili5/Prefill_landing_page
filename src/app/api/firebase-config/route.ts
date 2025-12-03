import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Verify origin to prevent unauthorized access
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://www.prefill.live',
    'https://prefill.live',
    process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : null,
  ].filter(Boolean);

  // Allow same-origin requests (when loaded from the same domain)
  const referer = request.headers.get('referer');
  const isSameOrigin = referer?.startsWith('https://www.prefill.live') || 
                       referer?.startsWith('https://prefill.live');

  if (!isSameOrigin && origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 403 }
    );
  }

  // Return Firebase config from environment variables
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  // Validate all required fields are present
  if (!config.apiKey || !config.authDomain || !config.projectId) {
    return NextResponse.json(
      { error: 'Firebase configuration incomplete' },
      { status: 500 }
    );
  }

  return NextResponse.json(config, {
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

