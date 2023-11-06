import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    const fontResponse = await fetch(
      new URL('/public/square-deal.ttf', import.meta.url)
    );

    if (!fontResponse.ok) {
      throw new Error('Failed to fetch the font file');
    }

    const fontData = await fontResponse.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            fontSize: 100,
            fontFamily: 'Typewriter',
            paddingTop: '100px',
            paddingLeft: '50px',
          }}
        >
          Hello world!
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Typewriter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (error) {
    console.error('Error fetching font data:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
