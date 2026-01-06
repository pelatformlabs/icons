import React from 'react';

interface IconSolarPanel2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSolarPanel2: React.FC<IconSolarPanel2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-solar-panel-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 2a4 4 0 1 0 8 0" />
    <path d="M4 3h1" />
    <path d="M19 3h1" />
    <path d="M12 9v1" />
    <path d="M17.2 7.2l.707 .707" />
    <path d="M6.8 7.2l-.7 .7" />
    <path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243" />
    <path d="M4 17h16" />
    <path d="M10 13l-1 8" />
    <path d="M14 13l1 8" />
  </svg>
  );
};

export default IconSolarPanel2;