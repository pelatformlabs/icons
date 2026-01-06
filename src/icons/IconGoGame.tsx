import React from 'react';

interface IconGoGameProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGoGame: React.FC<IconGoGameProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-go-game ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 12h7m4 0h7" />
    <path d="M3 6h1m4 0h13" />
    <path d="M3 18h1m4 0h8m4 0h1" />
    <path d="M6 3v1m0 4v8m0 4v1" />
    <path d="M12 3v7m0 4v7" />
    <path d="M18 3v13m0 4v1" />
  </svg>
  );
};

export default IconGoGame;