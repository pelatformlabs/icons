import React from 'react';

interface IconToiletPaperProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToiletPaper: React.FC<IconToiletPaperProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-toilet-paper ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
    <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
    <path d="M6 3h12" />
    <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
    <path d="M6 10h.01" />
  </svg>
  );
};

export default IconToiletPaper;