import React from 'react';

interface IconPolaroidProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPolaroid: React.FC<IconPolaroidProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-polaroid ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    <path d="M4 16l16 0" />
    <path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" />
    <path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" />
    <path d="M14 7l.01 0" />
  </svg>
  );
};

export default IconPolaroid;