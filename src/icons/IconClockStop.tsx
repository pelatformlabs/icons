import React from 'react';

interface IconClockStopProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockStop: React.FC<IconClockStopProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-stop ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 0 -9 9" />
    <path d="M12 7v5l1 1" />
    <path d="M16 16h6v6h-6l0 -6" />
  </svg>
  );
};

export default IconClockStop;