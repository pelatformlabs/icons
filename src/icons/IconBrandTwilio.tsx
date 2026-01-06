import React from 'react';

interface IconBrandTwilioProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandTwilio: React.FC<IconBrandTwilioProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-twilio ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
    <path d="M8 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M14 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconBrandTwilio;