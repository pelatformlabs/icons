import React from 'react';

interface IconStackBackwardProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStackBackward: React.FC<IconStackBackwardProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-backward ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 12l6 -3l-8 -4l-8 4l6 3" />
    <path d="M10 12l-6 3l8 4l8 -4l-6 -3l-2 1l-2 -1" fill="currentColor" />
  </svg>
  );
};

export default IconStackBackward;