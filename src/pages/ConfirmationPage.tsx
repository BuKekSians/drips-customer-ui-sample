import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { dummyBookings } from '../utils/dummyData';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || dummyBookings[0];

  return (
    <div className="min-h-screen bg-drips-white p-6">
      <div className="max-w-sm mx-auto">
        {/* Success Animation */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircleIcon className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-drips-black mb-2">Booking Confirmed!</h1>
          <p className="text-drips-grey text-center">
            Your car wash appointment has been successfully scheduled
          </p>
        </div>

        {/* Booking Details */}
        <div className="card mb-6">
          <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-drips-grey">Date</span>
              <span className="font-medium">
                {new Date(bookingData.date).toLocaleDateString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-drips-grey">Time</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-drips-grey">Service</span>
              <span className="font-medium">
                {bookingData.package?.name || 'Premium Wash'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-drips-grey">Amount</span>
              <span className="font-medium text-drips-gold">
                Rp {bookingData.totalPrice?.toLocaleString() || '250,000'}
              </span>
            </div>

            {bookingData.specialRequests && (
              <div className="pt-4 border-t">
                <p className="text-sm text-drips-grey mb-2">Special Requests:</p>
                <p className="text-sm">{bookingData.specialRequests}</p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="card mb-8">
          <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-drips-gold text-drips-black flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <p className="text-sm">We'll send a confirmation email with your booking details</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-drips-gold text-drips-black flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <p className="text-sm">Our team will arrive at the scheduled time</p>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 rounded-full bg-drips-gold text-drips-black flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <p className="text-sm">Payment will be collected after service completion</p>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate('/booking')}
            className="btn-primary w-full"
          >
            Book Another Service
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="btn-secondary w-full"
          >
            View Booking History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
