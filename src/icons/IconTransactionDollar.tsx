import React from 'react';

interface IconTransactionDollarProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransactionDollar: React.FC<IconTransactionDollarProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transaction-dollar ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.8 13a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
    <path d="M18 11v10" />
    <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 5h8" />
    <path d="M7 5v8a3 3 0 0 0 3 3h1" />
  </svg>
  );
};

export default IconTransactionDollar;