import React from 'react';

interface IconPhotoSensor3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoSensor3: React.FC<IconPhotoSensor3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-sensor-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 4h1a2 2 0 0 1 2 2v1" />
    <path d="M20 17v1a2 2 0 0 1 -2 2h-1" />
    <path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" />
    <path d="M4 7v-1a2 2 0 0 1 2 -2h1" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 18v2" />
    <path d="M4 12h2" />
    <path d="M12 4v2" />
    <path d="M20 12h-2" />
  </svg>
  );
};

export default IconPhotoSensor3;