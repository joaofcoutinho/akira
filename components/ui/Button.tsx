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

const iconSizeClasses: Record<Size, string> = {
  sm: 'h-3 w-3',
  md: 'h-3.5 w-3.5',
  lg: 'h-4 w-4',
};

const iconExpandClasses: Record<Size, string> = {
  sm: 'group-hover/btn:max-w-[0.75rem]',
  md: 'group-hover/btn:max-w-[0.875rem]',
  lg: 'group-hover/btn:max-w-[1rem]',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
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
  'group/btn inline-flex items-center justify-center rounded-full uppercase font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

function Content({
  children,
  icon,
  iconPosition = 'right',
  size = 'md',
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: Size;
}) {
  if (!icon) return <>{children}</>;

  const iconWrap = (
    <span
      aria-hidden
      className={cn(
        'inline-flex items-center justify-center max-w-0 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:opacity-100',
        iconExpandClasses[size],
        iconPosition === 'right'
          ? '-translate-x-1 group-hover/btn:translate-x-0 group-hover/btn:ml-2'
          : 'translate-x-1 group-hover/btn:translate-x-0 group-hover/btn:mr-2'
      )}
    >
      <span
        className={cn(
          'inline-flex shrink-0 items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          iconSizeClasses[size],
          iconPosition === 'right'
            ? '-translate-x-2 group-hover/btn:translate-x-0'
            : 'translate-x-2 group-hover/btn:translate-x-0'
        )}
      >
        {icon}
      </span>
    </span>
  );

  return (
    <span className="inline-flex items-center">
      {iconPosition === 'left' && iconWrap}
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        {children}
      </span>
      {iconPosition === 'right' && iconWrap}
    </span>
  );
}

export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    icon,
    iconPosition = 'right',
    children,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <Content icon={icon} iconPosition={iconPosition} size={size}>
      {children}
    </Content>
  );

  if ('href' in props && props.href) {
    const {
      variant: _v,
      size: _s,
      className: _c,
      icon: _i,
      iconPosition: _ip,
      external,
      href,
      ...rest
    } = props as AnchorProps;
    void _v;
    void _s;
    void _c;
    void _i;
    void _ip;
    if (external) {
      return (
        <a
          {...rest}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    icon: _i,
    iconPosition: _ip,
    ...rest
  } = props as ButtonProps;
  void _v;
  void _s;
  void _c;
  void _i;
  void _ip;
  return (
    <button {...rest} className={classes}>
      {content}
    </button>
  );
}
