import React from 'react';

interface IconBrandAudibleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAudible: React.FC<IconBrandAudibleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-audible ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18.46 9.75a9 9 0 0 0 -12.92 0" />
    <path d="M14.34 11.58a5 5 0 0 0 -4.68 0" />
    <path d="M22 13l-10 4l-10 -4" />
  </svg>
  );
};

export default IconBrandAudible;