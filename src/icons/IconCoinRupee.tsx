import React from 'react';

interface IconCoinRupeeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCoinRupee: React.FC<IconCoinRupeeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-coin-rupee ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
    <path d="M9 11h6" />
  </svg>
  );
};

export default IconCoinRupee;