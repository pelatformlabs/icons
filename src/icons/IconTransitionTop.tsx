import React from 'react';

interface IconTransitionTopProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransitionTop: React.FC<IconTransitionTopProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transition-top ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" />
    <path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6" />
    <path d="M12 15v-8" />
    <path d="M9 10l3 -3l3 3" />
  </svg>
  );
};

export default IconTransitionTop;