import { useState } from "react";
import {
  Home,
  Users,
  Calendar,
  Menu,
  LogOut,
  Box,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/admin/dashboard" },
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
    { name: "Services", icon: <Box size={20} />, path: "/admin/services" },
    {
      name: "Bookings",
      icon: <Calendar size={20} />,
      path: "/admin/bookings",
    },
    // {
    //   name: "Profile",
    //   icon: <User size={20} />,
    //   path: "/admin/profile",
    // },
  ];

  return (
    <div
      className={`bg-slate-900 text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } min-h-screen flex flex-col`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        {!collapsed && (
          <h1 className="text-xl font-semibold text-teal-400">Admin Panel</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu items */}
      <div className="flex-1 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-teal-400 transition-colors rounded-lg mx-2 gap-2"
              >
                <span className="inline-flex">{item.icon}</span>
                {!collapsed && <span className="ml-4">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar footer */}
      <div className="border-t border-slate-800">
        <a
          href="/logout"
          className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-teal-400 transition-colors rounded-lg gap-2"
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-4">Logout</span>}
        </a>
      </div>
    </div>
  );
}
