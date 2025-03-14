# Cosmic Teams

A galaxy-themed website with authentication built using Next.js and Firebase.

## Features

- Visually stunning galaxy-themed design
- User authentication (login/register)
- Responsive design for all devices
- Firebase integration for authentication and database

## Prerequisites

- Node.js 16.x or later
- npm or yarn
- Firebase account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cosmicteams.git
cd cosmicteams
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up Firebase:
   - Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password sign-in method
   - Create a Firestore database
   - Get your Firebase configuration in Project Settings > General > Your apps
   - Create a `.env.local` file in the root directory based on `.env.local.example` and add your Firebase configuration

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Contains the Next.js App Router pages
- `src/components`: React components
- `src/lib`: Utility functions and Firebase configuration
- `src/styles`: Global styles and CSS modules
- `public/images`: Static images

## Technologies Used

- Next.js
- React
- TypeScript
- Firebase Authentication
- Firestore
- Tailwind CSS

## License

MIT 