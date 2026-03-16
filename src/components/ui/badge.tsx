/* Small pill badge for pricing tier highlight (e.g. "POPULAR") */

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-accent-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-bg-primary ${className}`}
    >
      {children}
    </span>
  );
}
