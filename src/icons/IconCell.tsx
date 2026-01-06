import React from 'react';

interface IconCellProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCell: React.FC<IconCellProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cell ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4l-4 2v5l4 2l4 -2v-5l-4 -2" />
    <path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" />
    <path d="M8 13v5l4 2l4 -2v-5" />
  </svg>
  );
};

export default IconCell;