import React from 'react';

interface IconDialpadOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDialpadOff: React.FC<IconDialpadOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-dialpad-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 7h-4v-4" />
    <path d="M17 3h4v4h-4l0 -4" />
    <path d="M10 6v-3h4v4h-3" />
    <path d="M3 10h4v4h-4l0 -4" />
    <path d="M17 13v-3h4v4h-3" />
    <path d="M14 14h-4v-4" />
    <path d="M10 17h4v4h-4l0 -4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconDialpadOff;