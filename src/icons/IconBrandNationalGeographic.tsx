import React from 'react';

interface IconBrandNationalGeographicProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandNationalGeographic: React.FC<IconBrandNationalGeographicProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-national-geographic ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 3h10v18h-10l0 -18" />
  </svg>
  );
};

export default IconBrandNationalGeographic;