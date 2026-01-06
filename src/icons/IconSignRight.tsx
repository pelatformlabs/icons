import React from 'react';

interface IconSignRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSignRight: React.FC<IconSignRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sign-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 21h4" />
    <path d="M10 21v-10" />
    <path d="M10 6v-3" />
    <path d="M6 6h10l2 2.5l-2 2.5h-10l0 -5" />
  </svg>
  );
};

export default IconSignRight;