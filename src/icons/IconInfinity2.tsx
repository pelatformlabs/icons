import React from 'react';

interface IconInfinity2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconInfinity2: React.FC<IconInfinity2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-infinity-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.94 9.39a10 10 0 0 1 .232 -.218a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828a4 4 0 1 0 0 5.656a10 10 0 0 0 .234 -.219" />
  </svg>
  );
};

export default IconInfinity2;