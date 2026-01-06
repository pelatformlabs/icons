import React from 'react';

interface IconBrandThreejsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandThreejs: React.FC<IconBrandThreejsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-threejs ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 22l-5 -19l19 5.5l-14 13.5" />
    <path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
    <path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
    <path d="M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543" />
  </svg>
  );
};

export default IconBrandThreejs;