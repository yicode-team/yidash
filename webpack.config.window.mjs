import path from "path";
import { merge as webpackMerge } from "webpack-merge";
import webpackConfigCommom from "./webpack.config.commom.mjs";

export default webpackMerge(webpackConfigCommom, {
    output: {
        filename: "[name].window.js",
        library: {
            type: "window",
        },
    },
    module: {
        rules: [
            {
                test: /\.[mc]?js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cwd: path.resolve("."),
                            root: path.resolve("."),
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "usage",
                                        corejs: 3,
                                    },
                                ],
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        corejs: 3,
                                        useESModules: true,
                                    },
                                ],
                                "@babel/plugin-proposal-optional-chaining",
                                "@babel/plugin-proposal-nullish-coalescing-operator",
                            ],
                        },
                    },
                ],
                exclude: {
                    and: [/node_modules/],
                    not: [],
                },
            },
        ],
    },
});
