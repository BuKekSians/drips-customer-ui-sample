import { useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // Hide bottom navigation on splash, login, and signup pages
  if (path === '/' || path === '/login' || path === '/signup') {
    return null;
  }

  const navItems = [
    { path: '/booking', icon: HomeIcon, label: 'Home' },
    { path: '/confirmation', icon: CalendarIcon, label: 'Bookings' },
    { path: '/profile', icon: UserIcon, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="grid grid-cols-3 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = path === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center space-y-1
                ${isActive ? 'text-drips-gold' : 'text-drips-grey'}`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
