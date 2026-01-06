import React from 'react';

interface IconDisabledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDisabled: React.FC<IconDisabledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-disabled ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M11 7l0 8l4 0l4 5" />
    <path d="M11 11l5 0" />
    <path d="M7 11.5a5 5 0 1 0 6 7.5" />
  </svg>
  );
};

export default IconDisabled;