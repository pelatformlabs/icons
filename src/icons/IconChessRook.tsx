import React from 'react';

interface IconChessRookProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChessRook: React.FC<IconChessRookProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chess-rook ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8" />
    <path d="M8 16l1 -9h6l1 9" />
    <path d="M6 4l.5 3h11l.5 -3" />
    <path d="M10 4v3" />
    <path d="M14 4v3" />
  </svg>
  );
};

export default IconChessRook;