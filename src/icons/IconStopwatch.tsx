import React from 'react';

interface IconStopwatchProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStopwatch: React.FC<IconStopwatchProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stopwatch ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
    <path d="M14.5 10.5l-2.5 2.5" />
    <path d="M17 8l1 -1" />
    <path d="M14 3h-4" />
  </svg>
  );
};

export default IconStopwatch;