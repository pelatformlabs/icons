import React from 'react';

interface IconBrandSnowflakeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSnowflake: React.FC<IconBrandSnowflakeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-snowflake ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 21v-5.5l4.5 2.5" />
    <path d="M10 21v-5.5l-4.5 2.5" />
    <path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
    <path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
    <path d="M10 3v5.5l-4.5 -2.5" />
    <path d="M14 3v5.5l4.5 -2.5" />
    <path d="M12 11l1 1l-1 1l-1 -1l1 -1" />
  </svg>
  );
};

export default IconBrandSnowflake;