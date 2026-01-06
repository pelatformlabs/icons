import React from 'react';

interface IconMarsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMars: React.FC<IconMarsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mars ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 14a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M19 5l-5.4 5.4" />
    <path d="M19 5l-5 0" />
    <path d="M19 5l0 5" />
  </svg>
  );
};

export default IconMars;