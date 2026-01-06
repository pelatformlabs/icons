import React from 'react';

interface IconFishHookProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFishHook: React.FC<IconFishHookProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fish-hook ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3" />
    <path d="M14 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 5v-2" />
  </svg>
  );
};

export default IconFishHook;