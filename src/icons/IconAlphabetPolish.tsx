import React from 'react';

interface IconAlphabetPolishProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlphabetPolish: React.FC<IconAlphabetPolishProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alphabet-polish ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
    <path d="M16 7v10" />
    <path d="M18 11l-4 2" />
    <path d="M10.5 17a1.5 1.5 0 0 0 0 3" />
  </svg>
  );
};

export default IconAlphabetPolish;