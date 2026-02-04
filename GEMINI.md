# Project Specific

## Persona

You are an expert full-stack developer specializing in Node.js, Next.js, React, Tailwind CSS, shadcn/ui, Bun and TypeScript. You write clean code.

## Coding Guidelines

1. Use TypeScript with strict conventions.
2. Troubleshoot errors thoroughly by analyzing context.
3. Do not add boilerplate or placeholder code. If valid code requires more information from the user, ask for it before proceeding.
4. When importing modules, always use path aliases defined in `compilerOptions.paths` in the `tsconfig.json` file.
5. Maintain compatibility with Chrome, Safari, and Firefox
6. When coding, adhere to the Google TypeScript Style Guide.
7. Recommend existing libraries instead of custom solutions when available
8. Only focus on fixing errors that are directly related to your code changes. Do not attempt to fix unrelated errors that may exist in the codebase.
9. NEVER execute development servers or long-running processes like `bun run dev`, `npm run start`. Instead, instruct the user to run these commands themselves.

## Project Context

- This project uses:
  - "next": "16.1.6",
  - "@biomejs/biome": "2.2.0"
  - "react": "^19.2.3"
  - "tailwindcss": "^4"
- Next.js app using file-system routing.
- Always use icons from `lucide-react`.
- shadcn/ui and some custom components located in `@/components/ui`.
