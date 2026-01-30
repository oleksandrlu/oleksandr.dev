# Oleksandr.dev - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Performance**: Optimized for speed and SEO
- **Type Safety**: Full TypeScript support with strict mode
- **Styling**: Tailwind CSS v4 for modern, utility-first styling

## 📁 Project Structure

```
oleksandr-dev/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Capabilities.tsx
│   │   ├── Divider.tsx
│   │   ├── DualImage.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   └── Testimonials.tsx
│   ├── constants/        # Shared constants and configuration
│   │   └── index.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   └── utils/            # Utility functions
│       └── index.ts
├── public/               # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd oleksandr-dev
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 🎨 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: Custom React components

## 📝 Code Style

- TypeScript strict mode enabled
- ESLint configured with Next.js recommended rules
- Components follow React best practices
- Consistent naming conventions (PascalCase for components)

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue.

## 📄 License

Private project - All rights reserved

## 👤 Author

**Oleksandr**
- Email: oleksandr.lu11@gmail.com
- Location: Dnipro, UA

---

Built with ❤️ using Next.js
