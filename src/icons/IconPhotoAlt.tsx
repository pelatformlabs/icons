import React from 'react';

interface IconPhotoAltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoAlt: React.FC<IconPhotoAltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-alt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 18h5" />
    <path d="M14 18h4" />
    <path d="M15 7h.01" />
    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
    <path d="M3 15l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
    <path d="M14 13l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
    <path d="M3 15h18" />
  </svg>
  );
};

export default IconPhotoAlt;