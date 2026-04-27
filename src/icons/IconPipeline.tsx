import React from 'react';

interface IconPipelineProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPipeline: React.FC<IconPipelineProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-pipeline ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 4h8" />
    <path d="M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4" />
    <path d="M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5" />
    <path d="M13 20h8" />
    <path d="M12 9v6" />
  </svg>
  );
};

export default IconPipeline;