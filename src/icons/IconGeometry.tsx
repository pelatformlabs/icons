import React from 'react';

interface IconGeometryProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGeometry: React.FC<IconGeometryProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-geometry ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
    <path d="M10 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
    <path d="M12 5v-2" />
  </svg>
  );
};

export default IconGeometry;