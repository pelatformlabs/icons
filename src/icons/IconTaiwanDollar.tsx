import React from 'react';

interface IconTaiwanDollarProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTaiwanDollar: React.FC<IconTaiwanDollarProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-taiwan-dollar ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 19a4 4 0 0 0 4 -4v-7" />
    <path d="M14 8v10a1 1 0 0 0 1.45 .89l2.55 -1.27" />
    <path d="M6 5h12" />
    <path d="M6 8h12" />
  </svg>
  );
};

export default IconTaiwanDollar;