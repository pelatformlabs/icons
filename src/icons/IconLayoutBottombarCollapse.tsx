import React from 'react';

interface IconLayoutBottombarCollapseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLayoutBottombarCollapse: React.FC<IconLayoutBottombarCollapseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-layout-bottombar-collapse ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 6v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2" />
    <path d="M20 15h-16" />
    <path d="M14 8l-2 2l-2 -2" />
  </svg>
  );
};

export default IconLayoutBottombarCollapse;