import React from 'react';

interface IconArrowBadgeRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowBadgeRight: React.FC<IconArrowBadgeRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-badge-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 7h-6l4 5l-4 5h6l4 -5l-4 -5" />
  </svg>
  );
};

export default IconArrowBadgeRight;