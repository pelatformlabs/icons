import React from 'react';

interface IconBikeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBike: React.FC<IconBikeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bike ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
    <path d="M16 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconBike;