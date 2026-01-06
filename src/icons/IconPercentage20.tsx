import React from 'react';

interface IconPercentage20Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPercentage20: React.FC<IconPercentage20Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-percentage-20 ${defaultSize} ${userClassName}`.trim();

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
      d="M12 3a9 9 0 0 1 8.497 6.025l-8.497 2.975v-9"
      fill="currentColor"
      stroke="none"
    />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  </svg>
  );
};

export default IconPercentage20;