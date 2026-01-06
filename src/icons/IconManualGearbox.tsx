import React from 'react';

interface IconManualGearboxProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconManualGearbox: React.FC<IconManualGearboxProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-manual-gearbox ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 8l0 8" />
    <path d="M12 8l0 8" />
    <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
  </svg>
  );
};

export default IconManualGearbox;