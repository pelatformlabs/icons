import React from 'react';

interface IconBrandBilibiliProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBilibili: React.FC<IconBrandBilibiliProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-bilibili ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6" />
    <path d="M8 3l2 3" />
    <path d="M16 3l-2 3" />
    <path d="M9 13v-2" />
    <path d="M15 11v2" />
  </svg>
  );
};

export default IconBrandBilibili;