import React from 'react';

interface IconArrowRotaryFirstRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRotaryFirstRight: React.FC<IconArrowRotaryFirstRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-rotary-first-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M8 10v10" />
    <path d="M10.5 9.5l8.5 8.5" />
    <path d="M14 18h5v-5" />
  </svg>
  );
};

export default IconArrowRotaryFirstRight;