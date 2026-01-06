import React from 'react';

interface IconBrandDockerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDocker: React.FC<IconBrandDockerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-docker ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46" />
    <path d="M5 10h3v3h-3l0 -3" />
    <path d="M8 10h3v3h-3l0 -3" />
    <path d="M11 10h3v3h-3l0 -3" />
    <path d="M8 7h3v3h-3l0 -3" />
    <path d="M11 7h3v3h-3l0 -3" />
    <path d="M11 4h3v3h-3l0 -3" />
    <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
    <path d="M10 16l0 .01" />
  </svg>
  );
};

export default IconBrandDocker;