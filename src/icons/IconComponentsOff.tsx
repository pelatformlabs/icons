import React from 'react';

interface IconComponentsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconComponentsOff: React.FC<IconComponentsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-components-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12l3 3l3 -3l-3 -3l-3 3" />
    <path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" />
    <path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" />
    <path d="M9 18l3 3l3 -3l-3 -3l-3 3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconComponentsOff;