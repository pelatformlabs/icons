import React from 'react';

interface IconHexagon3dProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHexagon3d: React.FC<IconHexagon3dProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hexagon-3d ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03l.002 0" />
    <path d="M12 16.5v4.5" />
    <path d="M4.5 7.5l3.5 2.5" />
    <path d="M16 10l4 -2.5" />
    <path d="M12 7.5v4.5l-4 2" />
    <path d="M12 12l4 2" />
    <path d="M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4l4 2.5" />
  </svg>
  );
};

export default IconHexagon3d;