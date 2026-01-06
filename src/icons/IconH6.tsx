import React from 'react';

interface IconH6Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconH6: React.FC<IconH6Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-h-6 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
    <path d="M21 12a2 2 0 1 0 -4 0v4" />
    <path d="M4 6v12" />
    <path d="M12 6v12" />
    <path d="M11 18h2" />
    <path d="M3 18h2" />
    <path d="M4 12h8" />
    <path d="M3 6h2" />
    <path d="M11 6h2" />
  </svg>
  );
};

export default IconH6;