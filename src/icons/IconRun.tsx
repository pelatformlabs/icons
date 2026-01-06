import React from 'react';

interface IconRunProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRun: React.FC<IconRunProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-run ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M4 17l5 1l.75 -1.5" />
    <path d="M15 21l0 -4l-4 -3l1 -6" />
    <path d="M7 12l0 -3l5 -1l3 3l3 1" />
  </svg>
  );
};

export default IconRun;