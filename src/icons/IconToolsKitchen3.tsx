import React from 'react';

interface IconToolsKitchen3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToolsKitchen3: React.FC<IconToolsKitchen3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tools-kitchen-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
    <path d="M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
    <path d="M17 12v9" />
  </svg>
  );
};

export default IconToolsKitchen3;