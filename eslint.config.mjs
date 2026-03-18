import { FlatCompat } from "@eslint/eslintrc";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
// 👇 Flat Config plugin imports
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Legacy config compatibility
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:@typescript-eslint/recommended"),

  // Your custom rules
  {
    // The ignore block must come before anything that would apply rules to those files
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/build/**",
      "**/dist/**",
      "**/coverage/**",
      "**/*.config.js", // avoid accidentally linting legacy config files
      "**/*.config.cjs",
      "**/*.config.mjs",
      "**/eslint.config.mjs", // avoid self-linting
      "**/.*.js", // ignore dotfiles like .eslintrc.js or .prettierrc.js
    ],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": tsPlugin,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_", // Variablen die mit "_" anfangen, werden ignoriert
          varsIgnorePattern: "^_", // auch für ungenutzte Variablen
          caughtErrorsIgnorePattern: "^_", // auch für try/catch Errors
        },
      ],
    },
    files: ["**/*.{js,ts,jsx,tsx}"], // apply rules to all relevant files
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            ["^(@|components)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      "no-console": [
        2,
        {
          allow: ["warn", "error"],
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn"],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      // New rule to mark relative imports as warnings
      "no-restricted-imports": [
        "warn",
        {
          patterns: [
            {
              group: ["./*", "../*"],
              message:
                "Relative imports are discouraged. Please use absolute imports for modules within the project (e.g., using '@/` alias).",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
