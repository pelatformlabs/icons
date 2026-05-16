import React from 'react';

interface IconBuildingEiffelTowerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingEiffelTower: React.FC<IconBuildingEiffelTowerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-eiffel-tower ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 4c0 4.889 -2.292 12.111 -5 17" />
    <path d="M13 4c0 4.889 2.292 12.111 5 17" />
    <path d="M3 21h18" />
    <path d="M8 14h8" />
    <path d="M9 10h6" />
    <path d="M10 4h4" />
    <path d="M12 2v1.778" />
    <path d="M10 21s.27 -1.406 .667 -2c.333 -.5 .666 -1 1.333 -1s1 .5 1.333 1c.448 .672 .667 2 .667 2" />
  </svg>
  );
};

export default IconBuildingEiffelTower;