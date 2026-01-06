import React from 'react';

interface IconPillsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPills: React.FC<IconPillsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-pills ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M4.5 4.5l7 7" />
    <path d="M19.5 14.5l-5 5" />
  </svg>
  );
};

export default IconPills;