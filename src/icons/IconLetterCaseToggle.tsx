import React from 'react';

interface IconLetterCaseToggleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLetterCaseToggle: React.FC<IconLetterCaseToggleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-letter-case-toggle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
    <path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
    <path d="M14 13h7" />
    <path d="M10 12v7" />
  </svg>
  );
};

export default IconLetterCaseToggle;