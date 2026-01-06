import React from 'react';

interface IconHelicopterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHelicopter: React.FC<IconHelicopterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-helicopter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10l1 2h6" />
    <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2" />
    <path d="M13 9l0 -3" />
    <path d="M5 6l15 0" />
    <path d="M15 9.1v3.9h5.5" />
    <path d="M15 19l0 -3" />
    <path d="M19 19l-8 0" />
  </svg>
  );
};

export default IconHelicopter;