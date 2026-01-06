import React from 'react';

interface IconDeviceUsbProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceUsb: React.FC<IconDeviceUsbProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-usb ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 8h10v8a5 5 0 0 1 -10 0l0 -8" />
    <path d="M9 8v-5h6v5" />
  </svg>
  );
};

export default IconDeviceUsb;