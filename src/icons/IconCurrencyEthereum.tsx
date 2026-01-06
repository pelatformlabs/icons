import React from 'react';

interface IconCurrencyEthereumProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyEthereum: React.FC<IconCurrencyEthereumProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-ethereum ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 12l6 -9l6 9l-6 9l-6 -9" />
    <path d="M6 12l6 -3l6 3l-6 2l-6 -2" />
  </svg>
  );
};

export default IconCurrencyEthereum;