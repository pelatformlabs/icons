import React from 'react';

interface IconArrowMoveRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowMoveRight: React.FC<IconArrowMoveRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-move-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 12h10" />
    <path d="M18 9l3 3l-3 3" />
    <path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  </svg>
  );
};

export default IconArrowMoveRight;