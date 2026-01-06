import React from 'react';

interface IconMoodSad2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodSad2: React.FC<IconMoodSad2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-sad-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
    <path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
  </svg>
  );
};

export default IconMoodSad2;