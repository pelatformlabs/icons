import React from 'react';

interface IconBrandFortniteProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandFortnite: React.FC<IconBrandFortniteProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-fortnite ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1l0 -18" />
  </svg>
  );
};

export default IconBrandFortnite;