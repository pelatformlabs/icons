import React from 'react';

interface IconArrowLeftRhombusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowLeftRhombus: React.FC<IconArrowLeftRhombusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-left-rhombus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 12h-13" />
    <path d="M6 9l-3 3l3 3" />
    <path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5" />
  </svg>
  );
};

export default IconArrowLeftRhombus;