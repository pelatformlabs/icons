import React from 'react';

interface IconFountainProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFountain: React.FC<IconFountainProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fountain ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 16v-5a2 2 0 1 0 -4 0" />
    <path d="M15 16v-5a2 2 0 1 1 4 0" />
    <path d="M12 16v-10a3 3 0 0 1 6 0" />
    <path d="M6 6a3 3 0 0 1 6 0" />
    <path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
  </svg>
  );
};

export default IconFountain;