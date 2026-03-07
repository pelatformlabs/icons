import React from 'react';

interface IconMeshProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMesh: React.FC<IconMeshProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mesh ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M8 4c.485 .445 3.5 3.312 3.5 8c0 .663 -.07 4.848 -3.5 8" />
    <path d="M15 4a17 17 0 0 1 2.004 8c0 1.51 -.201 4.628 -2.004 8" />
    <path d="M18.778 20h-13.556a2.22 2.22 0 0 1 -2.222 -2.222v-11.556c0 -1.227 .995 -2.222 2.222 -2.222h13.556c1.227 0 2.222 .995 2.222 2.222v11.556a2.22 2.22 0 0 1 -2.222 2.222" />
  </svg>
  );
};

export default IconMesh;