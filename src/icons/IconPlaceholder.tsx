import React from 'react';

interface IconPlaceholderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaceholder: React.FC<IconPlaceholderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-placeholder ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" />
    <path d="M13 8l-3 -3l3 -3" />
    <path d="M7 17l4 -4l-4 -4l-4 4l4 4" />
  </svg>
  );
};

export default IconPlaceholder;