import React from 'react';

interface IconPercentage70Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPercentage70: React.FC<IconPercentage70Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-percentage-70 ${defaultSize} ${userClassName}`.trim();

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
    <path
      d="M12 3a9 9 0 1 1 -8.495 11.973l8.495 -2.973v-9"
      fill="currentColor"
      stroke="none"
    />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  </svg>
  );
};

export default IconPercentage70;