import React from 'react';

interface IconPlaneTiltFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaneTiltFilled: React.FC<IconPlaneTiltFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-plane-tilt-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M21.107 2.893a3.047 3.047 0 0 1 .012 4.302l-2.479 2.564l2.309 6.925a1 1 0 0 1 -.235 1.016l-2.5 2.55a1 1 0 0 1 -1.596 -.229l-2.864 -5.36l-1.754 1.753v2.586a1 1 0 0 1 -.293 .707l-2 2a1 1 0 0 1 -1.656 -.39l-1.341 -4.027l-4.025 -1.342a1 1 0 0 1 -.391 -1.656l2 -2a1 1 0 0 1 .706 -.292h2.586l1.757 -1.757l-5.317 -2.863a1 1 0 0 1 -.233 -1.587l2.5 -2.5a1 1 0 0 1 1.023 -.242l6.925 2.309l2.552 -2.467a3.05 3.05 0 0 1 4.314 0" />
  </svg>
  );
};

export default IconPlaneTiltFilled;