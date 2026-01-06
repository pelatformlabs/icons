import React from 'react';

interface IconClockRecordProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockRecord: React.FC<IconClockRecordProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-record ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12.3a9 9 0 1 0 -8.683 8.694" />
    <path d="M12 7v5l2 2" />
    <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>
  );
};

export default IconClockRecord;