import React from 'react';

interface IconTimelineEventExclamationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimelineEventExclamation: React.FC<IconTimelineEventExclamationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-timeline-event-exclamation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 20h-6" />
    <path d="M14 20h6" />
    <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
    <path d="M12 6v2" />
    <path d="M12 11v.01" />
  </svg>
  );
};

export default IconTimelineEventExclamation;