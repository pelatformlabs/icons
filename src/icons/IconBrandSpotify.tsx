import React from 'react';

interface IconBrandSpotifyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSpotify: React.FC<IconBrandSpotifyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-spotify ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
    <path d="M9 15c1.5 -1 4 -1 5 .5" />
    <path d="M7 9c2 -1 6 -2 10 .5" />
  </svg>
  );
};

export default IconBrandSpotify;