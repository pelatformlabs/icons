import React from 'react';

interface IconCarSuspensionProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarSuspension: React.FC<IconCarSuspensionProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-suspension ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 22a3 3 0 1 1 0 -6a3 3 0 0 1 0 6" />
    <path d="M12 16v-12" />
    <path d="M13 2h-2v2h2v-2" />
    <path d="M9 11l6 -1" />
    <path d="M9 14l6 -1" />
    <path d="M9 8l6 -1" />
  </svg>
  );
};

export default IconCarSuspension;