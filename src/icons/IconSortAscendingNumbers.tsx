import React from 'react';

interface IconSortAscendingNumbersProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSortAscendingNumbers: React.FC<IconSortAscendingNumbersProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sort-ascending-numbers ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 15l3 3l3 -3" />
    <path d="M7 6v12" />
    <path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2" />
    <path d="M15 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
  </svg>
  );
};

export default IconSortAscendingNumbers;