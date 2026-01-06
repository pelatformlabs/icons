import React from 'react';

interface IconAdjustmentsAltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAdjustmentsAlt: React.FC<IconAdjustmentsAltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-adjustments-alt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8h4v4h-4l0 -4" />
    <path d="M6 4l0 4" />
    <path d="M6 12l0 8" />
    <path d="M10 14h4v4h-4l0 -4" />
    <path d="M12 4l0 10" />
    <path d="M12 18l0 2" />
    <path d="M16 5h4v4h-4l0 -4" />
    <path d="M18 4l0 1" />
    <path d="M18 9l0 11" />
  </svg>
  );
};

export default IconAdjustmentsAlt;