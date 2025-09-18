import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyUser, dummyBookings } from '../utils/dummyData';
import Input from '../components/Input';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(dummyUser);
  const [formData, setFormData] = useState({
    name: dummyUser.name,
    email: dummyUser.email,
    phone: dummyUser.phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(prev => ({ ...prev, ...formData }));
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-drips-white pb-20">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-drips-black">Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-drips-gold font-semibold"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {/* Profile Information */}
        <div className="card mb-8">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <button type="submit" className="btn-primary w-full mt-4">
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-drips-grey">Full Name</label>
                <p className="font-medium">{userData.name}</p>
              </div>
              <div>
                <label className="text-sm text-drips-grey">Email</label>
                <p className="font-medium">{userData.email}</p>
              </div>
              <div>
                <label className="text-sm text-drips-grey">Phone Number</label>
                <p className="font-medium">{userData.phone}</p>
              </div>
            </div>
          )}
        </div>

        {/* Booking History */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Booking History</h2>
          <div className="space-y-4">
            {dummyBookings.map((booking) => (
              <div key={booking.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">
                      {new Date(booking.date).toLocaleDateString()}
                    </h3>
                    <p className="text-sm text-drips-grey">{booking.time}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                      ${getStatusColor(booking.status)}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-drips-grey">
                    Premium Wash
                  </span>
                  <span className="font-medium">
                    Rp {booking.totalPrice.toLocaleString()}
                  </span>
                </div>
                {booking.specialRequests && (
                  <p className="text-sm text-drips-grey mt-2">
                    Note: {booking.specialRequests}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/')}
          className="btn-secondary w-full mt-8"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
