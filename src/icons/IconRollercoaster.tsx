import React from 'react';

interface IconRollercoasterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRollercoaster: React.FC<IconRollercoasterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rollercoaster ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675" />
    <path d="M20 9v12" />
    <path d="M8 21v-3" />
    <path d="M12 21v-10" />
    <path d="M16 9.5v11.5" />
    <path d="M15 3h5v3h-5l0 -3" />
    <path d="M6 8l4 -3l2 2.5l-4 3l-1.8 -.5l-.2 -2" />
  </svg>
  );
};

export default IconRollercoaster;