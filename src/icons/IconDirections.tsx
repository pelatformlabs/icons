import React from 'react';

interface IconDirectionsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDirections: React.FC<IconDirectionsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-directions ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21v-4" />
    <path d="M12 13v-4" />
    <path d="M12 5v-2" />
    <path d="M10 21h4" />
    <path d="M8 5v4h11l2 -2l-2 -2l-11 0" />
    <path d="M14 13v4h-8l-2 -2l2 -2l8 0" />
  </svg>
  );
};

export default IconDirections;