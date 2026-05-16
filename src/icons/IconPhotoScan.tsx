import React from 'react';

interface IconPhotoScanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoScan: React.FC<IconPhotoScanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-scan ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 8h.01" />
    <path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
    <path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
    <path d="M3 7v-2a2 2 0 0 1 2 -2h2" />
    <path d="M3 17v2a2 2 0 0 0 2 2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M17 21h2a2 2 0 0 0 2 -2v-2" />
  </svg>
  );
};

export default IconPhotoScan;