import React from 'react';

interface IconPlayerTrackPrevProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayerTrackPrev: React.FC<IconPlayerTrackPrevProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-player-track-prev ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 5v14l-8 -7l8 -7" />
    <path d="M10 5v14l-8 -7l8 -7" />
  </svg>
  );
};

export default IconPlayerTrackPrev;