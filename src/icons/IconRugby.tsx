import React from 'react';

interface IconRugbyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRugby: React.FC<IconRugbyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rugby ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 15h-4v6h4v-6" />
    <path d="M12 15v-4" />
    <path d="M8 21h8" />
    <path d="M19 3v8h-14v-8" />
  </svg>
  );
};

export default IconRugby;