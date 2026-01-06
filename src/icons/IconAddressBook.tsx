import React from 'react';

interface IconAddressBookProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAddressBook: React.FC<IconAddressBookProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-address-book ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
    <path d="M10 16h6" />
    <path d="M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 8h3" />
    <path d="M4 12h3" />
    <path d="M4 16h3" />
  </svg>
  );
};

export default IconAddressBook;