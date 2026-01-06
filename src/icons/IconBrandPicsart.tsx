import React from 'react';

interface IconBrandPicsartProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandPicsart: React.FC<IconBrandPicsartProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-picsart ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 9a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
  </svg>
  );
};

export default IconBrandPicsart;