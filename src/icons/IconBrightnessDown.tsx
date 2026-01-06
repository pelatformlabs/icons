import React from 'react';

interface IconBrightnessDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrightnessDown: React.FC<IconBrightnessDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brightness-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 5l0 .01" />
    <path d="M17 7l0 .01" />
    <path d="M19 12l0 .01" />
    <path d="M17 17l0 .01" />
    <path d="M12 19l0 .01" />
    <path d="M7 17l0 .01" />
    <path d="M5 12l0 .01" />
    <path d="M7 7l0 .01" />
  </svg>
  );
};

export default IconBrightnessDown;