import React from 'react';

interface IconGenderTransgenderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderTransgender: React.FC<IconGenderTransgenderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-transgender ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M15 9l6 -6" />
    <path d="M21 7v-4h-4" />
    <path d="M9 9l-6 -6" />
    <path d="M3 7v-4h4" />
    <path d="M5.5 8.5l3 -3" />
    <path d="M12 16v5" />
    <path d="M9.5 19h5" />
  </svg>
  );
};

export default IconGenderTransgender;