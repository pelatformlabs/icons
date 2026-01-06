import React from 'react';

interface IconBabyCarriageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBabyCarriage: React.FC<IconBabyCarriageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-baby-carriage ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
    <path d="M6 9h14" />
    <path d="M9 17l1 -3" />
    <path d="M16 14l1 3" />
  </svg>
  );
};

export default IconBabyCarriage;