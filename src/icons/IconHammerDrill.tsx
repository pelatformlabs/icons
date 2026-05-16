import React from 'react';

interface IconHammerDrillProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHammerDrill: React.FC<IconHammerDrillProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hammer-drill ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 15v6" />
    <path d="M16 5h4" />
    <path d="M8 5h-4" />
    <path d="M15 11h-6a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1" />
    <path d="M14 11h-4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-3" />
  </svg>
  );
};

export default IconHammerDrill;