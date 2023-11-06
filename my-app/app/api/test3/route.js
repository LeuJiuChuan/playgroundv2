import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg fill="black" viewBox="0 0 284 65">
          <path d="M150 0 L75 200 L225 200 Z" />
        </svg>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}