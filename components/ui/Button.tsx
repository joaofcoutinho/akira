import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-bone text-ink hover:bg-bone/90 border border-bone',
  outline:
    'bg-transparent text-bone border border-line hover:bg-bone hover:text-ink hover:border-bone',
  ghost:
    'bg-transparent text-bone border border-transparent hover:text-bone/70',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-[0.18em]',
  md: 'px-6 py-3 text-xs tracking-[0.2em]',
  lg: 'px-8 py-4 text-sm tracking-[0.2em]',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full uppercase font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ('href' in props && props.href) {
    const { variant: _v, size: _s, className: _c, external, href, ...rest } =
      props as AnchorProps;
    void _v;
    void _s;
    void _c;
    if (external) {
      return (
        <a
          {...rest}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonProps;
  void _v;
  void _s;
  void _c;
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
