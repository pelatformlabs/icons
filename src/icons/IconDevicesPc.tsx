import React from 'react';

interface IconDevicesPcProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDevicesPc: React.FC<IconDevicesPcProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-devices-pc ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5h6v14h-6l0 -14" />
    <path d="M12 9h10v7h-10l0 -7" />
    <path d="M14 19h6" />
    <path d="M17 16v3" />
    <path d="M6 13v.01" />
    <path d="M6 16v.01" />
  </svg>
  );
};

export default IconDevicesPc;