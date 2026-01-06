import React from 'react';

interface IconContractProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconContract: React.FC<IconContractProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-contract ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" />
    <path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" />
    <path d="M19 3h-11a3 3 0 0 0 -3 3v11" />
    <path d="M9 7h4" />
    <path d="M9 11h4" />
    <path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3l6.42 -6.39" />
  </svg>
  );
};

export default IconContract;