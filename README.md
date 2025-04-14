# ABC Lighting Company Customer Service Bot

A React-based customer service chatbot that provides information about ABC Lighting Corp's solar lighting products, business hours, and locations.

# DEMO LIVE <https://text-anything.vercel.app/>
## Features

- 🤖 Interactive chat interface
- 🏪 Business hours and location information
- 🔍 Detailed product information for:
  - SolarMax Pro Street Light
  - PathBrite Solar Driveway Light
  - LumiWall Solar Security Light
- 📸 Product image previews
- 📝 Contact information collection
- 💅 Responsive design with Tailwind CSS
- 🎨 Modern UI with Lucide React icons

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   └── ChatBot.tsx      # Main chatbot component
│   ├── data/
│   │   └── companyData.ts   # Company and product information
│   ├── App.tsx              # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)
