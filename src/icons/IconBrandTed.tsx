import React from 'react';

interface IconBrandTedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandTed: React.FC<IconBrandTedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-ted ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 8h4" />
    <path d="M4 8v8" />
    <path d="M13 8h-4v8h4" />
    <path d="M9 12h2.5" />
    <path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2" />
  </svg>
  );
};

export default IconBrandTed;