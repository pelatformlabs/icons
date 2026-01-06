import React from 'react';

interface IconSchemaOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSchemaOff: React.FC<IconSchemaOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-schema-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 2h4v4m-4 0h-1v-1" />
    <path d="M15 11v-1h5v4h-2" />
    <path d="M5 18h5v4h-5l0 -4" />
    <path d="M5 10h5v4h-5l0 -4" />
    <path d="M10 12h2" />
    <path d="M7.5 7.5v2.5" />
    <path d="M7.5 14v4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconSchemaOff;