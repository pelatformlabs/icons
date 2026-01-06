import React from 'react';

interface IconBrandFeedlyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandFeedly: React.FC<IconBrandFeedlyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-feedly ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7.833 12.278l4.445 -4.445" />
    <path d="M10.055 14.5l2.223 -2.222" />
    <path d="M12.278 16.722l.555 -.555" />
    <path d="M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172" />
  </svg>
  );
};

export default IconBrandFeedly;