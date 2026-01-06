import React from 'react';

interface IconServerCogProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconServerCog: React.FC<IconServerCogProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-server-cog ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2" />
    <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" />
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M18 14.5v1.5" />
    <path d="M18 20v1.5" />
    <path d="M21.032 16.25l-1.299 .75" />
    <path d="M16.27 19l-1.3 .75" />
    <path d="M14.97 16.25l1.3 .75" />
    <path d="M19.733 19l1.3 .75" />
    <path d="M7 8v.01" />
    <path d="M7 16v.01" />
  </svg>
  );
};

export default IconServerCog;