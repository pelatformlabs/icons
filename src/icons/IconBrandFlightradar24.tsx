import React from 'react';

interface IconBrandFlightradar24Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandFlightradar24: React.FC<IconBrandFlightradar24Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-flightradar24 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M8.5 20l3.5 -8l-6.5 6" />
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconBrandFlightradar24;