/* Dark card with subtle border, gold gradient hover state (pure CSS) */

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured';
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, variant = 'default', className = '', style }: CardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`overflow-hidden rounded-[16px] border border-white/[0.06] p-[32px] card-hover-gold ${
        isFeatured ? 'card-hover-gold--active' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
