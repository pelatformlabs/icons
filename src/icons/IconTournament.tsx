import React from 'react';

interface IconTournamentProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTournament: React.FC<IconTournamentProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tournament ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M2 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M2 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" />
    <path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" />
    <path d="M14 10h4" />
  </svg>
  );
};

export default IconTournament;