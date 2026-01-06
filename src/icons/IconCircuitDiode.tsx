import React from 'react';

interface IconCircuitDiodeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitDiode: React.FC<IconCircuitDiodeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-diode ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12h-6" />
    <path d="M2 12h6" />
    <path d="M8 7l8 5l-8 5l0 -10" />
    <path d="M16 7v10" />
  </svg>
  );
};

export default IconCircuitDiode;