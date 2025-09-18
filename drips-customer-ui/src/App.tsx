import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import BottomNavigation from './components/BottomNavigation';

// Lazy load pages for better performance
const SplashPage = lazy(() => import('./pages/SplashPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ConfirmationPage = lazy(() => import('./pages/ConfirmationPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-drips-white max-w-md mx-auto relative pt-safe-top pb-[calc(4rem+env(safe-area-inset-bottom))]">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-drips-gold"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Suspense>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;