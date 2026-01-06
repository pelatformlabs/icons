import React from 'react';

interface IconStretchingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStretching: React.FC<IconStretchingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stretching ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M5 20l5 -.5l1 -2" />
    <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
  </svg>
  );
};

export default IconStretching;