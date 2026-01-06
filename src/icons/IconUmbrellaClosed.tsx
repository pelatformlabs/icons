import React from 'react';

interface IconUmbrellaClosedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUmbrellaClosed: React.FC<IconUmbrellaClosedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-umbrella-closed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 16l3 -13l3 13l-6 0" />
    <path d="M12 16v3c0 2.667 4 2.667 4 0" />
  </svg>
  );
};

export default IconUmbrellaClosed;