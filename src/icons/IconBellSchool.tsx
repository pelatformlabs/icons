import React from 'react';

interface IconBellSchoolProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBellSchool: React.FC<IconBellSchoolProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bell-school ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 10a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    <path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" />
    <path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" />
    <path d="M10 10v.01" />
    <path d="M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconBellSchool;