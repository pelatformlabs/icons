import React from 'react';

interface IconChartDots2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartDots2: React.FC<IconChartDots2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-dots-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 3v18h18" />
    <path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M21 3l-6 1.5" />
    <path d="M14.113 6.65l2.771 3.695" />
    <path d="M16 12.5l-5 2" />
  </svg>
  );
};

export default IconChartDots2;