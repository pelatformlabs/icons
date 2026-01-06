import React from 'react';

interface IconBrandFlutterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandFlutter: React.FC<IconBrandFlutterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-flutter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 14l-3 -3l8 -8h6l-11 11" />
    <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5l-5 0" />
  </svg>
  );
};

export default IconBrandFlutter;