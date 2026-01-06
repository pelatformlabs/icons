import React from 'react';

interface IconSatelliteProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSatellite: React.FC<IconSatelliteProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-satellite ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414" />
    <path d="M6 10l-3 3l3 3l3 -3" />
    <path d="M10 6l3 -3l3 3l-3 3" />
    <path d="M12 12l1.5 1.5" />
    <path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
    <path d="M15 21a6 6 0 0 0 6 -6" />
  </svg>
  );
};

export default IconSatellite;