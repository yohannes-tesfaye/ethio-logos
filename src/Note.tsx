import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title: string;
  titleId: number | string;
}
const SvgNote = ({
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
      fill="none"
      viewBox="0 0 16 16"
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="#1D1D1D"
        d="M1.243 8.243 8 15l6.757-6.757a4.24 4.24 0 0 0 1.243-3v-.19A4.052 4.052 0 0 0 8.783 2.52L8 3.5l-.783-.98A4.052 4.052 0 0 0 0 5.053v.19c0 1.126.447 2.205 1.243 3"
      />
    </svg>
  );
};
export default SvgNote;
