import React from 'react';

interface IconOldProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconOld: React.FC<IconOldProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-old ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 21l-1 -4l-2 -3v-6" />
    <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
    <path d="M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M7 17l-2 4" />
    <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
  </svg>
  );
};

export default IconOld;