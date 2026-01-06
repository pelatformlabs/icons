import React from 'react';

interface IconArrowRightCircleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRightCircle: React.FC<IconArrowRightCircleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-right-circle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 15l3 -3l-3 -3" />
    <path d="M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 12h14" />
  </svg>
  );
};

export default IconArrowRightCircle;