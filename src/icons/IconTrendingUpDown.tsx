import React from 'react';

interface IconTrendingUpDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrendingUpDown: React.FC<IconTrendingUpDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-trending-up-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 14l6 -6l4 4l9 -9" />
    <path d="M15 3h6v6" />
    <path d="M15 21h6v-6" />
    <path d="M21 21l-6 -6" />
  </svg>
  );
};

export default IconTrendingUpDown;