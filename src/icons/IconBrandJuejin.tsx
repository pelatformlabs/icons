import React from 'react';

interface IconBrandJuejinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandJuejin: React.FC<IconBrandJuejinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-juejin ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 12l10 7.422l10 -7.422" />
    <path d="M7 9l5 4l5 -4" />
    <path d="M11 6l1 .8l1 -.8l-1 -.8l-1 .8" />
  </svg>
  );
};

export default IconBrandJuejin;