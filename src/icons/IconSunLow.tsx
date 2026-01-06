import React from 'react';

interface IconSunLowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSunLow: React.FC<IconSunLowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sun-low ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M4 12h.01" />
    <path d="M12 4v.01" />
    <path d="M20 12h.01" />
    <path d="M12 20v.01" />
    <path d="M6.31 6.31l-.01 -.01" />
    <path d="M17.71 6.31l-.01 -.01" />
    <path d="M17.7 17.7l.01 .01" />
    <path d="M6.3 17.7l.01 .01" />
  </svg>
  );
};

export default IconSunLow;