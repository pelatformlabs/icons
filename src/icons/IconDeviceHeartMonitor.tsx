import React from 'react';

interface IconDeviceHeartMonitorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceHeartMonitor: React.FC<IconDeviceHeartMonitorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-heart-monitor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    <path d="M4 9h6l1 -2l2 4l1 -2h6" />
    <path d="M4 14h16" />
    <path d="M14 17v.01" />
    <path d="M17 17v.01" />
  </svg>
  );
};

export default IconDeviceHeartMonitor;