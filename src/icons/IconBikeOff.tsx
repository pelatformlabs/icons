import React from 'react';

interface IconBikeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBikeOff: React.FC<IconBikeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bike-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M16.437 16.44a3 3 0 0 0 4.123 4.123m1.44 -2.563a3 3 0 0 0 -3 -3" />
    <path d="M12 19v-4l-3 -3l1.665 -1.332m2.215 -1.772l1.12 -.896l2 3h3" />
    <path d="M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBikeOff;