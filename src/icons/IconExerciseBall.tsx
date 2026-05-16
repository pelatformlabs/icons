import React from 'react';

interface IconExerciseBallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExerciseBall: React.FC<IconExerciseBallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-exercise-ball ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.59 18.31a15.57 15.57 0 0 1 4.51 -9.21a15.9 15.9 0 0 1 7.43 -4.19" />
    <path d="M11.55 21a9.34 9.34 0 0 1 2.79 -7.65a9.5 9.5 0 0 1 6.54 -2.85" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  </svg>
  );
};

export default IconExerciseBall;