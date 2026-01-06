import React from 'react';

interface IconSportBillardProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSportBillard: React.FC<IconSportBillardProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sport-billard ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
  </svg>
  );
};

export default IconSportBillard;