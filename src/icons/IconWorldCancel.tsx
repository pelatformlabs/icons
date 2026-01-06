import React from 'react';

interface IconWorldCancelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldCancel: React.FC<IconWorldCancelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-cancel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 0 -8.985 9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275" />
    <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M17 21l4 -4" />
  </svg>
  );
};

export default IconWorldCancel;