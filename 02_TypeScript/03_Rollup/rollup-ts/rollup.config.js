import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import clear from "rollup-plugin-clear";

export default {
  input: "src/main.ts",
  external: ["ms"],
  plugins: [
    clear({
      targets: ["dist"]
    }),
    typescript()
    // terser(),
  ],
  output: [
    {
      file: "dist/main.bundle.ts.js",
      format: "cjs"
    },
    {
      file: "dist/main.es.ts.js",
      format: "es"
    },
    {
      file: "dist/main.min.ts.js",
      format: "iife",
      name: "version",
      plugins: [
	terser()
      ]
    }
  ]
}
