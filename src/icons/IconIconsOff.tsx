import React from 'react';

interface IconIconsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIconsOff: React.FC<IconIconsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-icons-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4.01 4.041a3.5 3.5 0 0 0 2.49 5.959c.975 0 1.865 -.357 2.5 -1m.958 -3.044a3.503 3.503 0 0 0 -2.905 -2.912" />
    <path d="M2.5 21h8l-4 -7l-4 7" />
    <path d="M14 3l7 7" />
    <path d="M14 10l7 -7" />
    <path d="M18 14h3v3m0 4h-7v-7" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconIconsOff;