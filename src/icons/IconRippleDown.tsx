import React from 'react';

interface IconRippleDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRippleDown: React.FC<IconRippleDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ripple-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7q 4.5 -3 9 0t 9 0" />
    <path d="M3 17q 4.5 -3 9 0q .213 .142 .427 .27" />
    <path d="M3 12q 4.5 -3 9 0q 2.006 1.338 4.012 1.482" />
    <path d="M19 16v6" />
    <path d="M22 19l-3 3l-3 -3" />
  </svg>
  );
};

export default IconRippleDown;