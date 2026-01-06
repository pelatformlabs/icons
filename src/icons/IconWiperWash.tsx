import React from 'react';

interface IconWiperWashProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWiperWash: React.FC<IconWiperWashProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wiper-wash ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
    <path d="M12 20l0 -14" />
    <path d="M4 6a4 4 0 0 1 .4 -1.8" />
    <path d="M7 2.1a4 4 0 0 1 2 0" />
    <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
    <path d="M12 6a4 4 0 0 1 .4 -1.8" />
    <path d="M15 2.1a4 4 0 0 1 2 0" />
    <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
  </svg>
  );
};

export default IconWiperWash;