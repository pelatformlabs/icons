import React from 'react';

interface IconHdrProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHdr: React.FC<IconHdrProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hdr ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 16v-8" />
    <path d="M7 8v8" />
    <path d="M3 12h4" />
    <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    <path d="M17 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
  </svg>
  );
};

export default IconHdr;