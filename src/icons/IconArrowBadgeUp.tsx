import React from 'react';

interface IconArrowBadgeUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowBadgeUp: React.FC<IconArrowBadgeUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-badge-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 11v6l-5 -4l-5 4v-6l5 -4l5 4" />
  </svg>
  );
};

export default IconArrowBadgeUp;