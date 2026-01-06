import React from 'react';

interface IconHemispherePlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHemispherePlus: React.FC<IconHemispherePlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hemisphere-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" />
    <path d="M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
  );
};

export default IconHemispherePlus;