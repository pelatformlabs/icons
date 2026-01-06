import React from 'react';

interface IconSquareKeyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSquareKey: React.FC<IconSquareKeyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-square-key ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12.5 11.5l-4 4l1.5 1.5" />
    <path d="M12 15l-1.5 -1.5" />
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  </svg>
  );
};

export default IconSquareKey;