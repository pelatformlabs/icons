import React from 'react';

interface IconBrandAdobeIndesignProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAdobeIndesign: React.FC<IconBrandAdobeIndesignProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-adobe-indesign ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682" />
    <path d="M15 11v4c0 1.1 -.657 .997 -1.6 .997a2.35 2.35 0 0 1 -1.697 -.731a2.55 2.55 0 0 1 -.703 -1.767c0 -.663 .253 -1.299 .703 -1.767a2.35 2.35 0 0 1 1.697 -.732h1.6" />
    <path d="M15 11v-3" />
    <path d="M8 8v8" />
  </svg>
  );
};

export default IconBrandAdobeIndesign;