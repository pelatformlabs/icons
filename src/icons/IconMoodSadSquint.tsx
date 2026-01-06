import React from 'react';

interface IconMoodSadSquintProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodSadSquint: React.FC<IconMoodSadSquintProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-sad-squint ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
    <path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
    <path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
  </svg>
  );
};

export default IconMoodSadSquint;