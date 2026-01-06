import React from 'react';

interface IconBrandTripadvisorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandTripadvisor: React.FC<IconBrandTripadvisorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-tripadvisor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
    <path d="M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
    <path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5" />
    <path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5" />
    <path d="M10.5 15.5l1.5 2l1.5 -2" />
    <path d="M9 6.75c2 -.667 4 -.667 6 0" />
  </svg>
  );
};

export default IconBrandTripadvisor;