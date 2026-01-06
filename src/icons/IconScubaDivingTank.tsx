import React from 'react';

interface IconScubaDivingTankProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconScubaDivingTank: React.FC<IconScubaDivingTankProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-scuba-diving-tank ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 11a4 4 0 1 1 8 0v5h-8l0 -5" />
    <path d="M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3" />
    <path d="M9 4h6" />
    <path d="M12 7v-3" />
    <path d="M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11.5 4a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
  </svg>
  );
};

export default IconScubaDivingTank;