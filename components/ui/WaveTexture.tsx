import { cn } from '@/lib/cn';

type WaveTextureProps = {
  className?: string;
  intensity?: 'subtle' | 'medium';
};

/**
 * Soft, layered SVG wave used as a background texture on key sections.
 * Lives in the green range of the brand. No grain — pure smooth gradients
 * to avoid the "noisy" look the client wants to avoid.
 */
export function WaveTexture({
  className,
  intensity = 'subtle',
}: WaveTextureProps) {
  const opacity = intensity === 'subtle' ? 0.18 : 0.32;

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="wave-glow-a" cx="20%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#2A6B47" stopOpacity={opacity} />
            <stop offset="60%" stopColor="#152E20" stopOpacity={opacity * 0.4} />
            <stop offset="100%" stopColor="#0A0F0D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wave-glow-b" cx="80%" cy="70%" r="55%">
            <stop offset="0%" stopColor="#1C3D2A" stopOpacity={opacity} />
            <stop offset="100%" stopColor="#0A0F0D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="wave-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A6B47" stopOpacity="0" />
            <stop offset="50%" stopColor="#2A6B47" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2A6B47" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#wave-glow-a)" />
        <rect width="1440" height="900" fill="url(#wave-glow-b)" />

        {[180, 280, 380, 480, 580, 680].map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} C 360 ${y - 40 + i * 4} 720 ${y + 30 - i * 3} 1080 ${y - 20 + i * 5} S 1440 ${y + 10} 1440 ${y + 10}`}
            stroke="url(#wave-line)"
            strokeWidth="1"
            fill="none"
            opacity={0.5 - i * 0.05}
            className="wave-line-drift"
            style={{ animationDelay: `${-i * 2.4}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
