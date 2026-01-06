import React from 'react';

interface IconAdCircleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAdCircle: React.FC<IconAdCircleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ad-circle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
    <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
    <path d="M7 13h3" />
    <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" />
  </svg>
  );
};

export default IconAdCircle;