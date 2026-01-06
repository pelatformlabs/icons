import React from 'react';

interface IconLayoutBoardSplitFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLayoutBoardSplitFilled: React.FC<IconLayoutBoardSplitFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-layout-board-split-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M5 3h5a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2" />
    <path d="M14 3h5a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
    <path d="M13 11a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
    <path d="M14 16h6a1 1 0 0 1 1 1v2a2 2 0 0 1 -2 2h-5a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
    <path d="M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-5a2 2 0 0 1 -2 -2v-5a1 1 0 0 1 1 -1" />
  </svg>
  );
};

export default IconLayoutBoardSplitFilled;