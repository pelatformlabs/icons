import React from 'react';

interface IconEarphoneBluetoothProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconEarphoneBluetooth: React.FC<IconEarphoneBluetoothProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-earphone-bluetooth ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.57 12.77a6.9 6.9 0 0 1 -.57 -2.77a7 7 0 0 1 14 0" />
    <path d="M9 16l-1 1" />
    <path d="M10.83 19.83l6.36 -6.37a1 1 0 0 0 0 -1.41l-4.19 -4.24a1 1 0 0 0 -1.41 0l-6.42 6.36a4 4 0 0 0 0 5.66a4 4 0 0 0 5.66 0" />
  </svg>
  );
};

export default IconEarphoneBluetooth;