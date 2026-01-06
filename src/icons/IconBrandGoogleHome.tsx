import React from 'react';

interface IconBrandGoogleHomeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandGoogleHome: React.FC<IconBrandGoogleHomeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-google-home ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928" />
    <path d="M7 13v4h10v-4l-5 -5" />
    <path d="M14.8 5.2l-11.8 11.8" />
    <path d="M7 17v4" />
    <path d="M17 17v4" />
  </svg>
  );
};

export default IconBrandGoogleHome;