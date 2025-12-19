import React from 'react';

interface IconAlphabetRunesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlphabetRunes: React.FC<IconAlphabetRunesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alphabet-runes ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 18v-12" />
    <path d="M13 6l4 4l4 -4" />
    <path d="M11 18l-7 -8l4 -4l4 4l-7 8" />
  </svg>
  );
};

export default IconAlphabetRunes;