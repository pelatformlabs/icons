import React from 'react';

interface IconGrapeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGrape: React.FC<IconGrapeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-grape ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 3a14.5 14.5 0 0 0 -1 6" />
    <path d="M12 8.9s-2.77 .52 -4.1 -.8s-.8 -4 -.8 -4s2.57 -.53 3.88 .8s1.02 4 1.02 4" />
    <path d="M14 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M14 17a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    <path d="M10 17a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    <path d="M12 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    <path d="M16 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
    <path d="M8 13a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
  </svg>
  );
};

export default IconGrape;