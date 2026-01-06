import React from 'react';

interface IconBrandAirtableProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAirtable: React.FC<IconBrandAirtableProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-airtable ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10v8l7 -3v-2.6l-7 -2.4" />
    <path d="M3 6l9 3l9 -3l-9 -3l-9 3" />
    <path d="M14 12.3v8.7l7 -3v-8l-7 2.3" />
  </svg>
  );
};

export default IconBrandAirtable;