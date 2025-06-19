import { siteConfig } from '@/lib/config';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e40af',
          fontSize: 60,
          fontWeight: 700,
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ marginBottom: '20px' }}>{siteConfig.shortName}</div>
        <div
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: '#93c5fd',
          }}
        >
          Kabupaten Bangka
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
