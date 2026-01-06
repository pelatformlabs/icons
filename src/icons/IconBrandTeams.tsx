import React from 'react';

interface IconBrandTeamsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandTeams: React.FC<IconBrandTeamsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-teams ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7h10v10h-10l0 -10" />
    <path d="M6 10h4" />
    <path d="M8 10v4" />
    <path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" />
    <path d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
    <path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
    <path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
  </svg>
  );
};

export default IconBrandTeams;