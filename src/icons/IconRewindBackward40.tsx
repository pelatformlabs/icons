import React from 'react';

interface IconRewindBackward40Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRewindBackward40: React.FC<IconRewindBackward40Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rewind-backward-40 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11" />
    <path d="M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
    <path d="M6 14v2a1 1 0 0 0 1 1h1" />
    <path d="M9 14v6" />
    <path d="M7 9l-3 -3l3 -3" />
  </svg>
  );
};

export default IconRewindBackward40;