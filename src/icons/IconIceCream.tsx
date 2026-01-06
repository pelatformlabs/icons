import React from 'react';

interface IconIceCreamProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIceCream: React.FC<IconIceCreamProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ice-cream ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21.5v-4.5" />
    <path d="M8 17h8v-10a4 4 0 1 0 -8 0v10" />
    <path d="M8 10.5l8 -3.5" />
    <path d="M8 14.5l8 -3.5" />
  </svg>
  );
};

export default IconIceCream;