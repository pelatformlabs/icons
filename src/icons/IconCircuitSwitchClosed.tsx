import React from 'react';

interface IconCircuitSwitchClosedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitSwitchClosed: React.FC<IconCircuitSwitchClosedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-switch-closed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 12h2" />
    <path d="M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M8 12h8" />
  </svg>
  );
};

export default IconCircuitSwitchClosed;