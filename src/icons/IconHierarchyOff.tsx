import React from 'react';

interface IconHierarchyOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHierarchyOff: React.FC<IconHierarchyOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hierarchy-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
    <path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
    <path d="M12 7v1m0 4v1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHierarchyOff;