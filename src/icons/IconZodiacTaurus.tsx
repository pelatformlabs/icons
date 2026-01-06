import React from 'react';

interface IconZodiacTaurusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacTaurus: React.FC<IconZodiacTaurusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-taurus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 3a6 6 0 0 0 12 0" />
    <path d="M6 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  </svg>
  );
};

export default IconZodiacTaurus;