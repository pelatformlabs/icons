import React from 'react';

interface IconPlayHandballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayHandball: React.FC<IconPlayHandballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-handball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" />
    <path d="M7 6l2 4l5 .5l4 2.5l2.5 3" />
    <path d="M4 20l5 -1l1.5 -2" />
    <path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
  </svg>
  );
};

export default IconPlayHandball;