import React from 'react';

interface IconVip2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVip2: React.FC<IconVip2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vip-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5h4" />
    <path d="M17 5h4" />
    <path d="M3 19h18" />
    <path d="M4 9l2 6h1l2 -6" />
    <path d="M12 10v5" />
    <path d="M16 15v-6h2a2 2 0 1 1 0 4h-2" />
    <path d="M10 5a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
  </svg>
  );
};

export default IconVip2;