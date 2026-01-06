import React from 'react';

interface IconBusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBus: React.FC<IconBusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
    <path d="M16 5l1.5 7l4.5 0" />
    <path d="M2 10l15 0" />
    <path d="M7 5l0 5" />
    <path d="M12 5l0 5" />
  </svg>
  );
};

export default IconBus;