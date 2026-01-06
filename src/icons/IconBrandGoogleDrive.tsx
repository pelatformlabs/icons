import React from 'react';

interface IconBrandGoogleDriveProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandGoogleDrive: React.FC<IconBrandGoogleDriveProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-google-drive ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 10l-6 10l-3 -5l6 -10l3 5" />
    <path d="M9 15h12l-3 5h-12" />
    <path d="M15 15l-6 -10h6l6 10l-6 0" />
  </svg>
  );
};

export default IconBrandGoogleDrive;