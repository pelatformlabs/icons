import React from 'react';

interface IconVignetteProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVignette: React.FC<IconVignetteProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vignette ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
    <path d="M7.02 12h-.01" />
    <path d="M12.02 7h-.01" />
    <path d="M17.02 12h-.01" />
    <path d="M12.02 17h-.01" />
    <path d="M8.483 8.468l-.007 -.007" />
    <path d="M15.554 8.468l-.007 -.007" />
    <path d="M15.554 15.539l-.007 -.007" />
    <path d="M8.483 15.539l-.007 -.007" />
  </svg>
  );
};

export default IconVignette;