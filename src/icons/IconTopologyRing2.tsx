import React from 'react';

interface IconTopologyRing2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTopologyRing2: React.FC<IconTopologyRing2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-topology-ring-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M7 18h10" />
    <path d="M18 16l-5 -8" />
    <path d="M11 8l-5 8" />
  </svg>
  );
};

export default IconTopologyRing2;