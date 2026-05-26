import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Akira Brand Studio — Branding High Ticket';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(60% 50% at 30% 30%, #1C3D2A 0%, #0A0F0D 70%)',
          color: '#F4F1EA',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#A8B5AD',
          }}
        >
          Akira · Brand Studio
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              maxWidth: 980,
            }}
          >
            Branding high ticket.
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#A8B5AD',
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            Identidade visual premium para marcas exigentes.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 18,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#A8B5AD',
          }}
        >
          <span>akirabrandstudio.com</span>
          <span>@akira.brands</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
