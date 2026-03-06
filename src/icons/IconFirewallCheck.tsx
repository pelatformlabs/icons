import React from 'react';

interface IconFirewallCheckProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFirewallCheck: React.FC<IconFirewallCheckProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-firewall-check ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 3v18" />
    <path d="M3 9h18" />
    <path d="M3 15h10" />
    <path d="M15 3v10" />
    <path d="M11 21h-6a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
  );
};

export default IconFirewallCheck;