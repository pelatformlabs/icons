import React from 'react';

interface IconRecordMailOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRecordMailOff: React.FC<IconRecordMailOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-record-mail-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
    <path d="M7 15h8" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconRecordMailOff;