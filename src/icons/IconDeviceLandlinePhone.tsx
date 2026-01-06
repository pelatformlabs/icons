import React from 'react';

interface IconDeviceLandlinePhoneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceLandlinePhone: React.FC<IconDeviceLandlinePhoneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-landline-phone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2" />
    <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
    <path d="M12 8h-6v3h6l0 -3" />
    <path d="M12 14v.01" />
    <path d="M9 14v.01" />
    <path d="M6 14v.01" />
    <path d="M12 17v.01" />
    <path d="M9 17v.01" />
    <path d="M6 17v.01" />
  </svg>
  );
};

export default IconDeviceLandlinePhone;