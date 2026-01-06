import React from 'react';

interface IconRewindForward50Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRewindForward50: React.FC<IconRewindForward50Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rewind-forward-50 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" />
    <path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
    <path d="M17 9l3 -3l-3 -3" />
    <path d="M9 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5v-3h3" />
  </svg>
  );
};

export default IconRewindForward50;