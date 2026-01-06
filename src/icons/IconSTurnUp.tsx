import React from 'react';

interface IconSTurnUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSTurnUp: React.FC<IconSTurnUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-s-turn-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
    <path d="M16 6l3 -3l3 3" />
  </svg>
  );
};

export default IconSTurnUp;