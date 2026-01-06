import React from 'react';

interface IconCylinderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCylinder: React.FC<IconCylinderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cylinder ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 6a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
    <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
  </svg>
  );
};

export default IconCylinder;