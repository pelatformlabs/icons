import React from 'react';

interface IconSunHighProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSunHigh: React.FC<IconSunHighProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sun-high ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" />
    <path d="M6.343 17.657l-1.414 1.414" />
    <path d="M6.343 6.343l-1.414 -1.414" />
    <path d="M17.657 6.343l1.414 -1.414" />
    <path d="M17.657 17.657l1.414 1.414" />
    <path d="M4 12h-2" />
    <path d="M12 4v-2" />
    <path d="M20 12h2" />
    <path d="M12 20v2" />
  </svg>
  );
};

export default IconSunHigh;