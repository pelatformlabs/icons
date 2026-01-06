import React from 'react';

interface IconBrandStackshareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandStackshare: React.FC<IconBrandStackshareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-stackshare ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 12h3l3.5 6h3.5" />
    <path d="M17 6h-3.5l-3.5 6" />
  </svg>
  );
};

export default IconBrandStackshare;