import React from 'react';

interface IconBrandWazeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandWaze: React.FC<IconBrandWazeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-waze ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
    <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
    <path d="M14 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 9h.01" />
    <path d="M11 9h.01" />
  </svg>
  );
};

export default IconBrandWaze;