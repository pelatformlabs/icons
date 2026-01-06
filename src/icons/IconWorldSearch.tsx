import React from 'react';

interface IconWorldSearchProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldSearch: React.FC<IconWorldSearchProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-search ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 0 -9 9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h7.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
    <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M20.2 20.2l1.8 1.8" />
  </svg>
  );
};

export default IconWorldSearch;