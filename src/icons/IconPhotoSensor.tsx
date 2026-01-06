import React from 'react';

interface IconPhotoSensorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoSensor: React.FC<IconPhotoSensorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-sensor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 5h2a2 2 0 0 1 2 2v2" />
    <path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
    <path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
    <path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
    <path d="M7 10a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -4" />
  </svg>
  );
};

export default IconPhotoSensor;