import React from 'react';

interface IconTableColumnProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTableColumn: React.FC<IconTableColumnProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-table-column ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    <path d="M10 10h11" />
    <path d="M10 3v18" />
    <path d="M9 3l-6 6" />
    <path d="M10 7l-7 7" />
    <path d="M10 12l-7 7" />
    <path d="M10 17l-4 4" />
  </svg>
  );
};

export default IconTableColumn;