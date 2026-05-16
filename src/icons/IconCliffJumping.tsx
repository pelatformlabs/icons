import React from 'react';

interface IconCliffJumpingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCliffJumping: React.FC<IconCliffJumpingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cliff-jumping ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10.5 18l2.5 2l2 -2" />
    <path d="M18 21l3 -3l-4 -2l-2 -5" />
    <path d="M9 8l3 3l3 1l4 -2l3 -2" />
    <path d="M3 21v-1l2 -3l.5 -2.5l1.5 -2.5l-1 -5l1 -3l-1 -1l-2 .5l-2 -.5" />
    <path d="M13.007 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconCliffJumping;