import React from 'react';

interface IconBoxAlignBottomLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignBottomLeft: React.FC<IconBoxAlignBottomLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-bottom-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1" />
    <path d="M4 9v.01" />
    <path d="M4 4v.01" />
    <path d="M9 4v.01" />
    <path d="M15 4v.01" />
    <path d="M15 20v.01" />
    <path d="M20 4v.01" />
    <path d="M20 9v.01" />
    <path d="M20 15v.01" />
    <path d="M20 20v.01" />
  </svg>
  );
};

export default IconBoxAlignBottomLeft;