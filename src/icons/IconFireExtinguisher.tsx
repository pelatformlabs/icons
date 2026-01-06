import React from 'react';

interface IconFireExtinguisherProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFireExtinguisher: React.FC<IconFireExtinguisherProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fire-extinguisher ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4" />
    <path d="M9 16h6" />
    <path d="M12 7v-3" />
    <path d="M16 5l-4 -1l4 -1" />
    <path d="M12 4h-3a3 3 0 0 0 -3 3" />
  </svg>
  );
};

export default IconFireExtinguisher;