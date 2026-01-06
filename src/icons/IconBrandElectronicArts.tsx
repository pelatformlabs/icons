import React from 'react';

interface IconBrandElectronicArtsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandElectronicArts: React.FC<IconBrandElectronicArtsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-electronic-arts ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
    <path d="M17 14h-2" />
    <path d="M6.5 12h3.5" />
    <path d="M8 9h3" />
  </svg>
  );
};

export default IconBrandElectronicArts;