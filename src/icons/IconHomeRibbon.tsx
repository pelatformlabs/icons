import React from 'react';

interface IconHomeRibbonProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHomeRibbon: React.FC<IconHomeRibbonProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-home-ribbon ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5l0 -7" />
    <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
  </svg>
  );
};

export default IconHomeRibbon;