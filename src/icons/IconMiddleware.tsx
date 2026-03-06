import React from 'react';

interface IconMiddlewareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMiddleware: React.FC<IconMiddlewareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-middleware ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20l2.25 -2.25" />
    <path d="M20 20l-2.25 -2.25" />
    <path d="M20 4l-2.25 2.25" />
    <path d="M4 4l2.25 2.25" />
    <path d="M10 19.748a8.01 8.01 0 0 1 -5.747 -5.748" />
    <path d="M19.748 14a8.01 8.01 0 0 1 -5.748 5.748" />
    <path d="M4.252 10a8.02 8.02 0 0 1 5.478 -5.672l.27 -.075" />
    <path d="M14 4.252a8.01 8.01 0 0 1 5.748 5.749" />
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  </svg>
  );
};

export default IconMiddleware;