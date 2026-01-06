import React from 'react';

interface IconBrandBinanceProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBinance: React.FC<IconBrandBinanceProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-binance ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6" />
    <path d="M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6" />
    <path d="M20 10l2 2l-2 2l-2 -2l2 -2" />
    <path d="M4 10l2 2l-2 2l-2 -2l2 -2" />
    <path d="M12 10l2 2l-2 2l-2 -2l2 -2" />
  </svg>
  );
};

export default IconBrandBinance;