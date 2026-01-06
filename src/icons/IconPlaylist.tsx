import React from 'react';

interface IconPlaylistProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaylist: React.FC<IconPlaylistProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-playlist ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M17 17v-13h4" />
    <path d="M13 5h-10" />
    <path d="M3 9l10 0" />
    <path d="M9 13h-6" />
  </svg>
  );
};

export default IconPlaylist;