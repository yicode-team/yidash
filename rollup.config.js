import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import { visualizer } from "rollup-plugin-visualizer";
import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";
import cleanup from "rollup-plugin-cleanup";
import del from "rollup-plugin-delete";
export default defineConfig({
    input: "index.js",
    plugins: [
        //
        del({ targets: "dist/*" }),
        commonjs(),
        nodeResolve(),

        optimizeLodashImports(),
        cleanup(),
        // visualizer(),
    ],
    output: [
        {
            file: "dist/yidash.cjs.js",
            format: "cjs",
        },
        {
            file: "dist/yidash.iife.js",
            format: "iife",
            name: "yidash",
            globals: {
                yidash: "yidash",
            },
        },
        {
            file: "dist/yidash.es.js",
            format: "es",
        },
        {
            file: "dist/yidash.amd.js",
            format: "amd",
        },
        {
            file: "dist/yidash.umd.js",
            format: "umd",
            name: "yidash",
            globals: {
                yidash: "yidash",
            },
        },
        {
            file: "dist/yidash.system.js",
            format: "system",
        },
    ],
});
