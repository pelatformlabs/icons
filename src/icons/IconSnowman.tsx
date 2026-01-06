import React from 'react';

interface IconSnowmanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSnowman: React.FC<IconSnowmanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-snowman ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75" />
    <path d="M17.5 11.5l2.5 -1.5" />
    <path d="M6.5 11.5l-2.5 -1.5" />
    <path d="M12 13h.01" />
    <path d="M12 16h.01" />
  </svg>
  );
};

export default IconSnowman;