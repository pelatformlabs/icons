import React from 'react';

interface IconPlungerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlunger: React.FC<IconPlungerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-plunger ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12.71 14.12l7.81 -7.82a2 2 0 0 0 -2.82 -2.82l-7.82 7.81" />
    <path d="M3.71 13.22l.7 -.71a5 5 0 0 1 7.08 0a5 5 0 0 1 0 7.08l-.71 .7" />
    <path d="M3 12.5l8.5 8.5" />
  </svg>
  );
};

export default IconPlunger;