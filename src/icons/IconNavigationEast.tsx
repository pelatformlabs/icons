import React from 'react';

interface IconNavigationEastProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconNavigationEast: React.FC<IconNavigationEastProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-navigation-east ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 3h-4v6h4" />
    <path d="M10 6h2.5" />
    <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
  </svg>
  );
};

export default IconNavigationEast;