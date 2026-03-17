/* Reusable section title with optional gold accent word and subtitle */

import { GoldText } from './gold-text';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  goldWord?: string;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  tag,
  title,
  goldWord,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  /* Split title around goldWord to insert styled span */
  const renderTitle = () => {
    if (!goldWord) return title;
    const parts = title.split(goldWord);
    return (
      <>
        {parts[0]}
        <GoldText>{goldWord}</GoldText>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`${alignClass} ${className}`}>
      {tag && (
        <span className="mb-4 inline-block font-body text-[12px] font-normal uppercase leading-[18px] tracking-[3px] text-gold-muted">
          {tag}
        </span>
      )}
      <h2 className="font-heading text-[32px] leading-[1.15] font-normal text-white md:text-[60px] md:leading-[54.86px]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl font-body-alt text-[15.2px] leading-[25.84px] font-light text-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
