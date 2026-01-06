import React from 'react';

interface IconCoffinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCoffin: React.FC<IconCoffinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-coffin ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 3l-2 6l2 12h6l2 -12l-2 -6l-6 0" />
    <path d="M10 7v5" />
    <path d="M8 9h4" />
    <path d="M13 21h4l2 -12l-2 -6h-4" />
  </svg>
  );
};

export default IconCoffin;