import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgGasha = ({
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="gasha_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 2318.71 790.61"
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient
          id="gasha_svg__linear-gradient"
          x1={558.35}
          x2={1120.27}
          y1={727.53}
          y2={583}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.5} stopColor="#f69f15" />
          <stop offset={0.7} stopColor="#d38512" />
          <stop offset={0.89} stopColor="#b97210" />
          <stop offset={1} stopColor="#af6b0f" />
        </linearGradient>
        <linearGradient
          id="gasha_svg__linear-gradient-2"
          x1={831.42}
          x2={708.43}
          y1={494.43}
          y2={924.48}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.49} stopColor="#feead5" />
          <stop offset={0.64} stopColor="#efcda5" />
          <stop offset={0.8} stopColor="#e2b37b" />
          <stop offset={0.93} stopColor="#daa361" />
          <stop offset={1} stopColor="#d79d57" />
        </linearGradient>
        <linearGradient
          id="gasha_svg__linear-gradient-3"
          x1={382.09}
          x2={627.9}
          y1={437.73}
          y2={437.73}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.5} stopColor="#6faadd" />
          <stop offset={0.63} stopColor="#5d98d1" />
          <stop offset={0.86} stopColor="#437ec0" />
          <stop offset={1} stopColor="#3974ba" />
        </linearGradient>
        <linearGradient
          xlinkHref="#gasha_svg__linear-gradient-3"
          id="gasha_svg__linear-gradient-4"
          x1={916.2}
          x2={1162}
          y1={286.84}
          y2={286.84}
          gradientTransform="rotate(-43.89 1142.397 1269.023)"
        />
        <linearGradient
          xlinkHref="#gasha_svg__linear-gradient-3"
          id="gasha_svg__linear-gradient-5"
          x1={1453.73}
          x2={1699.54}
          y1={615.04}
          y2={615.04}
          gradientTransform="rotate(-83.26 1143.72 1382.805)"
        />
        <linearGradient
          id="gasha_svg__linear-gradient-6"
          x1={649.31}
          x2={806.02}
          y1={696.52}
          y2={696.52}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b5cee5" />
          <stop offset={0.14} stopColor="#90b3d8" />
          <stop offset={0.29} stopColor="#719ccd" />
          <stop offset={0.45} stopColor="#588bc5" />
          <stop offset={0.61} stopColor="#477ebf" />
          <stop offset={0.79} stopColor="#3c76bb" />
          <stop offset={1} stopColor="#3974ba" />
        </linearGradient>
        <style>
          {
            ".gasha_svg__cls-1{fill:#3974ba}.gasha_svg__cls-2{fill:#3a74ba}.gasha_svg__cls-5{fill:#3974b9}"
          }
        </style>
      </defs>
      <circle
        id="gasha_svg__Middle_Circle"
        cx={460.54}
        cy={430.9}
        r={96.77}
        className="gasha_svg__cls-1"
      />
      <path
        d="M133.39 112.5 333.3 311.93a174.35 174.35 0 0 1 66.41-44.3L312.58 0a456.4 456.4 0 0 0-179.19 112.5M0 412.37l282.3 5.68a174.45 174.45 0 0 1 17.33-77.9l-248.08-133A456.5 456.5 0 0 0 0 412.37m98.77 309.67 221.72-174.89a174.3 174.3 0 0 1-36.12-71.18L8.3 530.78a456.34 456.34 0 0 0 90.47 191.26"
        className="gasha_svg__cls-2"
      />
      <path
        d="m0 412.37 282.3 5.68a174.45 174.45 0 0 1 17.33-77.9l-248.08-133A456.5 456.5 0 0 0 0 412.37m98.77 309.67 221.72-174.89a174.3 174.3 0 0 1-36.12-71.18L8.3 530.78a456.34 456.34 0 0 0 90.47 191.26"
        className="gasha_svg__cls-2"
      />
      <path
        d="M709.34 329a360 360 0 0 0-38.08 2l41 182.81A172.58 172.58 0 1 1 631.68 841L486.87 966.89a356.23 356.23 0 0 0 222.47 77.57c197.58 0 357.74-160.17 357.74-357.74S906.92 329 709.34 329"
        style={{
          fill: "url(#gasha_svg__linear-gradient)",
        }}
        transform="translate(-248.7 -253.85)"
      />
      <path
        d="m672.06 334.55 40.19 179.25A172.58 172.58 0 1 1 631.68 841L486.87 966.89a357.92 357.92 0 0 0 408.37 25.53A529.4 529.4 0 0 0 934 781c-4.12-191-108.59-356.2-261.94-446.45"
        style={{
          opacity: 0.5,
          fill: "url(#gasha_svg__linear-gradient-2)",
        }}
        transform="translate(-248.7 -253.85)"
      />
      <path
        d="M1076.95 388.49v-.25l-42.87 32.49h70c-12.12 18.5-39.44 25.18-55.71 25.18a57.34 57.34 0 1 1 29.17-106.69l68.2-31.38a126.66 126.66 0 1 0 29.63 81.4v-.75Zm278.26-124.75-144 251 142.5.24v-73a36.66 36.66 0 0 1 2.67-73.22h.33a36 36 0 0 1 28.94 14.59 36.66 36.66 0 0 1-24.94 58.48v73.18l142 .25Z"
        className="gasha_svg__cls-5"
      />
      <circle cx={1356.08} cy={405.07} r={27.67} className="gasha_svg__cls-5" />
      <path
        d="m2171.21 263.74-144 251 142.5.24v-73a36.66 36.66 0 0 1 2.67-73.22h.33a36 36 0 0 1 28.94 14.59 36.66 36.66 0 0 1-24.94 58.48v73.18l142 .25Z"
        className="gasha_svg__cls-5"
      />
      <circle cx={2172.08} cy={405.07} r={27.67} className="gasha_svg__cls-5" />
      <path
        d="M1933.04 265.73v105.32a33.58 33.58 0 0 1 0 46.85v95.83h69.71v-248Zm-123.61 248h69.51V417.9a33.63 33.63 0 0 1 0-46.85V265.73h-69.51Z"
        className="gasha_svg__cls-5"
      />
      <ellipse
        cx={1904.87}
        cy={393.91}
        className="gasha_svg__cls-5"
        rx={25.53}
        ry={23.89}
      />
      <path
        d="M1770.16 378.57h-193.6a66.37 66.37 0 0 1 126.13-23h64.12a126.5 126.5 0 0 0-249.29 23h-.3l.16 4.23v2.46q0 6 .56 11.92l.5 13.39 184.86-.52c-10.36 23.17-33.6 40.32-60.61 40.32a66.25 66.25 0 0 1-49.67-22.35h-68.28a126.52 126.52 0 0 0 245.56-42.76c0-2.25 0-4.48-.14-6.69"
        className="gasha_svg__cls-5"
      />
      <path
        d="M922.03 649.09v-65.3l46.74-.11a11.47 11.47 0 0 1 6.76 1.78 9.3 9.3 0 0 1 3.44 5.85q-.12 12.44-.12 25t.12 26.23q-1.73 6.57-10.2 6.58Zm36.43-14.32v-37h-17.07l-.11 37Zm216.05 14.21h-19.21v-65.19h19.36Zm195.88-22.77v8.67h17.64v-11.49h-10.88V609.7h30.24v25.07h.23l-.23.63v13.58h-56.48v-65.19h56.71l-5.62 14h-31.61v8.67h-.09v19.75Zm232.77 22.77h-19.25v-65.19h19.39Zm175.72-65.3h56.7v13.69h-18.78l-.12 51.61h-19.24v-51.61h-18.56Zm258.42-.42h20.85l24.63 65.62h-40.33v-13.9h15.7l-10.43-29.46-17.07 43.36h-19.47Zm241 51.72h31.61l5.61 14h-56.7v-65.19h19.36Z"
        className="gasha_svg__cls-1"
      />
      <path
        d="M449.69 309.69a459.5 459.5 0 0 0-67.6 56.66L582 565.78a174.9 174.9 0 0 1 45.84-35v-3.38c.06-107.66-76.52-197.4-178.15-217.71"
        style={{
          fill: "url(#gasha_svg__linear-gradient-3)",
        }}
        transform="translate(-248.7 -253.85)"
      />
      <path
        d="M258.37 578.81a459 459 0 0 0-9.44 87.69l282.35 5.1a175 175 0 0 1 8.73-57c-.77-.82-1.53-1.64-2.31-2.46-74.61-77.59-192-89.14-279.33-33.33"
        style={{
          fill: "url(#gasha_svg__linear-gradient-4)",
        }}
        transform="translate(-248.7 -253.85)"
      />
      <path
        d="M298.35 902.64a458.7 458.7 0 0 0 48.33 73.77l221.51-175.15a175 175 0 0 1-29.43-49.63c-1.11-.15-2.22-.31-3.34-.44-106.87-12.62-204.96 52.9-237.07 151.45"
        style={{
          fill: "url(#gasha_svg__linear-gradient-5)",
        }}
        transform="translate(-248.7 -253.85)"
      />
      <path
        d="M806 684.75a96.3 96.3 0 0 0-11.17-45.16 84 84 0 1 0-70.2 140.71A96.8 96.8 0 0 0 806 684.75"
        style={{
          opacity: 0.7,
          fill: "url(#gasha_svg__linear-gradient-6)",
        }}
        transform="translate(-248.7 -253.85)"
      />
    </svg>
  );
};
export default SvgGasha;
