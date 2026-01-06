import React from 'react';

interface IconKeyboardProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconKeyboard: React.FC<IconKeyboardProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-keyboard ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" />
    <path d="M6 10l0 .01" />
    <path d="M10 10l0 .01" />
    <path d="M14 10l0 .01" />
    <path d="M18 10l0 .01" />
    <path d="M6 14l0 .01" />
    <path d="M18 14l0 .01" />
    <path d="M10 14l4 .01" />
  </svg>
  );
};

export default IconKeyboard;