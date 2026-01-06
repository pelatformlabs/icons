import React from 'react';

interface IconBoxAlignLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignLeft: React.FC<IconBoxAlignLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5" />
    <path d="M15.002 20.003h-.01" />
    <path d="M20.003 20.003h-.011" />
    <path d="M20.003 15.002h-.011" />
    <path d="M20.003 9.002h-.011" />
    <path d="M20.003 4.002h-.011" />
    <path d="M15.002 4.002h-.01" />
  </svg>
  );
};

export default IconBoxAlignLeft;