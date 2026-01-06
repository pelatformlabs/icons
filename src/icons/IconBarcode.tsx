import React from 'react';

interface IconBarcodeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBarcode: React.FC<IconBarcodeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-barcode ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
    <path d="M4 17v1a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v1" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
    <path d="M5 11h1v2h-1l0 -2" />
    <path d="M10 11l0 2" />
    <path d="M14 11h1v2h-1l0 -2" />
    <path d="M19 11l0 2" />
  </svg>
  );
};

export default IconBarcode;