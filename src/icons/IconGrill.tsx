import React from 'react';

interface IconGrillProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGrill: React.FC<IconGrillProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-grill ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225" />
    <path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    <path d="M15 14l1 2" />
    <path d="M9 14l-3 6" />
    <path d="M15 18h-8" />
    <path d="M15 5v-1" />
    <path d="M12 5v-1" />
    <path d="M9 5v-1" />
  </svg>
  );
};

export default IconGrill;