import React from 'react';

interface IconRazorElectricProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRazorElectric: React.FC<IconRazorElectricProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-razor-electric ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 3v2" />
    <path d="M12 3v2" />
    <path d="M16 3v2" />
    <path d="M9 12v6a3 3 0 0 0 6 0v-6h-6" />
    <path d="M8 5h8l-1 4h-6l-1 -4" />
    <path d="M12 17v1" />
  </svg>
  );
};

export default IconRazorElectric;