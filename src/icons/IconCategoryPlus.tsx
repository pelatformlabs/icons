import React from 'react';

interface IconCategoryPlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCategoryPlus: React.FC<IconCategoryPlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-category-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 4h6v6h-6v-6" />
    <path d="M14 4h6v6h-6v-6" />
    <path d="M4 14h6v6h-6v-6" />
    <path d="M14 17h6m-3 -3v6" />
  </svg>
  );
};

export default IconCategoryPlus;