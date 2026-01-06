import React from 'react';

interface IconChartGridDotsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartGridDots: React.FC<IconChartGridDotsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-grid-dots ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M8 18h8" />
    <path d="M18 20v1" />
    <path d="M18 3v1" />
    <path d="M6 20v1" />
    <path d="M6 10v-7" />
    <path d="M12 3v18" />
    <path d="M18 8v8" />
    <path d="M8 12h13" />
    <path d="M21 6h-1" />
    <path d="M16 6h-13" />
    <path d="M3 12h1" />
    <path d="M20 18h1" />
    <path d="M3 18h1" />
    <path d="M6 14v2" />
  </svg>
  );
};

export default IconChartGridDots;