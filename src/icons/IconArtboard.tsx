import React from 'react';

interface IconArtboardProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArtboard: React.FC<IconArtboardProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-artboard ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6" />
    <path d="M3 8l1 0" />
    <path d="M3 16l1 0" />
    <path d="M8 3l0 1" />
    <path d="M16 3l0 1" />
    <path d="M20 8l1 0" />
    <path d="M20 16l1 0" />
    <path d="M8 20l0 1" />
    <path d="M16 20l0 1" />
  </svg>
  );
};

export default IconArtboard;