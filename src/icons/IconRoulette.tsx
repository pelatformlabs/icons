import React from 'react';

interface IconRouletteProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRoulette: React.FC<IconRouletteProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-roulette ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10.586 10.586l-1.586 -1.586" />
    <path d="M13.414 10.586l1.586 -1.586" />
    <path d="M13.414 13.414l1.586 1.586" />
    <path d="M10.586 13.414l-1.586 1.586" />
    <path d="M14 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    <path d="M16.5 4.206l-.5 .866" />
    <path d="M7.5 19.794l.5 -.866" />
    <path d="M19.794 7.5l-.866 .5" />
    <path d="M4.206 16.5l.866 -.5" />
    <path d="M7.5 4.206l.5 .866" />
    <path d="M16.5 19.794l-.5 -.866" />
    <path d="M4.206 7.5l.866 .5" />
    <path d="M19.794 16.5l-.866 -.5" />
    <path d="M12 3v1" />
    <path d="M12 21v-1" />
    <path d="M21 12h-1" />
    <path d="M3 12h1" />
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
  </svg>
  );
};

export default IconRoulette;