import React from 'react';

interface IconGenderFemaleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderFemale: React.FC<IconGenderFemaleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-female ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 9a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M12 14v7" />
    <path d="M9 18h6" />
  </svg>
  );
};

export default IconGenderFemale;