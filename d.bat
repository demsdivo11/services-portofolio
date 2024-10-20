@echo off
mkdir node_modules
mkdir src
mkdir src\components

type NUL > eslint.config.js
type NUL > package-lock.json
type NUL > tsconfig.json
type NUL > index.html
type NUL > package.json
type NUL > tailwind.config.js
type NUL > tsconfig.node.json
type NUL > postcss.config.js
type NUL > tsconfig.app.json
type NUL > vite.config.ts

type NUL > src\App.tsx
type NUL > src\index.css
type NUL > src\main.tsx
type NUL > src\vite-env.d.ts

type NUL > src\components\Contact.tsx
type NUL > src\components\Home.tsx
type NUL > src\components\TermsAndConditions.tsx
type NUL > src\components\Footer.tsx
type NUL > src\components\Navbar.tsx

echo Files and directories created successfully!
