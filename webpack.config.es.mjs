import { merge as webpackMerge } from "webpack-merge";
import webpackConfigCommom from "./webpack.config.commom.mjs";

export default webpackMerge(webpackConfigCommom, {
    output: {
        filename: "[name].es.js",
        library: {
            type: "module",
        },
    },
});
