import React from 'react';

interface IconBrandVscoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandVsco: React.FC<IconBrandVscoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-vsco ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
    <path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0" />
    <path d="M12 3v4" />
    <path d="M21 12h-4" />
    <path d="M12 21v-4" />
    <path d="M3 12h4" />
    <path d="M18.364 5.636l-2.828 2.828" />
    <path d="M18.364 18.364l-2.828 -2.828" />
    <path d="M5.636 18.364l2.828 -2.828" />
    <path d="M5.636 5.636l2.828 2.828" />
  </svg>
  );
};

export default IconBrandVsco;