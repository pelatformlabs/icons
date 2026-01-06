import React from 'react';

interface IconDeviceCctvProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceCctv: React.FC<IconDeviceCctvProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-cctv ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
    <path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
    <path d="M12 14l.01 0" />
  </svg>
  );
};

export default IconDeviceCctv;