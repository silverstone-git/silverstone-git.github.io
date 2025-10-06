
# Astronomy Themed Portfolio Website

This is a single-page portfolio website built with React, Vite, and Tailwind CSS. It features an astronomy-themed design and a narrative structure to showcase projects and skills. The user interface includes scroll-based animations and effects.

## Features

-   **Design:** A dark, space/astronomy theme with gradients, celestial objects, and a "glassmorphism" effect.
-   **User Experience:** Scroll-based animations and effects.
-   **Content:** The portfolio is structured to guide visitors through the developer's journey, skills, and projects.
-   **Architecture:** A component-based architecture, following the principles of **shadcn/ui**.
-   **Responsiveness:** The website is designed to be responsive across different devices.

## Technology Stack

-   **Core Framework:** [React](https://react.dev/) (v18) with [Vite](https://vitejs.dev/) as the build tool.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) for type-safe code.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
-   **UI Components:**
    -   [Radix UI Primitives](https://www.radix-ui.com/): Headless, accessible components.
    -   [class-variance-authority (CVA)](https://cva.style/docs): For creating variant-based component styles.
    -   [tailwind-merge](https://github.com/dcastil/tailwind-merge) and [clsx](https://github.com/lukeed/clsx): For conditional and clean class name management.
-   **Animation:** [Framer Motion](https://www.framer.com/motion/) for component animations.
-   **Icons:** [Lucide React](https://lucide.dev/) for icons.

## Project Structure

The codebase is organized following standard conventions for a React project.

```
/
├─── src/
│   ├─── components/
│   │   ├─── ui/         # Base UI components (shadcn/ui style)
│   │   ├─── figma/      # Components potentially designed in Figma
│   │   ├─── Footer.tsx
│   │   ├─── Hero.tsx      # The main hero section
│   │   ├─── ProjectCard.tsx # Reusable card for projects
│   │   ├─── StarField.tsx # Animated background component
│   │   └─── StorySection.tsx # Wrapper for narrative sections
│   ├─── styles/
│   │   └─── globals.css # Global styles and Tailwind directives
│   ├─── App.tsx         # Main application component, layout composition
│   ├─── main.tsx        # Application entry point
│   └─── index.css       # Main CSS file with color palette
├─── vite.config.ts      # Vite build and development configuration
└─── package.json        # Project dependencies and scripts
```

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [Bun](https://bun.sh/) (or npm/yarn)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install dependencies
    ```sh
    bun install
    ```
3.  Start the development server
    ```sh
    bun run dev
    ```

The application will be available at `http://localhost:3000`.

## Deployment

The project is deployed using [GitHub Pages](https://pages.github.com/). The `deploy` script in `package.json` handles the build and deployment process.

To deploy the application, run:

```sh
bun run deploy
```

This will build the application and push the contents of the `build` directory to the `gh-pages` branch of your repository.

## Attributions

The celestial objects used in this project are from [Unsplash](https://unsplash.com/). Please see the `src/Attributions.md` file for a complete list of attributions.
