import React from 'react';

interface IconVacuumCleanerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVacuumCleaner: React.FC<IconVacuumCleanerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vacuum-cleaner ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
    <path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    <path d="M12 16h.01" />
  </svg>
  );
};

export default IconVacuumCleaner;