import React from 'react';

interface IconSkiJumpingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSkiJumping: React.FC<IconSkiJumpingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ski-jumping ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 17.5l-5 -4.5v-6l5 4" />
    <path d="M7 17.5l5 -4.5" />
    <path d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
    <path d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
    <path d="M7 11l5 -4" />
    <path d="M10.007 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconSkiJumping;