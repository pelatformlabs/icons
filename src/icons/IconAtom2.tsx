import React from 'react';

interface IconAtom2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAtom2: React.FC<IconAtom2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-atom-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 21l0 .01" />
    <path d="M3 9l0 .01" />
    <path d="M21 9l0 .01" />
    <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
    <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
    <path d="M6.2 5a9 9 0 0 1 11.4 0" />
  </svg>
  );
};

export default IconAtom2;