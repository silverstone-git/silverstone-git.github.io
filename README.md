# Astronomy Themed Portfolio Website

This is a stunning, single-page portfolio website with a captivating astronomy theme. Built with React, Vite, and Tailwind CSS, it showcases projects and skills in a narrative-driven, visually rich experience. The UI is dynamic and interactive, with animations and effects that respond to user scrolling.

## Features

-   **Visually Rich Design:** A dark, space/astronomy theme with beautiful gradients, celestial objects, and a "glassmorphism" effect.
-   **Interactive Experience:** Animations and effects that respond to user scrolling, creating a dynamic and engaging journey.
-   **Narrative-Driven Content:** The portfolio is structured as a story, guiding visitors through the developer's journey, skills, and projects.
-   **Component-Based Architecture:** Built with a clean and maintainable component-based architecture, following the principles of **shadcn/ui**.
-   **Responsive Design:** The website is fully responsive and looks great on all devices.

## Technology Stack

-   **Core Framework:** [React](https://react.dev/) (v18) with [Vite](https://vitejs.dev/) as the build tool.
-   **Language:** [TypeScript](https://www.typescriptlang.org/) for type-safe code.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
-   **UI Components:**
    -   [Radix UI Primitives](https://www.radix-ui.com/): Headless, accessible components.
    -   [class-variance-authority (CVA)](https://cva.style/docs): For creating variant-based component styles.
    -   [tailwind-merge](https://github.com/dcastil/tailwind-merge) and [clsx](https://github.com/lukeed/clsx): For conditional and clean class name management.
-   **Animation:** [Framer Motion](https://www.framer.com/motion/) for component animations.
-   **Icons:** [Lucide React](https://lucide.dev/) for a beautiful and consistent icon set.

## Project Structure

The codebase is well-organized, following standard conventions for a React project.

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

To get a local copy up and running, follow these simple steps.

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

The beautiful celestial objects used in this project are from [Unsplash](https://unsplash.com/). A big thank you to the talented photographers who made their work available. Please see the `src/Attributions.md` file for a complete list of attributions.

---

*This README was generated with the help of the Gemini CLI.*