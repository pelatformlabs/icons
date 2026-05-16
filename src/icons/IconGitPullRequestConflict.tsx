import React from 'react';

interface IconGitPullRequestConflictProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGitPullRequestConflict: React.FC<IconGitPullRequestConflictProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-git-pull-request-conflict ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M11 6h5a2 2 0 0 1 2 2v8" />
    <path d="M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M6 11v5" />
    <path d="M4 4l4 4" />
    <path d="M8 4l-4 4" />
  </svg>
  );
};

export default IconGitPullRequestConflict;