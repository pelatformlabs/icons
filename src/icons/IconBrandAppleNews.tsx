import React from 'react';

interface IconBrandAppleNewsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAppleNews: React.FC<IconBrandAppleNewsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-apple-news ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 14l6 6h-6l0 -6" />
    <path d="M20 10l-6 -6h6l0 6" />
    <path d="M4 4v4l12 12h4v-4l-12 -12l-4 0" />
  </svg>
  );
};

export default IconBrandAppleNews;