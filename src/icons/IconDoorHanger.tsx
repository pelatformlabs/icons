import React from 'react';

interface IconDoorHangerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDoorHanger: React.FC<IconDoorHangerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-door-hanger ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3a7 7 0 0 0 -5.48 2.64a1 1 0 0 0 .31 1.49l1.76 1a1 1 0 0 0 1.22 -.13a3 3 0 0 1 2.82 -.88a3.09 3.09 0 0 1 2.37 3.01v.87l-9.2 1.84a1 1 0 0 0 -.8 1v6.16a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-9.72a7.18 7.18 0 0 0 -7 -7.28" />
    <path d="M12 17v.01" />
  </svg>
  );
};

export default IconDoorHanger;