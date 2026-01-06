import React from 'react';

interface IconFocus2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFocus2: React.FC<IconFocus2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-focus-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
    <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <path d="M12 3l0 2" />
    <path d="M3 12l2 0" />
    <path d="M12 19l0 2" />
    <path d="M19 12l2 0" />
  </svg>
  );
};

export default IconFocus2;