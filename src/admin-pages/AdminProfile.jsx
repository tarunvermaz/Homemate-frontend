import { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Briefcase,
  Edit,
  Camera,
  Save,
} from "lucide-react";
import Sidebar from "../componants/Sidebar";

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinedDate: "May 2024",
    bio: "Product designer and developer with 5+ years of experience in creating user-centered digital experiences.",
    occupation: "Senior Product Designer",
    company: "Design Tech Solutions",
  });

  const [formData, setFormData] = useState({ ...profileData });

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setProfileData({ ...formData });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-slate-900 h-32 relative">
              <button className="absolute right-4 top-4 bg-slate-900 hover:bg-slate-900 text-white p-2 rounded-full">
                <Edit size={16} />
              </button>
            </div>

            {/* Profile Avatar */}
            <div className="flex justify-center -mt-16">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center overflow-hidden">
                  <User size={64} className="text-white" />
                </div>
                <button className="absolute bottom-0 right-0 bg-slate-900 hover:bg-slate-900 text-white p-2 rounded-full">
                  <Camera size={16} />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                  {profileData.name}
                </h1>
                <button
                  onClick={handleEditToggle}
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    isEditing
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-slate-900 hover:bg-slate-900 text-white"
                  }`}
                >
                  {isEditing ? (
                    <>
                      <Save size={16} className="mr-2" />
                      Save Profile
                    </>
                  ) : (
                    <>
                      <Edit size={16} className="mr-2" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-slate-900 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm font-medium">
                          {profileData.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-slate-900 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Joined</p>
                        <p className="text-sm font-medium">
                          {profileData.joinedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-slate-900 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-medium">
                          {profileData.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-slate-900 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Occupation</p>
                        <p className="text-sm font-medium">
                          {profileData.occupation} at {profileData.company}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-700 mb-2">
                      About
                    </h3>
                    <p className="text-sm text-gray-600">{profileData.bio}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Stats */}
            <div className="border-t border-gray-200">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="text-xs text-gray-500">Bookings</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">5</p>
                  <p className="text-xs text-gray-500">Reviews</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">8</p>
                  <p className="text-xs text-gray-500">Services Used</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      Booked Website Development
                    </p>
                    <p className="text-xs text-gray-500">May 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      Updated profile information
                    </p>
                    <p className="text-xs text-gray-500">May 12, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      Completed Logo Design Service
                    </p>
                    <p className="text-xs text-gray-500">May 8, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
