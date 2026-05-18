import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgChapaNoText = ({
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
      viewBox="0 0 461.79 395.08"
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <linearGradient
        id="chapaNoText_svg__a"
        x1={99.791}
        x2={618.801}
        y1={58.33}
        y2={519.334}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="M299.97 224.8h-98.72c-10.52 0-19.04-8.52-19.04-19.04 0-10.38 8.41-18.79 18.79-18.79h136.8c0 20.89-16.94 37.83-37.83 37.83"
        style={{
          opacity: 0.59,
          fill: "url(#chapaNoText_svg__a)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__b"
        x1={104.58}
        x2={623.59}
        y1={52.939}
        y2={513.943}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="M199.34 137.05c-.69 0-1.37.05-2.04.13 1.36-.08 2.72-.13 4.1-.13z"
        style={{
          opacity: 0.59,
          fill: "url(#chapaNoText_svg__b)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__c"
        x1={159.751}
        x2={678.761}
        y1={-9.174}
        y2={451.829}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="m336.18 137.05-27.35 37.83h35.86c20.89 0 37.83-16.94 37.83-37.83z"
        style={{
          opacity: 0.59,
          fill: "url(#chapaNoText_svg__c)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__d"
        x1={124.943}
        x2={643.954}
        y1={30.013}
        y2={491.016}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="m262.56 174.31 26.93-37.25h-88.08c26.62-.01 49.7 15.12 61.15 37.25"
        style={{
          opacity: 0.59,
          fill: "url(#chapaNoText_svg__d)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__e"
        x1={113.755}
        x2={632.766}
        y1={42.609}
        y2={503.612}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="M262.84 174.88c-.1-.19-.18-.39-.28-.58l-.42.58z"
        style={{
          fill: "url(#chapaNoText_svg__e)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__f"
        x1={86.436}
        x2={605.446}
        y1={73.366}
        y2={534.369}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="M200.12 174.88v.06c.43-.02.85-.06 1.28-.06z"
        style={{
          fill: "url(#chapaNoText_svg__f)",
        }}
      />
      <linearGradient
        id="chapaNoText_svg__g"
        x1={99.169}
        x2={618.179}
        y1={59.031}
        y2={520.034}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0}
          style={{
            stopColor: "#86bd4c",
          }}
        />
        <stop
          offset={0.138}
          style={{
            stopColor: "#81bd56",
          }}
        />
        <stop
          offset={0.394}
          style={{
            stopColor: "#72bb71",
          }}
        />
        <stop
          offset={0.736}
          style={{
            stopColor: "#55b996",
          }}
        />
        <stop
          offset={0.995}
          style={{
            stopColor: "#2eb8b4",
          }}
        />
      </linearGradient>
      <path
        d="m290.22 136.04-.73 1.01-26.93 37.25c.1.19.18.39.28.58h-.7l-8.75 12.11-28.44 39.02c-5.69 6.64-14.11 10.87-23.54 10.87-17.12 0-31-13.88-31-31 0-16.69 13.2-30.26 29.72-30.93v-.06h62.02l.42-.58c-11.45-22.12-34.52-37.25-61.15-37.25h-.01c-1.38 0-2.74.05-4.1.13-36.1 2.13-64.72 32.06-64.72 68.7 0 38.01 30.82 68.83 68.83 68.83 22.09 0 41.73-10.41 54.32-26.59l2.51-3.46L300.08 187l8.75-12.11 27.35-37.83 6.87-9.5c-16.94-12.25-40.59-8.45-52.83 8.48"
        style={{
          fill: "url(#chapaNoText_svg__g)",
        }}
      />
    </svg>
  );
};
export default SvgChapaNoText;
