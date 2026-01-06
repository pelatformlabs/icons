import React from 'react';

interface IconAlarmSnoozeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlarmSnooze: React.FC<IconAlarmSnoozeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alarm-snooze ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M10 11h4l-4 4h4" />
    <path d="M7 4l-2.75 2" />
    <path d="M17 4l2.75 2" />
  </svg>
  );
};

export default IconAlarmSnooze;