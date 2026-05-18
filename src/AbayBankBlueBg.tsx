import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgAbayBankBlueBg = ({
  size,
  width,
  height,
  alt,
  title,
  titleId,
  ...props
}: EthioLogoProps) => {
  const computedWidth = size || width || "100%";
  const computedHeight = size || height || "auto";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="abayBankBlueBg_svg__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 72 56.7"
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>
        {
          ".abayBankBlueBg_svg__st0{fill:#49a8ad}.abayBankBlueBg_svg__st1{fill:#fff}"
        }
      </style>
      <g id="abayBankBlueBg_svg__Layer_3">
        <path
          d="M5.1 0H0c2.8 21.7 5.5 37.5 7 56.7h2C7.3 35.2 6.5 16.5 5.1 0"
          className="abayBankBlueBg_svg__st0"
        />
        <path
          d="M8.3 0c.3 14.9 1.6 33.6 1.9 56.7h3.2c-.3-24.2-.6-40.1 0-56.7z"
          className="abayBankBlueBg_svg__st1"
        />
        <path
          d="M16.5 0c-.4 13.9-.5 32.6-1.3 56.7h5.1c.9-24.1.9-42.8 1.3-56.7z"
          className="abayBankBlueBg_svg__st0"
        />
        <path
          d="M28.7 0c-.7 15.3-5 48.5-5.2 56.7H35c-.8-7.2-2.1-17.6-1.1-56.7z"
          style={{
            fill: "#dfa658",
          }}
        />
        <path
          d="M37 0c0 17.1-1 35.8-.9 56.7H39V0z"
          className="abayBankBlueBg_svg__st0"
        />
        <path
          d="M43.3 0c-.7 15.8-1.8 40.4-3.2 56.7h4.1c.4-9.1.3-37.7 1-56.7zM48.4 56.7H72C62 30.9 61.3 27.9 55.5 0h-8.3c.7.6 2.3 40.3 1.2 56.7"
          className="abayBankBlueBg_svg__st1"
        />
      </g>
      <path
        d="M71.5 3.1c-.4.4-.8.5-1.3.5s-.9-.1-1.3-.5-.5-.8-.5-1.3.2-.9.6-1.3.7-.5 1.2-.5.9.1 1.3.5.5.8.5 1.3-.2.9-.5 1.3M69.2.7c-.3.3-.4.6-.4 1.1s.1.8.4 1.1.6.4 1.1.4c.4 0 .8-.1 1.1-.4s.4-.6.4-1.1-.1-.7-.4-1.1c-.3-.3-.6-.4-1.1-.4s-.9.1-1.1.4m.2 2v-2h1c.1 0 .3.1.4.1.1.1.3.3.3.5 0 .1-.1.3-.1.4-.1.1-.2.1-.4.1.1 0 .2.1.3.1.1.2.1.3.1.5v.4h-.5v-.5c0-.1-.1-.1-.1-.1H70v.7zm1-1.6c-.1 0-.1-.1-.3-.1H70v.6h.2c.1 0 .2 0 .3-.1s.1-.1.1-.2c-.1 0-.1-.1-.2-.2"
        className="abayBankBlueBg_svg__st1"
      />
    </svg>
  );
};
export default SvgAbayBankBlueBg;
