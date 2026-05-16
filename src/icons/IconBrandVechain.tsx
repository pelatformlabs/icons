import React from 'react';

interface IconBrandVechainProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandVechain: React.FC<IconBrandVechainProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-vechain ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 4l-8 16l-8 -16h2.028a4 4 0 0 1 3.578 2.211l2.894 5.789" />
  </svg>
  );
};

export default IconBrandVechain;