import React from 'react';

interface IconGenderThirdProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderThird: React.FC<IconGenderThirdProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-third ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
    <path d="M11 12h-3" />
    <path d="M8 12l-5 -4v8l5 -4" />
  </svg>
  );
};

export default IconGenderThird;