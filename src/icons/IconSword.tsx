import React from 'react';

interface IconSwordProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSword: React.FC<IconSwordProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sword ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9l5 0" />
    <path d="M6.5 11.5l6 6" />
  </svg>
  );
};

export default IconSword;