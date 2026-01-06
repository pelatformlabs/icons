import React from 'react';

interface IconMicroscopeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMicroscope: React.FC<IconMicroscopeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-microscope ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 21h14" />
    <path d="M6 18h2" />
    <path d="M7 18v3" />
    <path d="M9 11l3 3l6 -6l-3 -3l-6 6" />
    <path d="M10.5 12.5l-1.5 1.5" />
    <path d="M17 3l3 3" />
    <path d="M12 21a6 6 0 0 0 3.715 -10.712" />
  </svg>
  );
};

export default IconMicroscope;