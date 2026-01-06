import React from 'react';

interface IconLivePhotoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLivePhoto: React.FC<IconLivePhotoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-live-photo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M15.9 20.11l0 .01" />
    <path d="M19.04 17.61l0 .01" />
    <path d="M20.77 14l0 .01" />
    <path d="M20.77 10l0 .01" />
    <path d="M19.04 6.39l0 .01" />
    <path d="M15.9 3.89l0 .01" />
    <path d="M12 3l0 .01" />
    <path d="M8.1 3.89l0 .01" />
    <path d="M4.96 6.39l0 .01" />
    <path d="M3.23 10l0 .01" />
    <path d="M3.23 14l0 .01" />
    <path d="M4.96 17.61l0 .01" />
    <path d="M8.1 20.11l0 .01" />
    <path d="M12 21l0 .01" />
  </svg>
  );
};

export default IconLivePhoto;