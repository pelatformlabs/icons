import React from 'react';

interface IconMoodCogProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodCog: React.FC<IconMoodCogProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-cog ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 0 -8.983 9" />
    <path d="M16.001 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M18.001 14.5v1.5" />
    <path d="M18.001 20v1.5" />
    <path d="M21.032 16.25l-1.299 .75" />
    <path d="M16.27 19l-1.3 .75" />
    <path d="M14.97 16.25l1.3 .75" />
    <path d="M19.733 19l1.3 .75" />
    <path d="M9 10h.01" />
    <path d="M15 10h.01" />
    <path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
  </svg>
  );
};

export default IconMoodCog;