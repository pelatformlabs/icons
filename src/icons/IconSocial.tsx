import React from 'react';

interface IconSocialProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSocial: React.FC<IconSocialProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-social ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M12 7l0 4" />
    <path d="M6.7 17.8l2.8 -2" />
    <path d="M17.3 17.8l-2.8 -2" />
  </svg>
  );
};

export default IconSocial;