import React from 'react';

interface IconBrandJiraProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandJira: React.FC<IconBrandJiraProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-jira ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 4h-9v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-9" />
    <path d="M15 8h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1" />
    <path d="M11 12h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1" />
  </svg>
  );
};

export default IconBrandJira;