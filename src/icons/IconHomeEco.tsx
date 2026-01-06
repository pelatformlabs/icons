import React from 'react';

interface IconHomeEcoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHomeEco: React.FC<IconHomeEcoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-home-eco ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
    <path d="M16 22s0 -2 3 -4" />
    <path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3" />
  </svg>
  );
};

export default IconHomeEco;