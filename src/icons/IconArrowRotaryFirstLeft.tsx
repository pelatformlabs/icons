import React from 'react';

interface IconArrowRotaryFirstLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRotaryFirstLeft: React.FC<IconArrowRotaryFirstLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-rotary-first-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
    <path d="M16 10v10" />
    <path d="M13.5 9.5l-8.5 8.5" />
    <path d="M10 18h-5v-5" />
  </svg>
  );
};

export default IconArrowRotaryFirstLeft;