import React from 'react';

interface IconPrisonProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPrison: React.FC<IconPrisonProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-prison ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 4v16" />
    <path d="M14 4v16" />
    <path d="M6 4v5" />
    <path d="M6 15v5" />
    <path d="M10 4v5" />
    <path d="M11 9h-6v6h6l0 -6" />
    <path d="M10 15v5" />
    <path d="M8 12h-.01" />
  </svg>
  );
};

export default IconPrison;