import React from 'react';

interface IconBrandBaiduProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBaidu: React.FC<IconBrandBaiduProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-baidu ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 9.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <path d="M14.463 11.596c1.282 1.774 3.476 3.416 3.476 3.416s1.921 1.574 .593 3.636c-1.328 2.063 -4.892 1.152 -4.892 1.152s-1.416 -.44 -3.06 -.088c-1.644 .356 -3.06 .22 -3.06 .22s-2.055 -.22 -2.47 -2.304c-.416 -2.084 1.918 -3.638 2.102 -3.858c.182 -.222 1.409 -.966 2.284 -2.394c.875 -1.428 3.337 -2.287 5.027 .221" />
    <path d="M8 4.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <path d="M14 4.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
    <path d="M18 9.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0 -2 0" />
  </svg>
  );
};

export default IconBrandBaidu;