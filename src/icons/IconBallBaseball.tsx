import React from 'react';

interface IconBallBaseballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallBaseball: React.FC<IconBallBaseballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-baseball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728" />
    <path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" />
    <path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" />
    <path d="M9 9l2 2" />
    <path d="M13 13l2 2" />
    <path d="M11 7l2 1" />
    <path d="M7 11l1 2" />
    <path d="M16 11l1 2" />
    <path d="M11 16l2 1" />
  </svg>
  );
};

export default IconBallBaseball;