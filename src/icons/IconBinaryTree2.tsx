import React from 'react';

interface IconBinaryTree2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBinaryTree2: React.FC<IconBinaryTree2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-binary-tree-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M12 8v8" />
    <path d="M6.316 12.496l4.368 -4.992" />
    <path d="M17.684 12.496l-4.366 -4.99" />
  </svg>
  );
};

export default IconBinaryTree2;