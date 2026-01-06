import React from 'react';

interface IconRating14PlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRating14Plus: React.FC<IconRating14PlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rating-14-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M7 15v-6" />
    <path d="M15.5 12h3" />
    <path d="M17 10.5v3" />
    <path d="M12.5 15v-6m-2.5 0v4h3" />
  </svg>
  );
};

export default IconRating14Plus;