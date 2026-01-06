import React from 'react';

interface IconShoppingCartOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShoppingCartOff: React.FC<IconShoppingCartOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shopping-cart-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 17a2 2 0 1 0 2 2" />
    <path d="M17 17h-11v-11" />
    <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconShoppingCartOff;