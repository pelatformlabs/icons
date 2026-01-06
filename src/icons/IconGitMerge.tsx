import React from 'react';

interface IconGitMergeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGitMerge: React.FC<IconGitMergeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-git-merge ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 8l0 8" />
    <path d="M7 8a4 4 0 0 0 4 4h4" />
  </svg>
  );
};

export default IconGitMerge;