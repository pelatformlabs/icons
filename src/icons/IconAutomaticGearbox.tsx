import React from 'react';

interface IconAutomaticGearboxProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAutomaticGearbox: React.FC<IconAutomaticGearboxProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-automatic-gearbox ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 17v4h1a2 2 0 1 0 0 -4h-1" />
    <path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" />
    <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" />
    <path d="M9 11h4" />
  </svg>
  );
};

export default IconAutomaticGearbox;