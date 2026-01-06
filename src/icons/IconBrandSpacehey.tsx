import React from 'react';

interface IconBrandSpaceheyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSpacehey: React.FC<IconBrandSpaceheyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-spacehey ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M14 20h6v-6a3 3 0 0 0 -6 0v6" />
    <path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4" />
  </svg>
  );
};

export default IconBrandSpacehey;