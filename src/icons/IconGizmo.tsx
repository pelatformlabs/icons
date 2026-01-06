import React from 'react';

interface IconGizmoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGizmo: React.FC<IconGizmoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gizmo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 19l-8 -5.5l-8 5.5" />
    <path d="M12 4v9.5" />
    <path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M19 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconGizmo;