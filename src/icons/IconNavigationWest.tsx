import React from 'react';

interface IconNavigationWestProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconNavigationWest: React.FC<IconNavigationWestProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-navigation-west ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 3l1 6l2 -3.75l2 3.75l1 -6" />
    <path d="M16 21l-4 -8l-4 8l4 -2l4 2" />
  </svg>
  );
};

export default IconNavigationWest;