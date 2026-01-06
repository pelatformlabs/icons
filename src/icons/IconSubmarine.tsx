import React from 'react';

interface IconSubmarineProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSubmarine: React.FC<IconSubmarineProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-submarine ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10l-3 1.5l-1 -1.5h-2" />
    <path d="M17 11l-1 -3h-5l-1 3" />
    <path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
  </svg>
  );
};

export default IconSubmarine;