import template from "./svgr-template.js";

export default {
  typescript: true,
  expandProps: "end",
  template: template,

  svgProps: {
    width: "{computedWidth}",
    height: "{computedHeight}",
    "aria-label": "{alt || undefined}",
    role: "img",
  },
  icon: false,
};
