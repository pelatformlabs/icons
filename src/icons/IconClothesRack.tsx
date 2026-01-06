import React from 'react';

interface IconClothesRackProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClothesRack: React.FC<IconClothesRackProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clothes-rack ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 7v14" />
    <path d="M9 21h6" />
    <path d="M7.757 9.243a6 6 0 0 0 8.486 0" />
  </svg>
  );
};

export default IconClothesRack;