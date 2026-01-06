import React from 'react';

interface IconFallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFall: React.FC<IconFallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fall ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
    <path d="M6 16l-1 -4l3 -4" />
    <path d="M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M13.5 12h2.5l4 2" />
  </svg>
  );
};

export default IconFall;