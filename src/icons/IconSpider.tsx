import React from 'react';

interface IconSpiderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSpider: React.FC<IconSpiderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-spider ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 4v2l5 5" />
    <path d="M2.5 9.5l1.5 1.5h6" />
    <path d="M4 19v-2l6 -6" />
    <path d="M19 4v2l-5 5" />
    <path d="M21.5 9.5l-1.5 1.5h-6" />
    <path d="M20 19v-2l-6 -6" />
    <path d="M8 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconSpider;