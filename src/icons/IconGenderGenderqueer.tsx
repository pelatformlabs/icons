import React from 'react';

interface IconGenderGenderqueerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderGenderqueer: React.FC<IconGenderGenderqueerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-genderqueer ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10" />
    <path d="M12 11v-8" />
    <path d="M14.5 4.5l-5 3" />
    <path d="M9.5 4.5l5 3" />
  </svg>
  );
};

export default IconGenderGenderqueer;