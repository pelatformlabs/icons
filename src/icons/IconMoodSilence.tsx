import React from 'react';

interface IconMoodSilenceProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodSilence: React.FC<IconMoodSilenceProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-silence ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 10h-.01" />
    <path d="M15 10h-.01" />
    <path d="M8 15h8" />
    <path d="M9 14v2" />
    <path d="M12 14v2" />
    <path d="M15 14v2" />
  </svg>
  );
};

export default IconMoodSilence;