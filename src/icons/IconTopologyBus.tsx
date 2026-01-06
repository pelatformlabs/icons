import React from 'react';

interface IconTopologyBusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTopologyBus: React.FC<IconTopologyBusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-topology-bus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M2 16h20" />
    <path d="M4 12v4" />
    <path d="M12 12v4" />
    <path d="M20 12v4" />
  </svg>
  );
};

export default IconTopologyBus;