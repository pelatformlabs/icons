import React from 'react';

interface IconTrekkingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrekking: React.FC<IconTrekkingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-trekking ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M7 21l2 -4" />
    <path d="M13 21v-4l-3 -3l1 -6l3 4l3 2" />
    <path d="M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2" />
    <path d="M17 12v9" />
    <path d="M16 20h2" />
  </svg>
  );
};

export default IconTrekking;