import React from 'react';

interface IconCarTurbineProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarTurbine: React.FC<IconCarTurbineProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-turbine ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 13a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" />
    <path d="M11 9c2.489 .108 4.489 .108 6 0" />
    <path d="M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -6" />
    <path d="M11 13l-3.5 -1.5" />
    <path d="M11 13l2.5 3" />
    <path d="M8.5 16l2.5 -3" />
    <path d="M11 13l3.5 -1.5" />
    <path d="M11 9v4" />
  </svg>
  );
};

export default IconCarTurbine;