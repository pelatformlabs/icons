import React from 'react';

interface IconCubeSendProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCubeSend: React.FC<IconCubeSendProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cube-send ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
    <path d="M11 9.5v5.5l5 3" />
    <path d="M16 12.545l5 -3.03" />
    <path d="M7 9h-5" />
    <path d="M7 12h-3" />
    <path d="M7 15h-1" />
  </svg>
  );
};

export default IconCubeSend;