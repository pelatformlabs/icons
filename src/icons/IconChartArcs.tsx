import React from 'react';

interface IconChartArcsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartArcs: React.FC<IconChartArcsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-arcs ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
    <path d="M3 12a9 9 0 1 0 9 -9" />
  </svg>
  );
};

export default IconChartArcs;