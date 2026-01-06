import React from 'react';

interface IconBrandNexoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandNexo: React.FC<IconBrandNexoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-nexo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3l5 -3" />
    <path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
  </svg>
  );
};

export default IconBrandNexo;