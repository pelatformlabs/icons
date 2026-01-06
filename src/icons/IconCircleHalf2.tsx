import React from 'react';

interface IconCircleHalf2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleHalf2: React.FC<IconCircleHalf2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-half-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3v18" />
    <path d="M12 14l7 -7" />
    <path d="M12 19l8.5 -8.5" />
    <path d="M12 9l4.5 -4.5" />
  </svg>
  );
};

export default IconCircleHalf2;