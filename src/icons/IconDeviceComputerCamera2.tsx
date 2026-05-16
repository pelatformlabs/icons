import React from 'react';

interface IconDeviceComputerCamera2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceComputerCamera2: React.FC<IconDeviceComputerCamera2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-computer-camera-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 14h-10a4 4 0 0 1 -4 -4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4a4 4 0 0 1 -4 4" />
    <path d="M15 14h-6v4h6v-4" />
    <path d="M17 18h-10" />
    <path d="M12 10.02v.01" />
  </svg>
  );
};

export default IconDeviceComputerCamera2;