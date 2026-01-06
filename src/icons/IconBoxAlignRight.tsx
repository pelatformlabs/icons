import React from 'react';

interface IconBoxAlignRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignRight: React.FC<IconBoxAlignRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5" />
    <path d="M8.998 20.003h.01" />
    <path d="M3.997 20.003h.011" />
    <path d="M3.997 15.002h.011" />
    <path d="M3.997 9.002h.011" />
    <path d="M3.997 4.002h.011" />
    <path d="M8.998 4.002h.01" />
  </svg>
  );
};

export default IconBoxAlignRight;