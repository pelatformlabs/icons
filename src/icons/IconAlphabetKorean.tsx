import React from 'react';

interface IconAlphabetKoreanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlphabetKorean: React.FC<IconAlphabetKoreanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alphabet-korean ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 7h6c0 2.5 -1.593 8.474 -6 10" />
    <path d="M16 5v14l0 -14" />
    <path d="M16 12h2" />
  </svg>
  );
};

export default IconAlphabetKorean;