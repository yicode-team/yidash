"use strict";

module.exports = {
    plugins: ["node_modules/better-docs/category"],
    recurseDepth: 10,
    package: "package.json",
    readme: "readme.md",
    templates: {
        default: {
            staticFiles: {
                include: ["jsdoc"],
            },
            // layoutFile: "jsdoc/layout.tmpl",
        },
        "better-docs": {
            name: "yidash(易大师)",
            title: "yidash(易大师)",
            hideGenerator: false,
            outputSourceFiles: false,
            css: "other/jsdoc.custom.css",
            navLinks: [
                {
                    label: "Github",
                    href: "https://github.com/chenbimo/yidash.git",
                },
            ],
        },
    },
    opts: {
        encoding: "utf8",
        destination: "docs/",
        readme: "readme.md",
        recurse: true,
        verbose: true,
        // tutorials: "./docs-src/tutorials",
        template: "better-docs",
    },
    source: {
        include: ["./lib"],
        exclude: [],
        includePattern: ".+\\.js(doc|x)?$",
        excludePattern: "(^|\\/|\\\\)_",
    },
    sourceType: "module",
    tags: {
        allowUnknownTags: true,
        dictionaries: ["jsdoc", "closure"],
    },
};
