import React from 'react';

interface IconGenderHermaphroditeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGenderHermaphrodite: React.FC<IconGenderHermaphroditeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gender-hermaphrodite ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 14v7" />
    <path d="M9 18h6" />
    <path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8" />
    <path d="M15 3a3 3 0 1 1 -6 0" />
  </svg>
  );
};

export default IconGenderHermaphrodite;