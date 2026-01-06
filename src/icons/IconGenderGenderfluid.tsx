import React from 'react';

interface IconGenderGenderfluidProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderGenderfluid: React.FC<IconGenderGenderfluidProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-genderfluid ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928" />
    <path d="M15.464 14l3 -5.196" />
    <path d="M5.536 15.195l3 -5.196" />
    <path d="M12 12h.01" />
    <path d="M9 9l-6 -6" />
    <path d="M5.5 8.5l3 -3" />
    <path d="M21 21l-6 -6" />
    <path d="M17 20l3 -3" />
    <path d="M3 7v-4h4" />
  </svg>
  );
};

export default IconGenderGenderfluid;