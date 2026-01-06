import React from 'react';

interface IconBrandPepsiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandPepsi: React.FC<IconBrandPepsiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-pepsi ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" />
    <path d="M5 17.5c5.118 -2.859 15 0 14 -11" />
  </svg>
  );
};

export default IconBrandPepsi;