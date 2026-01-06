import React from 'react';

interface IconThermometerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconThermometer: React.FC<IconThermometerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-thermometer ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0" />
    <path d="M16 7l-1.5 -1.5" />
    <path d="M13 10l-1.5 -1.5" />
    <path d="M10 13l-1.5 -1.5" />
    <path d="M7 17l-3 3" />
  </svg>
  );
};

export default IconThermometer;