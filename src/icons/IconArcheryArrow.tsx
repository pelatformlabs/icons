import React from 'react';

interface IconArcheryArrowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArcheryArrow: React.FC<IconArcheryArrowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-archery-arrow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 7v3h3l3 -3h-3v-3l-3 3" />
    <path d="M14 10l-9 9" />
    <path d="M5 15v4h4" />
  </svg>
  );
};

export default IconArcheryArrow;