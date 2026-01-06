import React from 'react';

interface IconToolsKitchenOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToolsKitchenOff: React.FC<IconToolsKitchenOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tools-kitchen-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874" />
    <path d="M7 18h2v3h-2v-3" />
    <path d="M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1" />
    <path d="M20 15v1m0 4v1h-1v-2" />
    <path d="M8 12v6" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconToolsKitchenOff;