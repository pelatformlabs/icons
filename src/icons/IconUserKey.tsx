import React from 'react';

interface IconUserKeyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUserKey: React.FC<IconUserKeyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-user-key ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h5" />
    <path d="M18.5 18.5l-3.5 3.5l-1.5 -1.5" />
    <path d="M18.554 18.414a2 2 0 1 1 2.828 -2.828a2 2 0 0 1 -2.828 2.828" />
    <path d="M16 19l1 1" />
  </svg>
  );
};

export default IconUserKey;