import React from 'react';

interface IconLogicXorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLogicXor: React.FC<IconLogicXorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-logic-xor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12h-4" />
    <path d="M2 9h6" />
    <path d="M2 15h6" />
    <path d="M7 19c1.778 -4.667 1.778 -9.333 0 -14" />
    <path d="M10 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14" />
  </svg>
  );
};

export default IconLogicXor;