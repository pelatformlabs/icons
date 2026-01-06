import React from 'react';

interface IconUsbProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUsb: React.FC<IconUsbProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-usb ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 17v-11.5" />
    <path d="M7 10v3l5 3" />
    <path d="M12 14.5l5 -2v-2.5" />
    <path d="M16 10h2v-2h-2l0 2" />
    <path d="M6 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M10 5.5h4l-2 -2.5l-2 2.5" />
  </svg>
  );
};

export default IconUsb;