import { cn } from '@/lib/cn';

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
};

export function Eyebrow({ children, className, as: As = 'p' }: EyebrowProps) {
  return (
    <As
      className={cn(
        'text-xs uppercase tracking-[0.2em] text-mist font-light',
        className
      )}
    >
      {children}
    </As>
  );
}
