import React from 'react';

interface IconBarrelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBarrel: React.FC<IconBarrelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-barrel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22" />
    <path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" />
    <path d="M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" />
    <path d="M4.5 16h15" />
    <path d="M19.5 8h-15" />
  </svg>
  );
};

export default IconBarrel;