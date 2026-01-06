import React from 'react';

interface IconGripHorizontalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGripHorizontal: React.FC<IconGripHorizontalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-grip-horizontal ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconGripHorizontal;