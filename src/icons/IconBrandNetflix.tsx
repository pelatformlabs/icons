import React from 'react';

interface IconBrandNetflixProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandNetflix: React.FC<IconBrandNetflixProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-netflix ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 3l10 18h-4l-10 -18l4 0" />
    <path d="M5 3v18h4v-10.5" />
    <path d="M19 21v-18h-4v10.5" />
  </svg>
  );
};

export default IconBrandNetflix;