import React from 'react';

interface IconCurrencyTakaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyTaka: React.FC<IconCurrencyTakaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-taka ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" />
    <path d="M8 11h6" />
  </svg>
  );
};

export default IconCurrencyTaka;