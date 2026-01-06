import React from 'react';

interface IconGenderTrasvestiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderTrasvesti: React.FC<IconGenderTrasvestiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-trasvesti ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10" />
    <path d="M6 6l5.4 5.4" />
    <path d="M4 8l4 -4" />
  </svg>
  );
};

export default IconGenderTrasvesti;