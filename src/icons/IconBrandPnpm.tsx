import React from 'react';

interface IconBrandPnpmProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandPnpm: React.FC<IconBrandPnpmProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-pnpm ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17h4v4h-4l0 -4" />
    <path d="M10 17h4v4h-4l0 -4" />
    <path d="M17 17h4v4h-4l0 -4" />
    <path d="M17 10h4v4h-4l0 -4" />
    <path d="M17 3h4v4h-4l0 -4" />
    <path d="M10 10h4v4h-4l0 -4" />
    <path d="M10 3h4v4h-4l0 -4" />
    <path d="M3 3h4v4h-4l0 -4" />
  </svg>
  );
};

export default IconBrandPnpm;