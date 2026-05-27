import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0b1326',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(46,91,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,91,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Top-right glow */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,91,255,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,91,255,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Bolt icon — unicode ⚡ styled as brand mark */}
            <div
              style={{
                width: 40,
                height: 40,
                background: '#2e5bff',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '-0.02em',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              UNSNAG.IO
            </span>
          </div>

          {/* Centre copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: '#2e5bff',
                  borderRadius: 2,
                  display: 'flex',
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#2e5bff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                AI Signal Intelligence
              </span>
            </div>

            {/* Headline — flex column so each line is a single child */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Stop the Friction.
              </span>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: '#2e5bff',
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Start UnSnagging.
              </span>
            </div>

            {/* Subline */}
            <span
              style={{
                fontSize: 24,
                color: '#8e90a2',
                lineHeight: 1.5,
                fontFamily: 'system-ui, sans-serif',
                maxWidth: 760,
              }}
            >
              The AI-powered swarm that turns web noise into actionable signals. Forensic data clarity on every page.
            </span>
          </div>

          {/* Bottom badges */}
          <div style={{ display: 'flex', gap: 16 }}>
            {['Swarm Ingestion', 'Signal Extraction', 'Live Intelligence'].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(46,91,255,0.12)',
                    border: '1px solid rgba(46,91,255,0.35)',
                    borderRadius: 8,
                    padding: '8px 18px',
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#2e5bff',
                      display: 'flex',
                    }}
                  />
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: '#c8cadf',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
