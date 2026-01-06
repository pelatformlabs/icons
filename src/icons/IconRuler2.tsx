import React from 'react';

interface IconRuler2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRuler2: React.FC<IconRuler2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ruler-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 3l4 4l-14 14l-4 -4l14 -14" />
    <path d="M16 7l-1.5 -1.5" />
    <path d="M13 10l-1.5 -1.5" />
    <path d="M10 13l-1.5 -1.5" />
    <path d="M7 16l-1.5 -1.5" />
  </svg>
  );
};

export default IconRuler2;