import React from 'react';

interface IconBrandSublimeTextProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSublimeText: React.FC<IconBrandSublimeTextProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-sublime-text ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 8l-14 4.5v-5.5l14 -4.5l0 5.5" />
    <path d="M19 17l-14 4.5v-5.5l14 -4.5l0 5.5" />
    <path d="M19 11.5l-14 -4.5" />
    <path d="M5 12.5l14 4.5" />
  </svg>
  );
};

export default IconBrandSublimeText;