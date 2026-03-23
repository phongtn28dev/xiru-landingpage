/* Reusable button with primary (gold), outline, and ghost variants */
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-button-fill text-white hover:bg-accent-gold-dark hover:text-bg-primary transition-colors',
  outline:
    'border border-border-gold text-accent-gold hover:bg-accent-gold/10 transition-colors',
  ghost: 'text-text-muted hover:text-white transition-colors',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-6 py-2.5 text-[14px]',
  lg: 'px-8 py-3 text-[15px]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  style,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-body font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}
