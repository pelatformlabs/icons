import React from 'react';

interface IconAcrobaticProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAcrobatic: React.FC<IconAcrobaticProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-acrobatic ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.207 3l-6.735 2.462a1 1 0 0 0 -.364 1.646l1.892 1.892" />
    <path d="M10.5 8.25l1.5 -.25h3.174a2 2 0 0 1 1.411 .583l1.422 1.417" />
    <path d="M8 9c0 4.5 1.781 5.14 3 5.5" />
    <path d="M13.007 21h-1a1 1 0 0 1 -1 -1l-.007 -5.5" />
    <path d="M12.007 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconAcrobatic;