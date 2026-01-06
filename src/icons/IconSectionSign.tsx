import React from 'react';

interface IconSectionSignProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSectionSign: React.FC<IconSectionSignProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-section-sign ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9.172 19a3 3 0 1 0 2.828 -4" />
    <path d="M14.83 5a3 3 0 1 0 -2.83 4" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>
  );
};

export default IconSectionSign;