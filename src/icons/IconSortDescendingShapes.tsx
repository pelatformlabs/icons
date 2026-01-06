import React from 'react';

interface IconSortDescendingShapesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSortDescendingShapes: React.FC<IconSortDescendingShapesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sort-descending-shapes ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 15l3 3l3 -3" />
    <path d="M7 6v12" />
    <path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-4" />
    <path d="M17 4l-3.5 6h7l-3.5 -6" />
  </svg>
  );
};

export default IconSortDescendingShapes;