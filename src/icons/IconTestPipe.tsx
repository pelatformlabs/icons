import React from 'react';

interface IconTestPipeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTestPipe: React.FC<IconTestPipeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-test-pipe ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124" />
    <path d="M7 13h8" />
    <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" />
    <path d="M15 3l6 6" />
  </svg>
  );
};

export default IconTestPipe;