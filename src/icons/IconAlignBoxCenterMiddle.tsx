import React from 'react';

interface IconAlignBoxCenterMiddleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlignBoxCenterMiddle: React.FC<IconAlignBoxCenterMiddleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-align-box-center-middle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" />
    <path d="M11 15h2" />
    <path d="M9 12h6" />
    <path d="M10 9h4" />
  </svg>
  );
};

export default IconAlignBoxCenterMiddle;