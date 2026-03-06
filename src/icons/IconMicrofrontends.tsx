import React from 'react';

interface IconMicrofrontendsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMicrofrontends: React.FC<IconMicrofrontendsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-microfrontends ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7.5 7.5l4.5 4.5l4.5 -4.5" />
    <path d="M6 16v-4" />
    <path d="M18 16v-4" />
    <path d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
  );
};

export default IconMicrofrontends;