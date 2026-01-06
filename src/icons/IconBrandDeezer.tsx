import React from 'react';

interface IconBrandDeezerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDeezer: React.FC<IconBrandDeezerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-deezer ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 16.5h2v.5h-2l0 -.5" />
    <path d="M8 16.5h2.5v.5h-2.5l0 -.5" />
    <path d="M16 17h-2.5v-.5h2.5l0 .5" />
    <path d="M21.5 17h-2.5v-.5h2.5l0 .5" />
    <path d="M21.5 13h-2.5v.5h2.5l0 -.5" />
    <path d="M21.5 9.5h-2.5v.5h2.5l0 -.5" />
    <path d="M21.5 6h-2.5v.5h2.5l0 -.5" />
    <path d="M16 13h-2.5v.5h2.5l0 -.5" />
    <path d="M8 13.5h2.5v-.5h-2.5l0 .5" />
    <path d="M8 9.5h2.5v.5h-2.5l0 -.5" />
  </svg>
  );
};

export default IconBrandDeezer;