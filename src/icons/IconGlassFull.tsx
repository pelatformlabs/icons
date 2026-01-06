import React from 'react';

interface IconGlassFullProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGlassFull: React.FC<IconGlassFullProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-glass-full ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 21l8 0" />
    <path d="M12 15l0 6" />
    <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10" />
    <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" />
  </svg>
  );
};

export default IconGlassFull;