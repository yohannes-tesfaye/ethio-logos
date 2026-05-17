const template = (variables, { tpl }) => {
    return tpl `
import React, { SVGProps } from 'react';

export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  alt?: string;
  title?: string;
  titleId?: string
}

const ${variables.componentName} = ({
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
    ${variables.jsx}
  );
};

${variables.exports};
  `;
};
export default template;
//# sourceMappingURL=svgr-template.js.map