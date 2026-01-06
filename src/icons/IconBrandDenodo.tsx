import React from 'react';

interface IconBrandDenodoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDenodo: React.FC<IconBrandDenodoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-denodo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 11h2v2h-2l0 -2" />
    <path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
    <path d="M11 19h2v2h-2l0 -2" />
    <path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1l1 -1.732" />
    <path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1l-1 -1.732" />
    <path d="M11 3h2v2h-2l0 -2" />
    <path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732l-1.732 -1" />
  </svg>
  );
};

export default IconBrandDenodo;