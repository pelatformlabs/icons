import React from 'react';

interface IconOlympicsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconOlympicsOff: React.FC<IconOlympicsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-olympics-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 6a3 3 0 1 0 3 3" />
    <path d="M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" />
    <path d="M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconOlympicsOff;