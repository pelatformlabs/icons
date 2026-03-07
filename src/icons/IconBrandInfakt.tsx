import React from 'react';

interface IconBrandInfaktProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandInfakt: React.FC<IconBrandInfaktProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-infakt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14.936 6.063a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M5.52 5c.002 -.033 -1.69 1.568 1.02 3.733c-1.092 2.015 .853 2.992 .853 2.992c-.972 1.879 1.39 2.805 1.39 2.805c-1 2.39 -2 4.68 -3.555 6.454c1.495 .09 2.04 -.196 2.9 -.844c3.386 -2.552 4.937 -6.471 5.765 -8.62c.385 -1.001 -.323 -2.47 -1.247 -2.964c-2.52 -1.35 -7.178 -3.526 -7.127 -3.555" />
  </svg>
  );
};

export default IconBrandInfakt;