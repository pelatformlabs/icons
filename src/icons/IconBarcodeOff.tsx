import React from 'react';

interface IconBarcodeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBarcodeOff: React.FC<IconBarcodeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-barcode-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 7v-1c0 -.552 .224 -1.052 .586 -1.414" />
    <path d="M4 17v1a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v1" />
    <path d="M16 20h2c.551 0 1.05 -.223 1.412 -.584" />
    <path d="M5 11h1v2h-1l0 -2" />
    <path d="M10 11v2" />
    <path d="M15 11v.01" />
    <path d="M19 11v2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBarcodeOff;