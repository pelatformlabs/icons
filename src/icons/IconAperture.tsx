import React from 'react';

interface IconApertureProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAperture: React.FC<IconApertureProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-aperture ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M3.6 15h10.55" />
    <path d="M6.551 4.938l3.26 10.034" />
    <path d="M17.032 4.636l-8.535 6.201" />
    <path d="M20.559 14.51l-8.535 -6.201" />
    <path d="M12.257 20.916l3.261 -10.034" />
  </svg>
  );
};

export default IconAperture;