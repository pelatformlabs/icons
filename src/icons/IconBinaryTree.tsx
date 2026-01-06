import React from 'react';

interface IconBinaryTreeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBinaryTree: React.FC<IconBinaryTreeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-binary-tree ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
    <path d="M5.058 18.306l2.88 -4.606" />
    <path d="M10.061 10.303l2.877 -4.604" />
    <path d="M10.065 13.705l2.876 4.6" />
    <path d="M15.063 5.7l2.881 4.61" />
  </svg>
  );
};

export default IconBinaryTree;