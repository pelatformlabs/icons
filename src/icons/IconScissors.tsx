import React from 'react';

interface IconScissorsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconScissors: React.FC<IconScissorsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-scissors ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M8.6 8.6l10.4 10.4" />
    <path d="M8.6 15.4l10.4 -10.4" />
  </svg>
  );
};

export default IconScissors;