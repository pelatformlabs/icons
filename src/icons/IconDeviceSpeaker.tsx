import React from 'react';

interface IconDeviceSpeakerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceSpeaker: React.FC<IconDeviceSpeakerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-speaker ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" />
    <path d="M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 7l0 .01" />
  </svg>
  );
};

export default IconDeviceSpeaker;