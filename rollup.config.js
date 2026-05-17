import { babel } from "@rollup/plugin-babel";
import resolver from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const config = {
  input: "src/index.ts",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  external: ["react", "react-dom", /@babel\/runtime/],
  plugins: [
    resolver({
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    filesize(),
  ],
};

export default config;
