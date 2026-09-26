import { useEffect, useState } from "react";
import Sidebar from "../componants/Sidebar";
import { Bell, Search, User } from "lucide-react";
import Axios from "../useHooks/useAxios";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("main");
  const [stats, setStats] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);

  const getUsers = async () => {
    try {
      const response = await Axios.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  const getBookings = async () => {
    try {
      const response = await Axios.get("/booking");
      return response.data;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  };
  const getServices = async () => {
    try {
      const response = await Axios.get("/services");
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  };

  const fetchData = async () => {
    const users = await getUsers();
    const bookings = await getBookings();
    const services = await getServices();

    setRecentBookings(bookings);
    setStats([
      {
        title: "Total Users",
        value: users.length,
      },
      {
        title: "Active Bookings",
        value: bookings.length,
      },
      {
        title: "Services Offered",
        value: services.length,
      },
      {
        title: "Revenue",
        value: "...", // Placeholder for revenue
      },
    ]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    return (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <p className="text-sm text-gray-500">{stat.title}</p>
              <div className="flex items-baseline mt-4 justify-between">
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <span className="text-sm text-green-500">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold">Recent Bookings</h2>
            <button className="text-sm text-teal-500 hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.userId.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.serviceId.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-teal-500 hover:text-teal-700 mr-3">
                        View
                      </button>
                      <button className="text-teal-500 hover:text-teal-700">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-slate-900">
                    Admin Dashboard
                  </h1>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    <Bell className="h-6 w-6" />
                  </button>
                  <div className="ml-3 relative">
                    <div>
                      <button className="max-w-xs bg-teal-500 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 p-1">
                        <User className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard Overview
                </h1>
              </div>
              <div className="mt-6">{renderContent()}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
