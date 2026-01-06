import React from 'react';

interface IconTransactionYuanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransactionYuan: React.FC<IconTransactionYuanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transaction-yuan ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 17h6" />
    <path d="M15 12l3 4.5" />
    <path d="M21 12l-3 4.5v4.5" />
    <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 5h8" />
    <path d="M7 5v8a3 3 0 0 0 3 3h1" />
  </svg>
  );
};

export default IconTransactionYuan;