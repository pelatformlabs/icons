import React from 'react';

interface IconRippleUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRippleUp: React.FC<IconRippleUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ripple-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7q 4.5 -3 9 0t 9 0" />
    <path d="M3 17q 4.5 -3 9 0q .218 .144 .434 .275" />
    <path d="M3 12q 4.5 -3 9 0q 1.941 1.294 3.882 1.472" />
    <path d="M19 22v-6" />
    <path d="M22 19l-3 -3l-3 3" />
  </svg>
  );
};

export default IconRippleUp;