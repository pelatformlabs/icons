import React from 'react';

interface IconVirusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVirus: React.FC<IconVirusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-virus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M12 7v-4" />
    <path d="M11 3h2" />
    <path d="M15.536 8.464l2.828 -2.828" />
    <path d="M17.657 4.929l1.414 1.414" />
    <path d="M17 12h4" />
    <path d="M21 11v2" />
    <path d="M15.535 15.536l2.829 2.828" />
    <path d="M19.071 17.657l-1.414 1.414" />
    <path d="M12 17v4" />
    <path d="M13 21h-2" />
    <path d="M8.465 15.536l-2.829 2.828" />
    <path d="M6.343 19.071l-1.413 -1.414" />
    <path d="M7 12h-4" />
    <path d="M3 13v-2" />
    <path d="M8.464 8.464l-2.828 -2.828" />
    <path d="M4.929 6.343l1.414 -1.413" />
  </svg>
  );
};

export default IconVirus;