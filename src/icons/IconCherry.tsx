import React from 'react';

interface IconCherryProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCherry: React.FC<IconCherryProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cherry ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
    <path d="M14 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M9 13c.366 -2 1.866 -3.873 4.5 -5.6" />
    <path d="M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9" />
    <path d="M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0" />
  </svg>
  );
};

export default IconCherry;