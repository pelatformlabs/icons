import React from 'react';

interface IconBrandBandcampProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBandcamp: React.FC<IconBrandBandcampProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-bandcamp ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8.5 6h13.5l-7 12h-13l6.5 -12" />
  </svg>
  );
};

export default IconBrandBandcamp;