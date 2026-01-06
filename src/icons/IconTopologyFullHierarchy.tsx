import React from 'react';

interface IconTopologyFullHierarchyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTopologyFullHierarchy: React.FC<IconTopologyFullHierarchyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-topology-full-hierarchy ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M6 8v8" />
    <path d="M18 16v-8" />
    <path d="M8 6h8" />
    <path d="M16 18h-8" />
    <path d="M7.5 7.5l3 3" />
    <path d="M13.5 13.5l3 3" />
    <path d="M16.5 7.5l-3 3" />
    <path d="M10.5 13.5l-3 3" />
  </svg>
  );
};

export default IconTopologyFullHierarchy;