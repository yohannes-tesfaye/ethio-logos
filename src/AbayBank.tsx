import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgAbayBank = ({
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
      id="abayBank_svg__Layer_1"
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
        {".abayBank_svg__st0{fill:#49a8ad}.abayBank_svg__st1{fill:#004461}"}
      </style>
      <g id="abayBank_svg__Layer_3">
        <path
          d="M5.1 0H0c2.8 21.7 5.5 37.5 7 56.7h2C7.3 35.2 6.5 16.5 5.1 0"
          className="abayBank_svg__st0"
        />
        <path
          d="M8.3 0c.3 14.9 1.6 33.6 1.9 56.7h3.2c-.3-24.2-.6-40.1 0-56.7z"
          className="abayBank_svg__st1"
        />
        <path
          d="M16.5 0c-.4 13.9-.5 32.6-1.3 56.7h5.1c.9-24.1.9-42.8 1.3-56.7z"
          className="abayBank_svg__st0"
        />
        <path
          d="M28.7 0c-.7 15.3-5 48.5-5.2 56.7H35c-.8-7.2-2.1-17.6-1.1-56.7z"
          style={{
            fill: "#dfa658",
          }}
        />
        <path
          d="M37 0c0 17.1-1 35.8-.9 56.7H39V0z"
          className="abayBank_svg__st0"
        />
        <path
          d="M43.3 0c-.7 15.8-1.8 40.4-3.2 56.7h4.1c.4-9.1.3-37.7 1-56.7zM48.4 56.7H72C62 30.9 61.3 27.9 55.5 0h-8.3c.7.6 2.3 40.3 1.2 56.7"
          className="abayBank_svg__st1"
        />
      </g>
      <path
        d="M71.6 2.6c-.3.3-.7.4-1.1.4s-.8-.1-1.1-.4-.4-.7-.4-1.1.2-.8.5-1.1.7-.4 1-.4c.4 0 .8.1 1.1.4s.4.7.4 1.1-.1.8-.4 1.1m-2-2c-.2.2-.4.5-.4.9s.1.7.4.9.5.4.9.4.7-.1.9-.4c.2-.2.4-.5.4-.9s-.1-.6-.4-.9c-.2-.2-.5-.4-.9-.4-.3 0-.7.2-.9.4m.2 1.7V.6h.9c.1 0 .2.1.4.1.1.1.2.2.2.4 0 .1-.1.2-.1.3-.1.1-.2.1-.3.1.1 0 .2.1.2.1.1.1.1.2.1.4v.4h-.4V2c0-.1-.1-.1-.1-.1h-.3v.6zm.9-1.3c-.1 0-.1-.1-.2-.1h-.1v.5h.2c.1 0 .2 0 .2-.1.1-.1.1-.1.1-.2-.1 0-.2-.1-.2-.1"
        className="abayBank_svg__st1"
      />
    </svg>
  );
};
export default SvgAbayBank;
