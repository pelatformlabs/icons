import React from 'react';

interface IconTarget2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTarget2: React.FC<IconTarget2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-target-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 21l-1.74 -6" />
    <path d="M7 21l1.74 -6" />
    <path d="M12 4v-1" />
    <path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M18 10a6 6 0 1 0 -12 0a6 6 0 0 0 12 0" />
  </svg>
  );
};

export default IconTarget2;