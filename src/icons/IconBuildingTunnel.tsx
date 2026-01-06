import React from 'react';

interface IconBuildingTunnelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingTunnel: React.FC<IconBuildingTunnelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-tunnel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2" />
    <path d="M8 21v-9a4 4 0 1 1 8 0v9" />
    <path d="M3 17h4" />
    <path d="M17 17h4" />
    <path d="M21 12h-4" />
    <path d="M7 12h-4" />
    <path d="M12 3v5" />
    <path d="M6 6l3 3" />
    <path d="M15 9l3 -3l-3 3" />
  </svg>
  );
};

export default IconBuildingTunnel;