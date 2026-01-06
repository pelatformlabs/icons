import React from 'react';

interface IconShapeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShape: React.FC<IconShapeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shape ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 7l0 10" />
    <path d="M7 5l10 0" />
    <path d="M7 19l10 0" />
    <path d="M19 7l0 10" />
  </svg>
  );
};

export default IconShape;