import React from 'react';

interface IconBrandRadixUiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandRadixUi: React.FC<IconBrandRadixUiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-radix-ui ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
    <path d="M6 3h5v5h-5l0 -5" />
    <path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005" />
  </svg>
  );
};

export default IconBrandRadixUi;