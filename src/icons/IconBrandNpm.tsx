import React from 'react';

interface IconBrandNpmProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandNpm: React.FC<IconBrandNpmProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-npm ${defaultSize} ${userClassName}`.trim();

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
    <path d="M1 8h22v7h-12v2h-4v-2h-6l0 -7" />
    <path d="M7 8v7" />
    <path d="M14 8v7" />
    <path d="M17 11v4" />
    <path d="M4 11v4" />
    <path d="M11 11v1" />
    <path d="M20 11v4" />
  </svg>
  );
};

export default IconBrandNpm;