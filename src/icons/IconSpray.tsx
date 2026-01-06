import React from 'react';

interface IconSprayProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSpray: React.FC<IconSprayProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-spray ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7" />
    <path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
    <path d="M15 7h.01" />
    <path d="M18 9h.01" />
    <path d="M18 5h.01" />
    <path d="M21 3h.01" />
    <path d="M21 7h.01" />
    <path d="M21 11h.01" />
    <path d="M10 7h1" />
  </svg>
  );
};

export default IconSpray;