import React from 'react';

interface IconCircleOpenArrowUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleOpenArrowUp: React.FC<IconCircleOpenArrowUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-open-arrow-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15.998 20.066a9 9 0 1 0 -3.998 .934v-13" />
    <path d="M16 12l-4 -4l-4 4" />
  </svg>
  );
};

export default IconCircleOpenArrowUp;