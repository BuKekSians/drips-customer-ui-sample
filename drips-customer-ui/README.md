# Drips Indonesia - Customer UI

A mobile-first React web application for booking car wash services through Drips Indonesia.

## Features

- 📱 Mobile-first responsive design
- 🎨 Modern UI with custom theme (black, grey, gold, white, golden brown)
- 🔐 User authentication (signup/login)
- 📅 Service booking with date/time selection
- 💫 Multiple service packages
- 📝 Special requests handling
- 👤 User profile management
- 📱 Bottom navigation for easy access
- 🔄 Real-time form validation
- ✨ Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drips-customer-ui.git
   ```

2. Navigate to the project directory:
   ```bash
   cd drips-customer-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── types/            # TypeScript type definitions
├── utils/            # Utility functions and dummy data
├── assets/           # Images and other static assets
└── hooks/            # Custom React hooks
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- React DatePicker
- Heroicons
- Headless UI

## Design Decisions

- Used Tailwind CSS for rapid development and consistent styling
- Implemented mobile-first approach for better user experience on small devices
- Used React Router for seamless navigation
- Implemented lazy loading for better initial load performance
- Created reusable components for consistency and maintainability

## Future Improvements

- Add authentication with backend integration
- Implement real-time booking status updates
- Add push notifications for booking reminders
- Integrate payment gateway
- Add service location selection
- Implement booking cancellation feature
- Add user reviews and ratings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.