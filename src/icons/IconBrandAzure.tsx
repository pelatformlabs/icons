import React from 'react';

interface IconBrandAzureProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAzure: React.FC<IconBrandAzureProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-azure ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 7.5l-4 9.5h4l6 -15l-6 5.5" />
    <path d="M22 20l-7 -15l-3 7l4 5l-8 3l14 0" />
  </svg>
  );
};

export default IconBrandAzure;