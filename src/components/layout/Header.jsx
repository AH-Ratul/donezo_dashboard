import { useAuth } from "../../context/AuthContext";
import { Search, Mail, Bell } from "lucide-react";

function Header() {
  const { user } = useAuth();

  return (
    <header className="h-20 bg-gray-50 rounded-3xl mx-2 mt-2 flex items-center justify-between p-6 top-0 z-20 shadow-xs">
      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-16 py-3 bg-white rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 focus:ring-brand-500 focus:border-none transition-all"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[10px] font-medium text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5">
          ⌘ F
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 ml-6">
        {/* Mail */}
        <button className="relative p-3 rounded-full bg-white transition-all duration-200 cursor-pointer">
          <Mail className="w-5 h-5 text-gray-500" />
        </button>

        {/* Notifications */}
        <button className="relative p-3 rounded-full bg-white transition-all duration-200 cursor-pointer">
          <Bell className="w-5 h-5 text-gray-500" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
            <span className="text-xl font-semibold text-brand-700">
              {user?.email?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              {user?.email?.split("@")[0] || "User"}
            </p>
            <p className="text-xs text-gray-500 leading-tight">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
