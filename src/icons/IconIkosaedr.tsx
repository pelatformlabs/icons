import React from 'react';

interface IconIkosaedrProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIkosaedr: React.FC<IconIkosaedrProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ikosaedr ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 8.007v7.986a2 2 0 0 1 -1.006 1.735l-7 4.007a2 2 0 0 1 -1.988 0l-7 -4.007a2 2 0 0 1 -1.006 -1.735v-7.986a2 2 0 0 1 1.006 -1.735l7 -4.007a2 2 0 0 1 1.988 0l7 4.007a2 2 0 0 1 1.006 1.735" />
    <path d="M3.29 6.97l4.21 2.03" />
    <path d="M20.71 6.97l-4.21 2.03" />
    <path d="M20.7 17h-17.4" />
    <path d="M11.76 2.03l-4.26 6.97l-4.3 7.84" />
    <path d="M12.24 2.03q 2.797 4.44 4.26 6.97t 4.3 7.84" />
    <path d="M12 17l-4.5 -8h9l-4.5 8" />
    <path d="M12 17v5" />
  </svg>
  );
};

export default IconIkosaedr;