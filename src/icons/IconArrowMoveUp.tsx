import React from 'react';

interface IconArrowMoveUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowMoveUp: React.FC<IconArrowMoveUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-move-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 13v-10" />
    <path d="M9 6l3 -3l3 3" />
    <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4" />
  </svg>
  );
};

export default IconArrowMoveUp;