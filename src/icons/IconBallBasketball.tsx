import React from 'react';

interface IconBallBasketballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallBasketball: React.FC<IconBallBasketballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-basketball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.65 5.65l12.7 12.7" />
    <path d="M5.65 18.35l12.7 -12.7" />
    <path d="M12 3a9 9 0 0 0 9 9" />
    <path d="M3 12a9 9 0 0 1 9 9" />
  </svg>
  );
};

export default IconBallBasketball;