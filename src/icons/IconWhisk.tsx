import React from 'react';

interface IconWhiskProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWhisk: React.FC<IconWhiskProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-whisk ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21.015 3.035l-16.515 16.465" />
    <path d="M3.173 17.619a4.63 4.63 0 0 0 3.284 3.26a4.67 4.67 0 0 0 4.487 -1.194c1.85 -1.836 4.07 -10.65 4.07 -10.65s-8.88 2.296 -10.639 4.132a4.59 4.59 0 0 0 -1.202 4.452" />
  </svg>
  );
};

export default IconWhisk;