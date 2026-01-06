import React from 'react';

interface IconPerfumeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPerfume: React.FC<IconPerfumeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-perfume ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 6v3" />
    <path d="M14 6v3" />
    <path d="M5 11a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -8" />
    <path d="M10 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9 3h6v3h-6l0 -3" />
  </svg>
  );
};

export default IconPerfume;