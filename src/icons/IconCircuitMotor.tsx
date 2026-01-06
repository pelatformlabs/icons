import React from 'react';

interface IconCircuitMotorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitMotor: React.FC<IconCircuitMotorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-motor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 14v-4l2 2l2 -2v4" />
  </svg>
  );
};

export default IconCircuitMotor;