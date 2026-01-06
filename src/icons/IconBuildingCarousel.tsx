import React from 'react';

interface IconBuildingCarouselProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingCarousel: React.FC<IconBuildingCarouselProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-carousel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    <path d="M3 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M8 22l4 -10l4 10" />
  </svg>
  );
};

export default IconBuildingCarousel;