import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import MobileAppPromo from "./MobileAppPromo";
import {
  LayoutDashboard,
  Package,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  CheckCircle,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Package, label: "Products", path: "/products", badge: "4" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "Users", path: "/users", badge: "5" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
];

const generalItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 bg-gray-50 rounded-3xl m-2 h-screen flex flex-col fixed left-0 top-0 z-30 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 py-6">
        <div className="w-9 h-9 bg-brand-800 rounded-xl flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">
          Donezo
        </span>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 px-4 mt-2 mb-6 overflow-y-auto">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
          Menu
        </p>
        <ul className="space-y-0.5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <button
                  onClick={() =>
                    item.path === "/dashboard" && navigate(item.path)
                  }
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer group ${
                    isActive
                      ? "bg-brand-800 text-white shadow-sm shadow-brand-900/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="w-4.5 h-4.5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-brand-100 text-brand-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* General Section */}
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mt-7 mb-2">
          General
        </p>
        <ul className="space-y-0.5">
          {generalItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 cursor-pointer">
                <item.icon className="w-4.5 h-4.5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer"
            >
              <LogOut className="w-4.5 h-4.5" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile App Promo */}
      <div className="px-4 pb-4">
        <MobileAppPromo />
      </div>
    </aside>
  );
}

export default Sidebar;
