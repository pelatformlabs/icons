import React from 'react';

interface IconArrowUpSquareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowUpSquare: React.FC<IconArrowUpSquareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-up-square ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 17l0 -14" />
    <path d="M15 6l-3 -3l-3 3" />
    <path d="M10 21v-4h4v4l-4 0" />
  </svg>
  );
};

export default IconArrowUpSquare;