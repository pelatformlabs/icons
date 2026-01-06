import React from 'react';

interface IconPercentageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPercentage: React.FC<IconPercentageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-percentage ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M6 18l12 -12" />
  </svg>
  );
};

export default IconPercentage;