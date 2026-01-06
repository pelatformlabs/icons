import React from 'react';

interface IconRouterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRouter: React.FC<IconRouterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-router ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
    <path d="M17 17l0 .01" />
    <path d="M13 17l0 .01" />
    <path d="M15 13l0 -2" />
    <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
    <path d="M8.5 6.5a8 8 0 0 1 13 0" />
  </svg>
  );
};

export default IconRouter;