import React from 'react';

interface IconDragDrop2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDragDrop2: React.FC<IconDragDrop2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-drag-drop-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
    <path d="M4 4l0 .01" />
    <path d="M8 4l0 .01" />
    <path d="M12 4l0 .01" />
    <path d="M16 4l0 .01" />
    <path d="M4 8l0 .01" />
    <path d="M4 12l0 .01" />
    <path d="M4 16l0 .01" />
  </svg>
  );
};

export default IconDragDrop2;