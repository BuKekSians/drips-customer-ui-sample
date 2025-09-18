import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { servicePackages } from '../utils/dummyData';
import { ServicePackage } from '../types';

const BookingPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [specialRequests, setSpecialRequests] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !selectedPackage) {
      alert('Please fill in all required fields');
      return;
    }
    setShowConfirmModal(true);
  };

  const confirmBooking = () => {
    // TODO: Implement actual booking logic
    navigate('/confirmation', {
      state: {
        date: selectedDate,
        time: selectedTime,
        package: selectedPackage,
        specialRequests,
      }
    });
  };

  return (
    <div className="min-h-screen bg-drips-white pb-20">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-drips-black mb-6">Book a Service</h1>

        {/* Date & Time Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Select Date & Time</h2>
          <div className="mb-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              placeholderText="Select date"
              className="input-field w-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-lg text-sm ${
                  selectedTime === time
                    ? 'bg-drips-gold text-drips-black'
                    : 'bg-gray-100 text-drips-grey'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Choose Package</h2>
          <div className="space-y-4">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`card cursor-pointer transition-all ${
                  selectedPackage?.id === pkg.id
                    ? 'border-2 border-drips-gold'
                    : 'border border-gray-200'
                }`}
              >
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4">
                    {/* Placeholder for package image */}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-drips-black">{pkg.name}</h3>
                    <p className="text-sm text-drips-grey mb-2">{pkg.description}</p>
                    <p className="text-drips-gold font-semibold">
                      Rp {pkg.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Includes:</h4>
                  <ul className="text-sm text-drips-grey">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Requests */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Special Requests</h2>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests or notes?"
            className="input-field min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="btn-primary w-full"
        >
          Book Now
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>
            <div className="mb-4">
              <p className="text-drips-grey mb-2">
                Date: {selectedDate?.toLocaleDateString()}
              </p>
              <p className="text-drips-grey mb-2">
                Time: {selectedTime}
              </p>
              <p className="text-drips-grey mb-2">
                Package: {selectedPackage?.name}
              </p>
              <p className="text-drips-gold font-semibold">
                Total: Rp {selectedPackage?.price.toLocaleString()}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="btn-primary flex-1"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
