import React from 'react';

interface IconPlaneDepartureFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaneDepartureFilled: React.FC<IconPlaneDepartureFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-plane-departure-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M9.674 3.827l5.267 5.315l4.25 -1.139a3 3 0 1 1 1.572 5.79l-14.49 3.883a1 1 0 0 1 -1.006 -.303l-4.45 -5.02a1 1 0 0 1 .49 -1.629l2.896 -.776a1 1 0 0 1 .759 .1l2.091 1.207l1.217 -.326l-3.062 -5.107a1 1 0 0 1 .599 -1.48l2.898 -.777a1 1 0 0 1 .97 .262" />
    <path d="M22 21a1 1 0 0 1 -1 1h-18a1 1 0 0 1 0 -2h18a1 1 0 0 1 1 1" />
  </svg>
  );
};

export default IconPlaneDepartureFilled;