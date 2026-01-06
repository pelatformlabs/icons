import React from 'react';

interface IconShovelPitchforksProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShovelPitchforks: React.FC<IconShovelPitchforksProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shovel-pitchforks ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 3h4" />
    <path d="M7 3v12" />
    <path d="M4 15h6v3a3 3 0 0 1 -6 0v-3" />
    <path d="M14 21v-3a3 3 0 0 1 6 0v3" />
    <path d="M17 21v-18" />
  </svg>
  );
};

export default IconShovelPitchforks;