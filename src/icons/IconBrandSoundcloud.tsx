import React from 'react';

interface IconBrandSoundcloudProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSoundcloud: React.FC<IconBrandSoundcloudProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-soundcloud ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4" />
    <path d="M9 8l0 9" />
    <path d="M6 17l0 -7" />
    <path d="M3 16l0 -2" />
  </svg>
  );
};

export default IconBrandSoundcloud;