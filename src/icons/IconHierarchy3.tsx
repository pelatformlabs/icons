import React from 'react';

interface IconHierarchy3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHierarchy3: React.FC<IconHierarchy3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hierarchy-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M18 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M2 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 17l2 -3" />
    <path d="M9 10l2 -3" />
    <path d="M13 7l2 3" />
    <path d="M17 14l2 3" />
    <path d="M15 14l-2 3" />
    <path d="M9 14l2 3" />
  </svg>
  );
};

export default IconHierarchy3;