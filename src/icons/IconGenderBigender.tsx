import React from 'react';

interface IconGenderBigenderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderBigender: React.FC<IconGenderBigenderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-bigender ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 11a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M19 3l-5 5" />
    <path d="M15 3h4v4" />
    <path d="M11 16v6" />
    <path d="M8 19h6" />
  </svg>
  );
};

export default IconGenderBigender;