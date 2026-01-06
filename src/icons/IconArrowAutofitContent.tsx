import React from 'react';

interface IconArrowAutofitContentProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowAutofitContent: React.FC<IconArrowAutofitContentProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-autofit-content ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 4l-3 3l3 3" />
    <path d="M18 4l3 3l-3 3" />
    <path d="M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2" />
    <path d="M10 7h-7" />
    <path d="M21 7h-7" />
  </svg>
  );
};

export default IconArrowAutofitContent;