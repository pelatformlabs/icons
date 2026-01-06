import React from 'react';

interface IconPlayVolleyballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayVolleyball: React.FC<IconPlayVolleyballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-volleyball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1" fill="currentColor" />
    <path d="M2 16l5 1l.5 -2.5" />
    <path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" />
  </svg>
  );
};

export default IconPlayVolleyball;