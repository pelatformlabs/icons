import React from 'react';

interface IconWalkProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWalk: React.FC<IconWalkProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-walk ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M7 21l3 -4" />
    <path d="M16 21l-2 -4l-3 -3l1 -6" />
    <path d="M6 12l2 -3l4 -1l3 3l3 1" />
  </svg>
  );
};

export default IconWalk;