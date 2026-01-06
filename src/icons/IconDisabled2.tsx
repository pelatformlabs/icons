import React from 'react';

interface IconDisabled2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDisabled2: React.FC<IconDisabled2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-disabled-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9 11a5 5 0 1 0 3.95 7.95" />
    <path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
  </svg>
  );
};

export default IconDisabled2;