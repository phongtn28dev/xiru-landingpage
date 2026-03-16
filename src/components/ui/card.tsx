/* Dark card with subtle border, optional gold featured variant */

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const borderClass =
    variant === 'featured' ? 'border-border-gold' : 'border-border-subtle';

  return (
    <div
      className={`rounded-[16px] border bg-bg-card p-[32px] ${borderClass} ${className}`}
    >
      {children}
    </div>
  );
}
