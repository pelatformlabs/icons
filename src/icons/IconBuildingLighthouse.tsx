import React from 'react';

interface IconBuildingLighthouseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingLighthouse: React.FC<IconBuildingLighthouseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-lighthouse ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3l2 3l2 15h-8l2 -15l2 -3" />
    <path d="M8 9l8 0" />
    <path d="M3 11l2 -2l-2 -2" />
    <path d="M21 11l-2 -2l2 -2" />
  </svg>
  );
};

export default IconBuildingLighthouse;