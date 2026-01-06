import React from 'react';

interface IconBoxAlignTopLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignTopLeft: React.FC<IconBoxAlignTopLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-top-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1" />
    <path d="M15 4h-.01" />
    <path d="M20 4h-.01" />
    <path d="M20 9h-.01" />
    <path d="M20 15h-.01" />
    <path d="M4 15h-.01" />
    <path d="M20 20h-.01" />
    <path d="M15 20h-.01" />
    <path d="M9 20h-.01" />
    <path d="M4 20h-.01" />
  </svg>
  );
};

export default IconBoxAlignTopLeft;