import React from 'react';

interface IconCircuitChangeoverProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitChangeover: React.FC<IconCircuitChangeoverProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-changeover ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 12h2" />
    <path d="M20 7h2" />
    <path d="M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M20 17h2" />
    <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7.5 10.5l8.5 -3.5" />
  </svg>
  );
};

export default IconCircuitChangeover;