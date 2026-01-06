import React from 'react';

interface IconTopologyFullProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTopologyFull: React.FC<IconTopologyFullProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-topology-full ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M6 8v8" />
    <path d="M18 16v-8" />
    <path d="M8 6h8" />
    <path d="M16 18h-8" />
    <path d="M7.5 7.5l9 9" />
    <path d="M7.5 16.5l9 -9" />
  </svg>
  );
};

export default IconTopologyFull;