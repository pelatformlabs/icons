import React from 'react';

interface IconChartDotsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartDots: React.FC<IconChartDotsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-dots ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10.16 10.62l2.34 2.88" />
    <path d="M15.088 13.328l2.837 -4.586" />
  </svg>
  );
};

export default IconChartDots;