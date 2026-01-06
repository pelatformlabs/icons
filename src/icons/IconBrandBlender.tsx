import React from 'react';

interface IconBrandBlenderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBlender: React.FC<IconBrandBlenderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-blender ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 14a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
    <path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 16l9 -6.5" />
    <path d="M6 9h9" />
    <path d="M13 5l5.65 5" />
  </svg>
  );
};

export default IconBrandBlender;