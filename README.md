# Weekilaw Frontend - React Application

This is a React application converted from the original HTML/CSS/JS website. All UI, layout, styling, and behavior have been preserved exactly as in the original site.

## Project Structure

```
weekilaw_frontend/
├── public/
│   ├── assets/          # All original CSS, JS, and image files
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components
│   │   ├── CookieConsent.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AreasOfLaw.jsx
│   │   ├── HelpSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── index.jsx        # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Installation

1. Navigate to the weekilaw_frontend directory:
```bash
cd weekilaw_frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

Create a production build:
```bash
npm run build
```

The build folder will contain the optimized production build.

## Features

- **Preserved Styling**: All original CSS files are preserved and linked in `public/index.html`
- **React Components**: The HTML structure has been converted to reusable React components
- **Functional Components**: All components use React functional components with hooks
- **Cookie Consent**: Interactive cookie consent modal with React state management
- **Original Assets**: All images, CSS, and JavaScript files from the original site are preserved in `public/assets/`

## Component Structure

- **App.jsx**: Main application component that renders all sections
- **Header.jsx**: Site header and navigation
- **MainContent.jsx**: Main content with hero section and chat input
- **Footer.jsx**: Site footer with all links, logo, and social media icons

## Notes

- All original CSS files are preserved in `public/assets/` and linked in `index.html`
- Image paths use `/assets/` for proper asset resolution (Vite handles this automatically)
- All original JavaScript functionality has been converted to React hooks and event handlers
- Built with Vite for fast development and optimized production builds

## Original Files

The original HTML file and all assets are preserved in the parent directory:
- `Free AI Legal Chat, Answers & Help 24_7 in the U.S. _ LawConnect.html`
- `Free AI Legal Chat, Answers & Help 24_7 in the U.S. _ LawConnect_files/`


