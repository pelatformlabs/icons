import React from 'react';

interface IconBallVolleyballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallVolleyball: React.FC<IconBallVolleyballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-volleyball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M12 12a8 8 0 0 0 8 4" />
    <path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
    <path d="M12 12a8 8 0 0 0 -7.464 4.928" />
    <path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
    <path d="M12 12a8 8 0 0 0 -.536 -8.928" />
    <path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
  </svg>
  );
};

export default IconBallVolleyball;