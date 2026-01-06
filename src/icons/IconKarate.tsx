import React from 'react';

interface IconKarateProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconKarate: React.FC<IconKarateProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-karate ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 9l4.5 1l3 2.5" />
    <path d="M13 21v-8l3 -5.5" />
    <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
  </svg>
  );
};

export default IconKarate;