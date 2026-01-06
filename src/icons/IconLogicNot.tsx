import React from 'react';

interface IconLogicNotProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLogicNot: React.FC<IconLogicNotProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-logic-not ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12h-3" />
    <path d="M2 9h3" />
    <path d="M2 15h3" />
    <path d="M5 5l10 7l-10 7l0 -14" />
    <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconLogicNot;