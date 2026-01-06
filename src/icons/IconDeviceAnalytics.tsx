import React from 'react';

interface IconDeviceAnalyticsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceAnalytics: React.FC<IconDeviceAnalyticsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-analytics ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
    <path d="M7 20l10 0" />
    <path d="M9 16l0 4" />
    <path d="M15 16l0 4" />
    <path d="M8 12l3 -3l2 2l3 -3" />
  </svg>
  );
};

export default IconDeviceAnalytics;