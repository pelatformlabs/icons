import React from 'react';

interface IconBrandVlcProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandVlc: React.FC<IconBrandVlcProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-vlc ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.79 4.337l3.101 9.305c.33 .985 -.113 2.07 -1.02 2.499a9.148 9.148 0 0 1 -7.742 0c-.907 -.428 -1.35 -1.514 -1.02 -2.499l3.1 -9.305c.267 -.8 .985 -1.337 1.791 -1.337c.807 0 1.525 .537 1.79 1.337" />
    <path d="M7 14h-1.429a2 2 0 0 0 -1.923 1.45l-.571 2a2 2 0 0 0 1.923 2.55h13.998a2 2 0 0 0 1.923 -2.55l-.572 -2a2 2 0 0 0 -1.923 -1.45h-1.426" />
  </svg>
  );
};

export default IconBrandVlc;