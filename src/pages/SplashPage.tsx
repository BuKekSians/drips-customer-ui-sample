import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SplashPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Add animation delay
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-drips-black p-6">
      {/* Logo */}
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-48 h-48 mb-8 relative">
          <img 
            src="/drips_logo_pure.png" 
            alt="Drips Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Welcome Message */}
      <div className={`text-center transition-all duration-1000 delay-300 transform 
        ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <h1 className="text-drips-gold text-3xl font-bold mb-4">Welcome to Drips</h1>
        <p className="text-drips-white text-lg mb-12">Your premium car care solution</p>
      </div>

      {/* Action Buttons */}
      <div className={`space-y-4 w-full max-w-xs transition-all duration-1000 delay-500 transform 
        ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <button
          onClick={() => navigate('/login')}
          className="btn-primary w-full"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="btn-secondary w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SplashPage;
