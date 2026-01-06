import React from 'react';

interface IconPhysotherapistProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhysotherapist: React.FC<IconPhysotherapistProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-physotherapist ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
    <path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12 17v-7" />
    <path d="M8 20h7l1 -4l4 -2" />
    <path d="M18 20h3" />
  </svg>
  );
};

export default IconPhysotherapist;