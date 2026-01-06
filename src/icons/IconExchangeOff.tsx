import React from 'react';

interface IconExchangeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExchangeOff: React.FC<IconExchangeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-exchange-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M19 8v5c0 .594 -.104 1.164 -.294 1.692m-1.692 2.298a4.978 4.978 0 0 1 -3.014 1.01h-3l3 -3" />
    <path d="M14 21l-3 -3" />
    <path d="M5 16v-5c0 -1.632 .782 -3.082 1.992 -4m3.008 -1h3l-3 -3" />
    <path d="M11.501 7.499l1.499 -1.499" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconExchangeOff;