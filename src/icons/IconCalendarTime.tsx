import React from 'react';

interface IconCalendarTimeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCalendarTime: React.FC<IconCalendarTimeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-calendar-time ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
    <path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M15 3v4" />
    <path d="M7 3v4" />
    <path d="M3 11h16" />
    <path d="M18 16.496v1.504l1 1" />
  </svg>
  );
};

export default IconCalendarTime;