import React from 'react';

interface IconCircuitAmmeterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitAmmeter: React.FC<IconCircuitAmmeterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-ammeter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M5 12h-3" />
    <path d="M19 12h3" />
    <path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" />
    <path d="M14 12h-4" />
  </svg>
  );
};

export default IconCircuitAmmeter;