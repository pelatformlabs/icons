import React from 'react';

interface IconWorldLatitudeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldLatitude: React.FC<IconWorldLatitudeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-latitude ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M4.6 7l14.8 0" />
    <path d="M3 12l18 0" />
    <path d="M4.6 17l14.8 0" />
  </svg>
  );
};

export default IconWorldLatitude;