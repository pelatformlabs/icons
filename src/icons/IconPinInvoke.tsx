import React from 'react';

interface IconPinInvokeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPinInvoke: React.FC<IconPinInvokeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-pin-invoke ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 13v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h9" />
    <path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M10 11h4v4" />
    <path d="M10 15l4 -4" />
  </svg>
  );
};

export default IconPinInvoke;