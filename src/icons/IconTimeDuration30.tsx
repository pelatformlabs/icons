import React from 'react';

interface IconTimeDuration30Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeDuration30: React.FC<IconTimeDuration30Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-time-duration-30 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
    <path d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
    <path d="M3 12v.01" />
    <path d="M7.5 4.2v.01" />
    <path d="M7.5 19.8v.01" />
    <path d="M4.2 16.5v.01" />
    <path d="M4.2 7.5v.01" />
    <path d="M12 21a9 9 0 0 0 0 -18" />
  </svg>
  );
};

export default IconTimeDuration30;