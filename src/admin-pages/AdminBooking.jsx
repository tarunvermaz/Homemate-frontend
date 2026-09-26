import { useEffect, useState } from "react";
import Sidebar from "../componants/Sidebar";
import Axios from "../useHooks/useAxios";

const AdminBooking = () => {
  const [bookings, setBookings] = useState([]);
  const getBookings = async () => {
    try {
      const response = await Axios.get("/booking");
      console.log(response.data);

      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  };
  const handleDelete = async (id) => {
    try {
      await Axios.delete(`/booking/${id}`);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking._id !== id)
      );
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-slate-900">
                    Service Management
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600">
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t text-sm text-gray-700">
                  <td className="py-3 px-4">{booking._id}</td>
                  <td className="py-3 px-4">{booking.userId.username}</td>
                  <td className="py-3 px-4">{booking.contact}</td>
                  <td className="py-3 px-4">{booking.serviceId.name}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td className="py-3 px-4">{booking.serviceLocation}</td>
                  <td className="py-3 px-4 text-center space-x-2">
                    {/* <button className="text-teal-600 hover:underline text-sm">
                      View
                    </button> */}
                    <button
                      className="text-red-600 hover:underline text-sm"
                      onClick={() => handleDelete(booking._id)}
                    >
                      Delete
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

export default AdminBooking;
