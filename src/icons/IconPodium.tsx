import React from 'react';

interface IconPodiumProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPodium: React.FC<IconPodiumProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-podium ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485" />
    <path d="M7 8v-2a3 3 0 0 1 3 -3" />
    <path d="M8 12l1 9" />
    <path d="M16 12l-1 9" />
    <path d="M7 21h10" />
  </svg>
  );
};

export default IconPodium;