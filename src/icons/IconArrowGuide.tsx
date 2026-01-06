import React from 'react';

interface IconArrowGuideProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowGuide: React.FC<IconArrowGuideProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-guide ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 19h3a2 2 0 0 0 2 -2v-8a2 2 0 0 1 2 -2h7" />
    <path d="M18 4l3 3l-3 3" />
  </svg>
  );
};

export default IconArrowGuide;