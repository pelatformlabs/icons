import React from 'react';

interface IconHierarchy2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHierarchy2: React.FC<IconHierarchy2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hierarchy-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 3h4v4h-4l0 -4" />
    <path d="M3 17h4v4h-4l0 -4" />
    <path d="M17 17h4v4h-4l0 -4" />
    <path d="M7 17l5 -4l5 4" />
    <path d="M12 7l0 6" />
  </svg>
  );
};

export default IconHierarchy2;