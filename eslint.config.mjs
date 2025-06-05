import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals", "next/typescript", "prettier"
    ],
    rules: {
      semi: ["warn"],
      indent: ["warn", 2],
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
      "no-mixed-spaces-and-tabs": "warn",
    }
  }),
];

export default eslintConfig;
