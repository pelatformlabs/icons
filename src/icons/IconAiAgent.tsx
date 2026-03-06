import React from 'react';

interface IconAiAgentProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAiAgent: React.FC<IconAiAgentProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ai-agent ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M6 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M16 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M13.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M18.5 18.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
  );
};

export default IconAiAgent;