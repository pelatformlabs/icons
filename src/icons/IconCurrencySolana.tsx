import React from 'react';

interface IconCurrencySolanaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencySolana: React.FC<IconCurrencySolanaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-solana ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 18h12l4 -4h-12l-4 4" />
    <path d="M8 14l-4 -4h12l4 4" />
    <path d="M16 10l4 -4h-12l-4 4" />
  </svg>
  );
};

export default IconCurrencySolana;