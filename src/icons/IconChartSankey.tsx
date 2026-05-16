import React from 'react';

interface IconChartSankeyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartSankey: React.FC<IconChartSankeyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-sankey ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6c6.944 0 9.056 8 16 8" />
    <path d="M4 12c6.37 0 9.63 6 16 6" />
    <path d="M20 6c-7.526 0 -7.905 12 -16 12" />
  </svg>
  );
};

export default IconChartSankey;