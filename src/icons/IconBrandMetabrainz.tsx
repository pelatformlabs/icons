import React from 'react';

interface IconBrandMetabrainzProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandMetabrainz: React.FC<IconBrandMetabrainzProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-metabrainz ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 7v10l7 4v-18l-7 4" />
    <path d="M21 7v10l-7 4v-18l7 4" />
  </svg>
  );
};

export default IconBrandMetabrainz;