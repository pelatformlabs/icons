import React from 'react';

interface IconJetpackProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconJetpack: React.FC<IconJetpackProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-jetpack ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 6a3 3 0 1 0 -6 0v7h6v-7" />
    <path d="M14 13h6v-7a3 3 0 0 0 -6 0v7" />
    <path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
    <path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
    <path d="M10 8h4" />
    <path d="M10 11h4" />
  </svg>
  );
};

export default IconJetpack;