import React from 'react';

interface IconChessQueenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChessQueen: React.FC<IconChessQueenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chess-queen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" />
    <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8" />
    <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M5 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconChessQueen;