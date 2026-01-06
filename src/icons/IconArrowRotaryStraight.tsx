import React from 'react';

interface IconArrowRotaryStraightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRotaryStraight: React.FC<IconArrowRotaryStraightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-rotary-straight ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M13 16v5" />
    <path d="M13 3v7" />
    <path d="M9 7l4 -4l4 4" />
  </svg>
  );
};

export default IconArrowRotaryStraight;