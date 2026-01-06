import React from 'react';

interface IconBrandZhihuProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandZhihu: React.FC<IconBrandZhihuProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-zhihu ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 6h6v12h-2l-2 2l-1 -2h-1l0 -12" />
    <path d="M4 12h6.5" />
    <path d="M10.5 6h-5" />
    <path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" />
    <path d="M8 6v7c0 4.5 -2 5.5 -4 7" />
    <path d="M11 18l-3 -5" />
  </svg>
  );
};

export default IconBrandZhihu;