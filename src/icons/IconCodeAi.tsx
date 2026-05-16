import React from 'react';

interface IconCodeAiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCodeAi: React.FC<IconCodeAiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-code-ai ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l3.111 3.111" />
    <path d="M14 4l-2.175 8.7" />
    <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
    <path d="M14 19h4" />
    <path d="M21 15v6" />
  </svg>
  );
};

export default IconCodeAi;