import React from 'react';

interface IconHexagonsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHexagonsOff: React.FC<IconHexagonsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hexagons-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 18v-5l4 -2l4 2v5l-4 2l-4 -2" />
    <path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5" />
    <path d="M12 13l.661 -.331" />
    <path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHexagonsOff;