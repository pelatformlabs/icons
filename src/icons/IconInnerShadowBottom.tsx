import React from 'react';

interface IconInnerShadowBottomProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconInnerShadowBottom: React.FC<IconInnerShadowBottomProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-inner-shadow-bottom ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18.364 18.364a9 9 0 1 0 -12.728 -12.728a9 9 0 0 0 12.728 12.728" />
    <path d="M7.757 16.243a6 6 0 0 0 8.486 0" />
  </svg>
  );
};

export default IconInnerShadowBottom;