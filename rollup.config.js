import { babel } from "@rollup/plugin-babel";
import resolver from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
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
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      compilerOptions: {
        declaration: true,
        declarationDir: "./dist",
        outDir: "./dist",
        jsx: "preserve",
        rootDir: "./src",
        noEmit: false,
      },
      include: ["src/**/*"],
      exclude: ["node_modules/**", ".next/**", "app/**", "public/**"],
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
