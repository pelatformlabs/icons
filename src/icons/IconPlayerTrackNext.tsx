import React from 'react';

interface IconPlayerTrackNextProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayerTrackNext: React.FC<IconPlayerTrackNextProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-player-track-next ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5v14l8 -7l-8 -7" />
    <path d="M14 5v14l8 -7l-8 -7" />
  </svg>
  );
};

export default IconPlayerTrackNext;