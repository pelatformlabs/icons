import React from 'react';

interface IconRewindBackward10Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRewindBackward10: React.FC<IconRewindBackward10Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rewind-backward-10 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 9l-3 -3l3 -3" />
    <path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" />
    <path d="M6 14v6" />
    <path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
  </svg>
  );
};

export default IconRewindBackward10;