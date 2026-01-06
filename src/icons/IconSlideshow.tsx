import React from 'react';

interface IconSlideshowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSlideshow: React.FC<IconSlideshowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-slideshow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 6l.01 0" />
    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
    <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
    <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
    <path d="M8 21l.01 0" />
    <path d="M12 21l.01 0" />
    <path d="M16 21l.01 0" />
  </svg>
  );
};

export default IconSlideshow;