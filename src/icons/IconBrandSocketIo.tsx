import React from 'react';

interface IconBrandSocketIoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSocketIo: React.FC<IconBrandSocketIoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-socket-io ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 11h1l3 -4l-4 4" />
    <path d="M12 13h1l-4 4l3 -4" />
  </svg>
  );
};

export default IconBrandSocketIo;