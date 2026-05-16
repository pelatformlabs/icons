import React from 'react';

interface IconUnicycleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUnicycle: React.FC<IconUnicycleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-unicycle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M12 16v-11" />
    <path d="M8 3q 2 2 7 2" />
  </svg>
  );
};

export default IconUnicycle;