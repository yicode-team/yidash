import path from "path";
import fg from "fast-glob";
import TerserPlugin from "terser-webpack-plugin";

export default {
    mode: "production",
    devtool: "source-map",
    entry: () => {
        let files = fg.sync("**/*.mjs", {
            cwd: path.resolve("./lib"),
            dot: false,
            absolute: true,
            objectMode: false,
            onlyDirectories: false,
            onlyFiles: true,
        });
        let fileObject = {};
        files.forEach((file) => {
            let fromPath = path.relative(path.resolve("./lib"), file).replace(".mjs", "");
            fileObject[fromPath] = file;
        });
        return fileObject;
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].es.js",
        library: {
            type: "module",
        },
    },

    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    module: true,
                    toplevel: true,
                },
            }),
        ],
    },
    experiments: {
        outputModule: true,
    },
};
