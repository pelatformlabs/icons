import React from 'react';

interface IconParkingMeterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconParkingMeter: React.FC<IconParkingMeterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-parking-meter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 9a3 3 0 0 0 -6 0" />
    <path d="M12 19v3" />
    <path d="M10.938 19h2.122a4.04 4.04 0 0 0 3.868 -2.82l1.775 -5.68c1.082 -3.463 -.882 -7.138 -4.386 -8.208a6.7 6.7 0 0 0 -1.96 -.292h-.716c-3.668 0 -6.641 2.939 -6.641 6.563c0 .657 .1 1.31 .296 1.937l1.775 5.68a4.04 4.04 0 0 0 3.867 2.82" />
    <path d="M11 12h2" />
    <path d="M12 12v3" />
  </svg>
  );
};

export default IconParkingMeter;