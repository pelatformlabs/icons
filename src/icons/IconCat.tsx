import React from 'react';

interface IconCatProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCat: React.FC<IconCatProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cat ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546" />
    <path d="M2 16h5l-4 4" />
    <path d="M22 16h-5l4 4" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M9 11v.01" />
    <path d="M15 11v.01" />
  </svg>
  );
};

export default IconCat;