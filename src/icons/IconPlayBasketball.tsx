import React from 'react';

interface IconPlayBasketballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayBasketball: React.FC<IconPlayBasketballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-basketball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M5 21l3 -3l.75 -1.5" />
    <path d="M14 21v-4l-4 -3l.5 -6" />
    <path d="M5 12l1 -3l4.5 -1l3.5 3l4 1" />
    <path d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
  </svg>
  );
};

export default IconPlayBasketball;