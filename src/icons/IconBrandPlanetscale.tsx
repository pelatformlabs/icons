import React from 'react';

interface IconBrandPlanetscaleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandPlanetscale: React.FC<IconBrandPlanetscaleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-planetscale ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.993 11.63a9 9 0 0 1 -9.362 9.362l9.362 -9.362" />
    <path d="M12 3a9.001 9.001 0 0 1 8.166 5.211l-11.955 11.955a9 9 0 0 1 3.789 -17.166" />
    <path d="M12 12l-6 6" />
  </svg>
  );
};

export default IconBrandPlanetscale;