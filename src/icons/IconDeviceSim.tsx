import React from 'react';

interface IconDeviceSimProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceSim: React.FC<IconDeviceSimProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-sim ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1" />
    <path d="M9 11h3v6" />
    <path d="M15 17v.01" />
    <path d="M15 14v.01" />
    <path d="M15 11v.01" />
    <path d="M9 14v.01" />
    <path d="M9 17v.01" />
  </svg>
  );
};

export default IconDeviceSim;