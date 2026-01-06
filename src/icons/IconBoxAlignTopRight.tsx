import React from 'react';

interface IconBoxAlignTopRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignTopRight: React.FC<IconBoxAlignTopRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-top-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1" />
    <path d="M20 15.01v-.01" />
    <path d="M20 20.01v-.01" />
    <path d="M15 20.01v-.01" />
    <path d="M9 20.01v-.01" />
    <path d="M9 4.01v-.01" />
    <path d="M4 20.01v-.01" />
    <path d="M4 15.01v-.01" />
    <path d="M4 9.01v-.01" />
    <path d="M4 4.01v-.01" />
  </svg>
  );
};

export default IconBoxAlignTopRight;