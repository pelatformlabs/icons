import React from 'react';

interface IconCircleOpenArrowRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleOpenArrowRight: React.FC<IconCircleOpenArrowRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-open-arrow-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.934 8.002a9 9 0 1 1 -.934 3.998h13" />
    <path d="M12 8l4 4l-4 4" />
  </svg>
  );
};

export default IconCircleOpenArrowRight;