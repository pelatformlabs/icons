import React from 'react';

interface IconChartArcs3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartArcs3: React.FC<IconChartArcs3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-arcs-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 12a5 5 0 1 0 5 -5" />
    <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
  </svg>
  );
};

export default IconChartArcs3;