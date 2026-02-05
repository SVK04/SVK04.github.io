import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import next from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
    {
        ignores: ["node_modules/", ".next/", "out/", "dist/"],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            "@next/next": next,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            /* Next.js */
            ...next.configs.recommended.rules,
            ...next.configs["core-web-vitals"].rules,

            /* React */
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,

            /* Accessibility */
            ...jsxA11y.configs.recommended.rules,

            /* Overrides */
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",

            /* TS-friendly unused vars */
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],

            "react-hooks/set-state-in-effect": "off",

            /* Your R3F exceptions */
            "react/no-unknown-property": [
                "error",
                {
                    ignore: [
                        "intensity",
                        "position",
                        "rotation",
                        "roughness",
                        "metalness",
                        "args",
                        "attach",
                        "object",
                        "transparent",
                        "castShadow",
                        "receiveShadow",
                        "geometry",
                        "material",
                        "color",
                        "angle",
                        "penumbra",
                        "decay",
                        "map",
                        "emissive",
                        "side",
                        "flatShading",
                        "name",
                        "lineWidth",
                        "depthWrite",
                        "vertexColors",
                        "size",
                        "sizeAttenuation",
                        "envMapIntensity",
                        "position-y",
                        "rotation-y",
                        "shadow-mapSize",
                        "groundColor",
                        "polygonOffset",
                        "polygonOffsetFactor",
                    ],
                },
            ],
        },
    },
];
