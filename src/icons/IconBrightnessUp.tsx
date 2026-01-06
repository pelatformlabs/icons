import React from 'react';

interface IconBrightnessUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrightnessUp: React.FC<IconBrightnessUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brightness-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 5l0 -2" />
    <path d="M17 7l1.4 -1.4" />
    <path d="M19 12l2 0" />
    <path d="M17 17l1.4 1.4" />
    <path d="M12 19l0 2" />
    <path d="M7 17l-1.4 1.4" />
    <path d="M6 12l-2 0" />
    <path d="M7 7l-1.4 -1.4" />
  </svg>
  );
};

export default IconBrightnessUp;