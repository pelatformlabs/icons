import React from 'react';

interface IconPackagesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPackages: React.FC<IconPackagesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-packages ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
    <path d="M2 13.5v5.5l5 3" />
    <path d="M7 16.545l5 -3.03" />
    <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
    <path d="M12 19l5 3" />
    <path d="M17 16.5l5 -3" />
    <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
    <path d="M7 5.03v5.455" />
    <path d="M12 8l5 -3" />
  </svg>
  );
};

export default IconPackages;