import React from 'react';

interface IconBrandCucumberProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandCucumber: React.FC<IconBrandCucumberProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-cucumber ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01" />
    <path d="M10.5 8l-.5 -1" />
    <path d="M13.5 14l.5 1" />
    <path d="M9 12.5l-1 .5" />
    <path d="M11 14l-.5 1" />
    <path d="M13 8l.5 -1" />
    <path d="M16 12.5l-1 -.5" />
    <path d="M9 10l-1 -.5" />
  </svg>
  );
};

export default IconBrandCucumber;