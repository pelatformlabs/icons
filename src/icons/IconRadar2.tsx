import React from 'react';

interface IconRadar2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRadar2: React.FC<IconRadar2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-radar-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M15.51 15.56a5 5 0 1 0 -3.51 1.44" />
    <path d="M18.832 17.86a9 9 0 1 0 -6.832 3.14" />
    <path d="M12 12v9" />
  </svg>
  );
};

export default IconRadar2;