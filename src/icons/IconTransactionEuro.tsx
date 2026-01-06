import React from 'react';

interface IconTransactionEuroProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransactionEuro: React.FC<IconTransactionEuroProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transaction-euro ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12.8c-.523 -.502 -1.172 -.8 -1.875 -.8c-1.727 0 -3.125 1.791 -3.125 4s1.398 4 3.125 4c.703 0 1.352 -.298 1.874 -.8" />
    <path d="M15 16h4" />
    <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 5h8" />
    <path d="M7 5v8a3 3 0 0 0 3 3h1" />
  </svg>
  );
};

export default IconTransactionEuro;