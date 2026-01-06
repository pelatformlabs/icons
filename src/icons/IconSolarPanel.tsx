import React from 'react';

interface IconSolarPanelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSolarPanel: React.FC<IconSolarPanelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-solar-panel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243" />
    <path d="M4 10h16" />
    <path d="M10 6l-1 8" />
    <path d="M14 6l1 8" />
    <path d="M12 14v4" />
    <path d="M7 18h10" />
  </svg>
  );
};

export default IconSolarPanel;