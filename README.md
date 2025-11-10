# Project Task Management

A modern, Notion-inspired task management web application built with Next.js, TypeScript, and Shadcn/UI.

## Description

This is a feature-rich frontend application designed for team and personal task management. It provides a seamless and intuitive user experience with features like team-specific and personal dashboards, real-time chat simulation, file sharing, graphical progress visualization, and extensive user customization options.

## Features

-   **Task Management:** A Kanban-style board with drag-and-drop functionality for managing personal and team tasks across columns like "To Do", "In Progress", and "Done".
-   **Team Collaboration:** Create teams, invite members (with limitations), and collaborate in dedicated team spaces.
-   **Analytics Dashboard:** Visualize personal productivity and team progress with interactive charts. Includes weekly progress, daily streaks, team success rates, and individual performance metrics.
-   **Team Chat:** A simulated real-time chat for each team, featuring text messages and file sharing (up to 5MB) with local download capability.
-   **Customization:** Personalize your experience with a theme switcher (light/dark mode) and multi-language support (English/Persian).
-   **Modern UI/UX:** A sleek, creative, and Notion-inspired interface built with **Shadcn/UI**, **Tailwind CSS**, and **Framer Motion**.
-   **Responsive Design:** Fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Drag & Drop:** [dnd-kit](https://dndkit.com/)
-   **Charts:** [Recharts](https://recharts.org/)
-   **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/hjali7/team-app-ui
    ```
2.  Navigate to the project directory:
    ```bash
    cd team-app-ui
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a feature-based structure within the `src` directory:

```
src
├── app                 # Next.js App Router pages with internationalization
├── components          # Reusable components (UI, layout, etc.)
├── constants           # Mock data and constants
├── hooks               # Custom React hooks
├── lib                 # Utility functions and API simulation
├── styles              # Global styles
└── proxy.ts            # Handles internationalization redirects
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
