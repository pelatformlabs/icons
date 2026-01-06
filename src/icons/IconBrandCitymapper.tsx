import React from 'react';

interface IconBrandCitymapperProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandCitymapper: React.FC<IconBrandCitymapperProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-citymapper ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013" />
    <path d="M21 11a1 1 0 1 1 -1 1.013a1 1 0 0 1 1 -1v-.013" />
    <path d="M8 12h8" />
    <path d="M13 9l3 3l-3 3" />
  </svg>
  );
};

export default IconBrandCitymapper;