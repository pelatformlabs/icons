import React from 'react';

interface IconImageInPictureProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconImageInPicture: React.FC<IconImageInPictureProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-image-in-picture ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 15c-2 0 -5 1 -5 5" />
    <path d="M4 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2l0 -5" />
    <path d="M4 7v-2a1 1 0 0 1 1 -1h2" />
    <path d="M11 4h2" />
    <path d="M17 4h2a1 1 0 0 1 1 1v2" />
    <path d="M20 11v2" />
    <path d="M20 17v2a1 1 0 0 1 -1 1h-2" />
  </svg>
  );
};

export default IconImageInPicture;