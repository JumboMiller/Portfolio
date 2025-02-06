import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: { "simple-import-sort": simpleImportSort },
    rules: {
      "react-hooks/rules-of-hooks": "error", 
      "react-hooks/exhaustive-deps": "warn", 
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-console": "warn", 
      "no-debugger": "error", 
      "quotes": ["error", "double"], 
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    }
  },
];


export default eslintConfig;
