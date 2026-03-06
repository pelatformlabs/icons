import React from 'react';

interface IconImageGenerationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconImageGeneration: React.FC<IconImageGenerationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-image-generation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
    <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
    <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
    <path d="M17 19a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
    <path d="M3 5a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
  </svg>
  );
};

export default IconImageGeneration;