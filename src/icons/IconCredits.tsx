import React from 'react';

interface IconCreditsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCredits: React.FC<IconCreditsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-credits ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 14a6 2 0 1 0 12 0a6 2 0 1 0 -12 0" />
    <path d="M3 14v5c0 1.105 2.686 2 6 2s6 -.895 6 -2v-5" />
    <path d="M9 5a6 2 0 1 0 12 0a6 2 0 1 0 -12 0" />
    <path d="M9 5v3" />
    <path d="M18.365 11.656c1.59 -.36 2.635 -.966 2.635 -1.656v-5" />
  </svg>
  );
};

export default IconCredits;