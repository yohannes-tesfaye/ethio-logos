import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgLolineMag = ({
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
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".lolineMag_svg__cls-1,.lolineMag_svg__cls-3{stroke:#1d1d1b;stroke-miterlimit:10}.lolineMag_svg__cls-1{fill:#fff;stroke-width:0}.lolineMag_svg__cls-3{fill:#f8d214}"
          }
        </style>
      </defs>
      <g id="lolineMag_svg__Layer_2" data-name="Layer 2">
        <g id="lolineMag_svg__Layer_1-2" data-name="Layer 1">
          <path
            d="M331.935 451.73H0v-83.484h31.343V186.484H0V103h199.312v83.483h-33.094v181.763h82.48v-55.91h83.237ZM1258.363 451.73H926.428v-83.484h31.343V186.484h-31.343V103h199.312v83.483h-33.094v181.763h82.481v-55.91h83.236Z"
            className="lolineMag_svg__cls-1"
          />
          <path
            d="M408.128 448.863q-38.24-50.666-49.304-116.8-11.144-65.635 15.997-136.847a238 238 0 0 1 24.08-46.51 313 313 0 0 1 34.282-42.08A378 378 0 0 1 478.18 66.94Q587.076-15.247 694.886 3.476q53.424 9.02 96.265 34.283a252.9 252.9 0 0 1 73.808 66.316q63.95 84.731 49.467 193.915-14.48 109.181-119.583 188.518-101.616 76.694-209.19 65.564-107.648-10.632-177.525-103.21M583.994 316.13q50.976 67.541 81.884 81.247 30.533 14.44 57.323-5.79 26.49-19.994 22.237-52.892-4.482-33.178-56.338-101.893-50.325-66.678-81.374-81.168-30.544-14.433-57.906 6.23-26.206 19.778-21.941 52.669 4.248 32.89 56.115 101.597"
            style={{
              fill: "#f8d214",
            }}
          />
          <path
            d="M1483.485 451.73h-198.804v-83.484h32.091V186.484h-32.091V103h198.804v83.483h-31.837v181.763h31.837ZM1649.371 451.73h-143.155v-83.484h30.588V186.484h-30.588V103h165.216l126.856 182.258v-98.774h-28.33V103h140.643v83.483h-30.334v269.763h-114.82L1618.536 245.4v122.846h30.835ZM2265.379 451.73H1932.7v-83.484h27.073V186.484H1932.2V103h333.179v111.565h-91.503v-28.081h-79.22v53.65h68.941v70.947h-68.941v57.165h79.22v-28.081h91.503Z"
            className="lolineMag_svg__cls-1"
          />
          <path
            d="M2297.286 235.842V187.37h4.562v9.294h120.437l-124.999-20.956v-23.872l125-24.6h-120.438v9.293h-4.562V108.65h4.562v9.293h167.651v-9.293h4.562v39.542l-137.696 25.694L2474.06 196.3v39.542h-4.562v-9.293h-167.651v9.293ZM2297.286 342.262V293.79h4.562v9.293l51.281-6.742v-26.787l-51.281-7.47v9.292h-4.562v-28.062h4.562v9.294l172.213 26.24v29.885l-172.213 24.236v9.293Zm60.28-46.285 95.538-12.392-95.538-13.667ZM2321.818 444.855q-10.603 0-18.183-13.12-7.582-13.12-7.581-31.707 0-18.407 7.581-31.616 7.58-13.215 18.183-13.211h127.712q10.6 0 18.183 13.21 7.58 13.21 7.58 31.617 0 18.587-7.58 31.707t-18.183 13.12h-28.477V414.97h39.57q4.19 0 7.15-4.373a20.36 20.36 0 0 0 0-21.139q-2.96-4.374-7.15-4.373h-149.9q-4.192 0-7.15 4.373a20.36 20.36 0 0 0 0 21.139q2.96 4.373 7.15 4.373h77.662v-14.942h4.562v44.827Z"
            className="lolineMag_svg__cls-3"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgLolineMag;
