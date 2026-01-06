import React from 'react';

interface IconMusicOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMusicOff: React.FC<IconMusicOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-music-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
    <path d="M9 17v-8m0 -4v-1h10v11" />
    <path d="M12 8h7" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMusicOff;