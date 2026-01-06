import React from 'react';

interface IconGenderEpiceneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderEpicene: React.FC<IconGenderEpiceneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-epicene ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072" />
    <path d="M15.536 15.535l5.464 -5.535" />
    <path d="M3 14l5.464 -5.535" />
    <path d="M12 12h.01" />
  </svg>
  );
};

export default IconGenderEpicene;