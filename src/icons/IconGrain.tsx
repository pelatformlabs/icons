import React from 'react';

interface IconGrainProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGrain: React.FC<IconGrainProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-grain ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M13.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconGrain;