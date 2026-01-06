import React from 'react';

interface IconMoodNerdProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodNerd: React.FC<IconMoodNerdProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-nerd ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M6 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M14 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    <path d="M3.5 9h2.5" />
    <path d="M18 9h2.5" />
    <path d="M10 9.5c1.333 -1.333 2.667 -1.333 4 0" />
  </svg>
  );
};

export default IconMoodNerd;