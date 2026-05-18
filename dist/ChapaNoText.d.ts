import { SVGProps } from "react";
export interface EthioLogoProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    alt?: string;
    title?: string;
    titleId?: string;
}
declare const SvgChapaNoText: ({ size, width, height, alt, title, titleId, ...props }: EthioLogoProps) => import("react/jsx-runtime").JSX.Element;
export default SvgChapaNoText;
