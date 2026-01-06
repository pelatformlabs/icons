import React from 'react';

interface IconBrandBackboneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBackbone: React.FC<IconBrandBackboneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-backbone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 20l14 -8l-14 -8l0 16" />
    <path d="M19 20l-14 -8l14 -8l0 16" />
  </svg>
  );
};

export default IconBrandBackbone;