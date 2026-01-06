import React from 'react';

interface IconBrandUnsplashProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandUnsplash: React.FC<IconBrandUnsplashProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-unsplash ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 11h5v4h6v-4h5v9h-16v-9" />
    <path d="M9 4h6v4h-6l0 -4" />
  </svg>
  );
};

export default IconBrandUnsplash;