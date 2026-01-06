import React from 'react';

interface IconShapeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShapeOff: React.FC<IconShapeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shape-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" />
    <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17.574 17.598a2 2 0 0 0 2.826 2.83" />
    <path d="M5 7v10" />
    <path d="M9 5h8" />
    <path d="M7 19h10" />
    <path d="M19 7v8" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconShapeOff;