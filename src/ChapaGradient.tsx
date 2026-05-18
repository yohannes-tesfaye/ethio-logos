import React, { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string;
}
const SvgChapaGradient = ({
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
      viewBox="0 0 1080 395.08"
      width={computedWidth}
      height={computedHeight}
      aria-label={alt || undefined}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <linearGradient
        id="chapaGradient_svg__a"
        x1={532.528}
        x2={963.002}
        y1={206.037}
        y2={267.097}
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
        d="M770.23 271.96v40.11c0 1.72-.01 1.76-1.69 1.66-7.42-.48-13.94-3.11-19.45-8.16-5.74-5.26-9-11.8-10.02-19.48-.21-1.62-.28-3.27-.29-4.91-.13-14.8-.22-29.61-.34-44.41-.03-4.18-.14-8.36-.18-12.54-.11-11.63 3.49-21.95 10.68-31.12 9.64-12.31 22.3-19.58 37.53-22.2 14.91-2.56 29.13-.16 42.11 7.83 10.99 6.76 19.16 16.04 23.37 28.38 1.25 3.65 2.02 7.56 2.32 11.4 1.23 16-3.38 30.17-14.75 41.64-7.39 7.47-16.19 12.91-26.56 15.5-12.83 3.21-25.51 2.85-38.02-1.5-1.53-.53-2.95-1.37-4.71-2.2m25.34-22.57c1.7-.11 2.89-.14 4.07-.27 7.19-.8 12.88-4.32 17.5-9.73 3.66-4.29 5.82-9.27 5.96-14.89.21-8.35-2.97-15.24-9.66-20.39-6.02-4.63-12.8-6.47-20.32-5.49-5.54.72-10.19 3.21-14.4 6.88-9.62 8.38-11.89 21.32-5.05 31.49 5.43 8.06 12.97 11.8 21.9 12.4"
        style={{
          fill: "url(#chapaGradient_svg__a)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__b"
        x1={530.945}
        x2={961.419}
        y1={217.197}
        y2={278.257}
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
        d="M504.31 157.2c-1.87 1.95-3.64 3.89-5.51 5.73-5.23 5.15-10.53 10.23-15.75 15.39-.85.84-1.35.79-2.18 0-6.24-5.92-13.64-9.53-22.21-10.37-7.96-.79-15.53.81-22.5 4.8-9.88 5.66-16.19 14.07-18.77 25.16-1.93 8.29-1.06 16.36 2.42 24.14 2.58 5.76 6.33 10.62 11.29 14.51 6.94 5.45 14.83 8.28 23.68 8.31 8.89.03 16.99-2.38 24-8.02 1.08-.87 2.09-1.84 3.21-2.83.33.28.65.52.93.8 6.73 6.72 13.45 13.46 20.2 20.17.7.7.79 1.11.01 1.85-6.55 6.16-13.91 11.07-22.26 14.45-6.74 2.73-13.73 4.33-20.99 4.87-10.86.81-21.34-.77-31.46-4.76-9.17-3.61-17.21-8.95-24.09-16.03-11.23-11.55-17.76-25.33-19.5-41.35-1.55-14.22.99-27.71 7.61-40.36 6.48-12.39 15.9-22.01 28.18-28.73 11.69-6.4 24.26-9.33 37.53-8.52 17.23 1.05 32.33 7.31 44.83 19.41.41.4.83.79 1.24 1.2.05.04.07.14.09.18"
        style={{
          fill: "url(#chapaGradient_svg__b)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__c"
        x1={532.673}
        x2={963.146}
        y1={205.016}
        y2={266.076}
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
        d="M546.5 179c2.14-1.56 3.92-3.09 5.92-4.27 5.6-3.33 11.71-5.08 18.24-5.21 6.76-.14 13.32.76 19.5 3.73 6.65 3.2 11.27 8.3 14.38 14.91 2.87 6.12 3.97 12.65 4.48 19.3.24 3.1.26 6.23.26 9.34.02 18.7.01 37.4.01 56.1 0 1.77-.01 1.82-1.77 1.69-7.29-.52-13.67-3.21-19.09-8.13-5.78-5.24-9.25-11.73-10.27-19.48-.2-1.5-.17-3.03-.17-4.54 0-9.31.14-18.62-.02-27.93-.12-6.78-2.79-12.36-9.22-15.35-4.63-2.15-9.38-1.35-13.97.48-5.33 2.12-7.55 6.57-8.44 11.82-.39 2.33-.46 4.73-.46 7.11-.04 17.96-.02 35.93-.02 53.89 0 2.27 0 2.27-2.23 2.11-15.16-1.05-26.97-12.26-28.81-27.38-.19-1.58-.27-3.19-.27-4.78-.01-35.23-.01-70.46-.01-105.68 0-1.94 0-1.99 1.97-1.91 10.81.41 19.06 5.35 24.99 14.28 3.63 5.48 4.97 11.63 5.02 18.11.02 3.44 0 6.89 0 10.33-.02.44-.02.87-.02 1.46"
        style={{
          fill: "url(#chapaGradient_svg__c)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__d"
        x1={532.906}
        x2={963.379}
        y1={203.376}
        y2={264.436}
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
        d="M727.71 247.47v28.17c0 1.72-.01 1.78-1.7 1.68-6.09-.35-11.5-2.47-16.18-6.37-1.16-.97-2.26-2.03-3.29-3.14-.59-.64-1-.69-1.75-.24-2.57 1.53-5.12 3.12-7.8 4.42-9.7 4.72-19.96 6.53-30.62 4.85-20.26-3.19-34.43-14.44-42.6-33.18-3.3-7.57-4.43-15.6-3.86-23.82.84-12.24 5.39-22.99 13.5-32.18 8.49-9.61 19.16-15.41 31.78-17.53 8.34-1.4 16.64-.94 24.66 1.8 20.25 6.92 32.64 20.93 36.99 41.89.69 3.34.78 6.84.84 10.27.12 7.8.03 15.59.03 23.38m-53.94 1.83c14.23 0 25.35-11.36 25.34-25.87-.01-13.93-11.68-25.35-25.89-25.34-13.65.01-25.31 11.93-25.32 25.89-.01 13.92 11.64 25.33 25.87 25.32"
        style={{
          fill: "url(#chapaGradient_svg__d)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__e"
        x1={537.697}
        x2={968.171}
        y1={169.594}
        y2={230.654}
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
        d="M971.34 248.05v27.56c0 1.76-.01 1.83-1.79 1.71-6.03-.4-11.43-2.42-16.07-6.34-1.16-.98-2.28-2.01-3.3-3.12-.68-.74-1.17-.71-1.96-.19-4.97 3.32-10.27 5.97-16.06 7.58-15.06 4.19-29.4 2.44-42.71-5.72-14.94-9.16-23.68-22.65-25.65-40.06-1.99-17.57 3.68-32.72 16.32-45.05 8.96-8.74 19.92-13.69 32.39-14.76 13.91-1.19 26.6 2.41 37.7 11.01 11.93 9.24 18.79 21.45 20.75 36.39.32 2.43.35 4.91.36 7.36.05 7.88.02 15.75.02 23.63m-54.06 1.25c14.01.1 25.75-11.82 25.94-25.49.2-14.19-11.11-25.64-25.09-25.72-14.57-.09-26.05 11.02-26.09 25.25-.04 14.53 11.02 25.9 25.24 25.96"
        style={{
          fill: "url(#chapaGradient_svg__e)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__f"
        x1={130.182}
        x2={493.489}
        y1={156.634}
        y2={321.497}
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
        d="M280.43 229.32H174c-11.38 0-20.6-9.22-20.6-20.6 0-11.16 9.05-20.21 20.21-20.21h147.64c0 22.54-18.28 40.81-40.82 40.81"
        style={{
          opacity: 0.59,
          fill: "url(#chapaGradient_svg__f)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__g"
        x1={145.545}
        x2={508.852}
        y1={122.778}
        y2={287.641}
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
        d="M171.87 134.66c-.75 0-1.48.06-2.2.14 1.47-.09 2.94-.14 4.43-.14z"
        style={{
          opacity: 0.59,
          fill: "url(#chapaGradient_svg__g)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__h"
        x1={164.847}
        x2={528.154}
        y1={80.243}
        y2={245.106}
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
        d="m319.49 134.66-29.51 40.81h38.69c22.54 0 40.81-18.27 40.81-40.81z"
        style={{
          opacity: 0.59,
          fill: "url(#chapaGradient_svg__h)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__i"
        x1={152.135}
        x2={515.442}
        y1={108.257}
        y2={273.119}
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
        d="m240.07 174.85 29.06-40.19h-95.02c28.72 0 53.62 16.32 65.96 40.19"
        style={{
          opacity: 0.59,
          fill: "url(#chapaGradient_svg__i)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__j"
        x1={141.936}
        x2={505.244}
        y1={130.731}
        y2={295.593}
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
        d="M240.38 175.47c-.1-.21-.19-.42-.3-.62l-.45.62z"
        style={{
          fill: "url(#chapaGradient_svg__j)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__k"
        x1={130.461}
        x2={493.769}
        y1={156.018}
        y2={320.881}
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
        d="M172.72 175.47v.07c.46-.02.91-.07 1.38-.07z"
        style={{
          fill: "url(#chapaGradient_svg__k)",
        }}
      />
      <linearGradient
        id="chapaGradient_svg__l"
        x1={131.779}
        x2={495.087}
        y1={153.114}
        y2={317.977}
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
        d="m269.92 133.57-.79 1.09-29.06 40.19c.11.2.2.42.3.62h-.75l-9.44 13.06-30.68 42.09c-6.13 7.17-15.23 11.72-25.4 11.72-18.47 0-33.44-14.97-33.44-33.44 0-18 14.24-32.64 32.06-33.37v-.07h66.9l.45-.62c-12.35-23.87-37.24-40.19-65.97-40.19h-.01c-1.49 0-2.96.06-4.43.14-38.94 2.29-69.82 34.59-69.82 74.11 0 41.01 33.24 74.25 74.25 74.25 23.83 0 45.01-11.23 58.6-28.68l2.71-3.74 45.13-62.21 9.44-13.06 29.51-40.81 7.41-10.25c-18.25-13.2-43.77-9.1-56.97 9.17"
        style={{
          fill: "url(#chapaGradient_svg__l)",
        }}
      />
    </svg>
  );
};
export default SvgChapaGradient;
