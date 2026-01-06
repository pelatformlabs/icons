import React from 'react';

interface IconGenderAndrogyneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderAndrogyne: React.FC<IconGenderAndrogyneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-androgyne ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 11l6 -6" />
    <path d="M4 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M19 9v-4h-4" />
    <path d="M16.5 10.5l-3 -3" />
  </svg>
  );
};

export default IconGenderAndrogyne;