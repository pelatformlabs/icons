import React from 'react';

interface IconBrandDcosProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDcos: React.FC<IconBrandDcosProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-dcos ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10l0 12" />
  </svg>
  );
};

export default IconBrandDcos;