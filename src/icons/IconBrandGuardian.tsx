import React from 'react';

interface IconBrandGuardianProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandGuardian: React.FC<IconBrandGuardianProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-guardian ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 13h6" />
    <path d="M4 12c0 -9.296 9.5 -9 9.5 -9c-2.808 0 -4.5 4.373 -4.5 9s1.763 8.976 4.572 8.976c0 .023 -9.572 1.092 -9.572 -8.976" />
    <path d="M14.5 3c1.416 0 3.853 1.16 4.5 2v3.5" />
    <path d="M15 13v8s2.77 -.37 4 -2v-6" />
    <path d="M13.5 21h1.5" />
    <path d="M13.5 3h1" />
  </svg>
  );
};

export default IconBrandGuardian;