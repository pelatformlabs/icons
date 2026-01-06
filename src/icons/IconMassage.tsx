import React from 'react';

interface IconMassageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMassage: React.FC<IconMassageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-massage ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M4 22l4 -2v-3h12" />
    <path d="M11 20h9" />
    <path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
  </svg>
  );
};

export default IconMassage;