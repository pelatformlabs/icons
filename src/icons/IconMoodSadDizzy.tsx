import React from 'react';

interface IconMoodSadDizzyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodSadDizzy: React.FC<IconMoodSadDizzyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-sad-dizzy ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 9l2 2" />
    <path d="M10 9l-2 2" />
    <path d="M14 9l2 2" />
    <path d="M16 9l-2 2" />
  </svg>
  );
};

export default IconMoodSadDizzy;