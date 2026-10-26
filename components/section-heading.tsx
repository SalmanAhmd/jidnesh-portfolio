import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  lede?: ReactNode;
  titleId?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  lede,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <span className="section-label">
          <span className="index">{index}</span> {label}
        </span>
      </div>
      <div className="section-head-copy">
        <h2 className="section-title" id={titleId}>
          {title}
        </h2>
        {lede ? <p className="section-lede">{lede}</p> : null}
      </div>
    </div>
  );
}
