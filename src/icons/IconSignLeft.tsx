import React from 'react';

interface IconSignLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSignLeft: React.FC<IconSignLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sign-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 21h-4" />
    <path d="M14 21v-10" />
    <path d="M14 6v-3" />
    <path d="M18 6h-10l-2 2.5l2 2.5h10l0 -5" />
  </svg>
  );
};

export default IconSignLeft;