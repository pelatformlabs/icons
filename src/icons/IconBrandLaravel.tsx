import React from 'react';

interface IconBrandLaravelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandLaravel: React.FC<IconBrandLaravelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-laravel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5l0 11.5" />
    <path d="M11 18v4" />
    <path d="M7 15.5l7 -4" />
    <path d="M14 7.5v4" />
    <path d="M14 11.5l4 2.5" />
    <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
    <path d="M7 8l4 -2.5" />
    <path d="M18 10l4 -2.5" />
  </svg>
  );
};

export default IconBrandLaravel;