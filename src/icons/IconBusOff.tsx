import React from 'react';

interface IconBusOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBusOff: React.FC<IconBusOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bus-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16.18 16.172a2 2 0 0 0 2.652 2.648" />
    <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" />
    <path d="M16 5l1.5 7h4.5" />
    <path d="M2 10h8m4 0h3" />
    <path d="M7 7v3" />
    <path d="M12 5v3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBusOff;