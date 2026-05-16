import React from 'react';

interface IconHulaHoopProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHulaHoop: React.FC<IconHulaHoopProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hula-hoop ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 6l2 1.5l6 .5l6 -.5l2 -1.5" />
    <path d="M16 21l-4 -8v-5" />
    <path d="M8 21l4 -8" />
    <path d="M9.007 10.999c-2.37 .32 -4.007 1.201 -4.007 2.001c0 1.105 3.134 2 7 2s7 -.895 7 -2c0 -.798 -1.636 -1.679 -4 -2" />
  </svg>
  );
};

export default IconHulaHoop;