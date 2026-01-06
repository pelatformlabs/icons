import React from 'react';

interface IconStackBackProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStackBack: React.FC<IconStackBackProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-back ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8l8 4l8 -4l-8 -4l-8 4" />
    <path d="M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2" fill="currentColor" />
    <path d="M8 10l-4 2l4 2m8 0l4 -2l-4 -2" />
  </svg>
  );
};

export default IconStackBack;