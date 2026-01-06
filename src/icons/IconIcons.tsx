import React from 'react';

interface IconIconsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIcons: React.FC<IconIconsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-icons ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
    <path d="M2.5 21h8l-4 -7l-4 7" />
    <path d="M14 3l7 7" />
    <path d="M14 10l7 -7" />
    <path d="M14 14h7v7h-7l0 -7" />
  </svg>
  );
};

export default IconIcons;