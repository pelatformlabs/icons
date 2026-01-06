import React from 'react';

interface IconShadowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShadow: React.FC<IconShadowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shadow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M13 12h5" />
    <path d="M13 15h4" />
    <path d="M13 18h1" />
    <path d="M13 9h4" />
    <path d="M13 6h1" />
  </svg>
  );
};

export default IconShadow;