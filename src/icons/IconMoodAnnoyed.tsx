import React from 'react';

interface IconMoodAnnoyedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodAnnoyed: React.FC<IconMoodAnnoyedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-annoyed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" />
    <path d="M15 14c-2 0 -3 1 -3.5 2.05" />
    <path d="M9 10h-.01" />
    <path d="M15 10h-.01" />
  </svg>
  );
};

export default IconMoodAnnoyed;