import React from 'react';

interface IconSwipeLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSwipeLeft: React.FC<IconSwipeLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-swipe-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 12a4 4 0 1 0 -8 0a4 4 0 0 0 8 0" />
    <path d="M12 12h-8" />
    <path d="M7 15l-3 -3l3 -3" />
  </svg>
  );
};

export default IconSwipeLeft;