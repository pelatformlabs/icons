import React from 'react';

interface IconChartDots3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartDots3: React.FC<IconChartDots3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-dots-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M14 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M3 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M9 17l5 -1.5" />
    <path d="M6.5 8.5l7.81 5.37" />
    <path d="M7 7l8 -1" />
  </svg>
  );
};

export default IconChartDots3;