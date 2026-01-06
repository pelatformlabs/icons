import React from 'react';

interface IconBadgesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBadges: React.FC<IconBadgesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-badges ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 17v-4l-5 3l-5 -3v4l5 3l5 -3" />
    <path d="M17 8v-4l-5 3l-5 -3v4l5 3l5 -3" />
  </svg>
  );
};

export default IconBadges;