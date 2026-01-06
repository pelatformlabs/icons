import React from 'react';

interface IconSectionProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSection: React.FC<IconSectionProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-section ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 20h.01" />
    <path d="M4 20h.01" />
    <path d="M8 20h.01" />
    <path d="M12 20h.01" />
    <path d="M16 20h.01" />
    <path d="M20 4h.01" />
    <path d="M4 4h.01" />
    <path d="M8 4h.01" />
    <path d="M12 4h.01" />
    <path d="M16 4l0 .01" />
    <path d="M4 9a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -6" />
  </svg>
  );
};

export default IconSection;