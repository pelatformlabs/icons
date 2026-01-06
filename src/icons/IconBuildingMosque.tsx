import React from 'react';

interface IconBuildingMosqueProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingMosque: React.FC<IconBuildingMosqueProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-mosque ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21h7v-2a2 2 0 1 1 4 0v2h7" />
    <path d="M4 21v-10" />
    <path d="M20 21v-10" />
    <path d="M4 16h3v-3h10v3h3" />
    <path d="M17 13a5 5 0 0 0 -10 0" />
    <path d="M21 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5" />
    <path d="M5 10.5c0 -.329 -.077 -.653 -.224 -.947l-.776 -1.553l-.776 1.553a2.118 2.118 0 0 0 -.224 .947a.5 .5 0 0 0 .5 .5h1a.5 .5 0 0 0 .5 -.5" />
    <path d="M12 2a2 2 0 1 0 2 2" />
    <path d="M12 6v2" />
  </svg>
  );
};

export default IconBuildingMosque;