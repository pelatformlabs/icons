import React from 'react';

interface IconForkliftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconForklift: React.FC<IconForkliftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-forklift ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 17l5 0" />
    <path d="M3 17v-6h13v6" />
    <path d="M5 11v-4h4" />
    <path d="M9 11v-6h4l3 6" />
    <path d="M22 15h-3v-10" />
    <path d="M16 13l3 0" />
  </svg>
  );
};

export default IconForklift;