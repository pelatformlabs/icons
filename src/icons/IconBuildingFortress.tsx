import React from 'react';

interface IconBuildingFortressProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingFortress: React.FC<IconBuildingFortressProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-fortress ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 21h1a1 1 0 0 0 1 -1v-1a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
    <path d="M7 7v.01" />
    <path d="M7 10v.01" />
    <path d="M7 13v.01" />
    <path d="M17 7v.01" />
    <path d="M17 10v.01" />
    <path d="M17 13v.01" />
  </svg>
  );
};

export default IconBuildingFortress;