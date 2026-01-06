import React from 'react';

interface IconYogaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconYoga: React.FC<IconYogaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-yoga ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M4 20h4l1.5 -3" />
    <path d="M17 20l-1 -5h-5l1 -7" />
    <path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" />
  </svg>
  );
};

export default IconYoga;