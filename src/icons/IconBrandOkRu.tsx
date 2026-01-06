import React from 'react';

interface IconBrandOkRuProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandOkRu: React.FC<IconBrandOkRuProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-ok-ru ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8" />
    <path d="M9.5 13c1.333 .667 3.667 .667 5 0" />
    <path d="M9.5 17l2.5 -3l2.5 3" />
    <path d="M12 13.5v.5" />
  </svg>
  );
};

export default IconBrandOkRu;