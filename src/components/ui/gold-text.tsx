/* Gold accent text wrapper — applies italic Playfair + gold color */

interface GoldTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GoldText({ children, className = '' }: GoldTextProps) {
  return (
    <em className={`font-playfair-display text-accent-gold ${className}`}>
      {children}
    </em>
  );
}
