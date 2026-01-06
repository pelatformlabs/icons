import React from 'react';

interface IconHomeLinkProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHomeLink: React.FC<IconHomeLinkProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-home-link ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
    <path d="M20 21a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M20 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M15 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M21 16l-5 3l5 2" />
  </svg>
  );
};

export default IconHomeLink;