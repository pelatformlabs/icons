import React from 'react';

interface IconTimelineProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeline: React.FC<IconTimelineProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-timeline ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 16l6 -7l5 5l5 -6" />
    <path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M9 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconTimeline;