import React from 'react';

interface IconBedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBed: React.FC<IconBedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M22 17v-3h-20" />
    <path d="M2 8v9" />
    <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5" />
  </svg>
  );
};

export default IconBed;