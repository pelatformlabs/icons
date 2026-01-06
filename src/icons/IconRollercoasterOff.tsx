import React from 'react';

interface IconRollercoasterOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRollercoasterOff: React.FC<IconRollercoasterOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rollercoaster-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.759 8.759 0 0 1 2.35 -3.652m2.403 -1.589a8.76 8.76 0 0 1 3.572 -.759h3.675" />
    <path d="M20 9v7m0 4v1" />
    <path d="M8 21v-3" />
    <path d="M12 21v-9" />
    <path d="M16 9.5v2.5m0 4v5" />
    <path d="M15 3h5v3h-5l0 -3" />
    <path d="M9.446 5.415l.554 -.415l2 2.5l-.285 .213m-2.268 1.702l-1.447 1.085l-1.8 -.5l-.2 -2l1.139 -.854" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconRollercoasterOff;