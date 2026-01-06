import React from 'react';

interface IconDualScreenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDualScreen: React.FC<IconDualScreenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-dual-screen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 4l8 3v15l-8 -3l0 -15" />
    <path d="M13 19h6v-15h-14" />
  </svg>
  );
};

export default IconDualScreen;