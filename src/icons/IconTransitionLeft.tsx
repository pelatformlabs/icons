import React from 'react';

interface IconTransitionLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransitionLeft: React.FC<IconTransitionLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transition-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" />
    <path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0" />
    <path d="M15 12h-8" />
    <path d="M10 9l-3 3l3 3" />
  </svg>
  );
};

export default IconTransitionLeft;