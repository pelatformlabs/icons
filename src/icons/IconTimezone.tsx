import React from 'react';

interface IconTimezoneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimezone: React.FC<IconTimezoneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-timezone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.884 10.554a9 9 0 1 0 -10.337 10.328" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h6.9" />
    <path d="M11.5 3a17 17 0 0 0 -1.502 14.954" />
    <path d="M12.5 3a17 17 0 0 1 2.52 7.603" />
    <path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M18 16.5v1.5l.5 .5" />
  </svg>
  );
};

export default IconTimezone;