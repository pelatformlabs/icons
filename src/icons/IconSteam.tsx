import React from 'react';

interface IconSteamProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSteam: React.FC<IconSteamProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-steam ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M19 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M5.5 5.5l3 3" />
    <path d="M15.5 15.5l3 3" />
    <path d="M18.5 5.5l-3 3" />
    <path d="M8.5 15.5l-3 3" />
  </svg>
  );
};

export default IconSteam;