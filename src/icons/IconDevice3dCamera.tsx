import React from 'react';

interface IconDevice3dCameraProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDevice3dCamera: React.FC<IconDevice3dCameraProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-3d-camera ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 8a2 2 0 0 1 2 -2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2a2 2 0 0 1 -2 -2" />
    <path d="M8 6a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-12" />
    <path d="M13 14v2" />
  </svg>
  );
};

export default IconDevice3dCamera;