import React from 'react';

interface IconDeviceMobileVibrationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceMobileVibration: React.FC<IconDeviceMobileVibrationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-mobile-vibration ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -14" />
    <path d="M8 4l2 0" />
    <path d="M9 17l0 .01" />
    <path d="M21 6l-2 3l2 3l-2 3l2 3" />
  </svg>
  );
};

export default IconDeviceMobileVibration;