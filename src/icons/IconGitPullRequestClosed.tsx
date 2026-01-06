import React from 'react';

interface IconGitPullRequestClosedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGitPullRequestClosed: React.FC<IconGitPullRequestClosedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-git-pull-request-closed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6 8v8" />
    <path d="M18 11v5" />
    <path d="M16 4l4 4m0 -4l-4 4" />
  </svg>
  );
};

export default IconGitPullRequestClosed;