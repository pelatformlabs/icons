import React from 'react';

interface IconLockOpen2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLockOpen2: React.FC<IconLockOpen2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-lock-open-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
    <path d="M9 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M13 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
  );
};

export default IconLockOpen2;