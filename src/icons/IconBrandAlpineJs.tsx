import React from 'react';

interface IconBrandAlpineJsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAlpineJs: React.FC<IconBrandAlpineJsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-alpine-js ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5" />
    <path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
  </svg>
  );
};

export default IconBrandAlpineJs;