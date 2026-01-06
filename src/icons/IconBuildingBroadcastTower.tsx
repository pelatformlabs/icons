import React from 'react';

interface IconBuildingBroadcastTowerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingBroadcastTower: React.FC<IconBuildingBroadcastTowerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-broadcast-tower ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
    <path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
    <path d="M9 21l3 -9l3 9" />
    <path d="M10 19h4" />
  </svg>
  );
};

export default IconBuildingBroadcastTower;