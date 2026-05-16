import React from 'react';

interface IconCarDoorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarDoor: React.FC<IconCarDoorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-door ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 14h2" />
    <path d="M19 10h-16" />
    <path d="M6.7 3.45l-3.7 5.55v3.08a1 1 0 0 0 .85 1a6 6 0 0 1 5.15 5.92v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-16a1 1 0 0 0 -1 -1h-10.46a1 1 0 0 0 -.84 .45" />
  </svg>
  );
};

export default IconCarDoor;