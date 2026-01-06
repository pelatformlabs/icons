import React from 'react';

interface IconBrandReasonProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandReason: React.FC<IconBrandReasonProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-reason ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    <path d="M18 18h-3v-6h3" />
    <path d="M18 15h-3" />
    <path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" />
    <path d="M12 18l-2 -3" />
  </svg>
  );
};

export default IconBrandReason;