import { useAuth } from "../../context/AuthContext";
import { AlertTriangle, X } from "lucide-react";

function SessionWarning() {
  const { sessionWarning, dismissWarning, logout } = useAuth();

  if (!sessionWarning) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2.5 flex items-center justify-between gap-3 animate-fade-in-up">
      <div className="flex items-center gap-2 text-yellow-800 text-sm">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>
          Your session is about to expire.{" "}
          <button
            onClick={logout}
            className="font-semibold underline hover:text-yellow-900 cursor-pointer"
          >
            Sign in again
          </button>{" "}
          to continue working.
        </span>
      </div>
      <button
        onClick={dismissWarning}
        className="text-yellow-600 hover:text-yellow-800 p-1 rounded hover:bg-yellow-100 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default SessionWarning;
