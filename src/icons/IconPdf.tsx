import React from 'react';

interface IconPdfProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPdf: React.FC<IconPdfProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-pdf ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
    <path d="M17 12h3" />
    <path d="M21 8h-4v8" />
  </svg>
  );
};

export default IconPdf;