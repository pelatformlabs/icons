import React from 'react';

interface IconRotate3dProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRotate3d: React.FC<IconRotate3dProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rotate-3d ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3a7 7 0 0 1 7 7v4l-3 -3" />
    <path d="M22 11l-3 3" />
    <path d="M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
    <path d="M3 12.5v5.5l5 3" />
    <path d="M8 15.545l5 -3.03" />
  </svg>
  );
};

export default IconRotate3d;