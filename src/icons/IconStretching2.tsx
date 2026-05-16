import React from 'react';

interface IconStretching2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStretching2: React.FC<IconStretching2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stretching-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.5 21l3.5 -5" />
    <path d="M5 11l7 -2" />
    <path d="M16 21l-4 -7v-5l7 -4" />
    <path d="M9.007 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconStretching2;