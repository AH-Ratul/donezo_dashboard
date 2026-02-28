import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/auth/LoginForm";
import { CheckCircle } from "lucide-react";

function LoginPage() {
  const { isAuthenticated, loading } = useAuth();

  // If already logged in, redirect to dashboard
  if (!loading && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-brand-800 via-brand-700 to-brand-900 relative overflow-hidden animate-slide-in-left">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-brand-400/15 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl" />

        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Donezo
            </span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Monitor your
            <br />
            <span className="text-brand-200">data</span> with ease
          </h1>
          <p className="text-brand-100/80 text-lg max-w-md leading-relaxed">
            Track users, products, and analytics in one place. Get real-time
            insights and make data-driven decisions.
          </p>

          {/* Feature highlights */}
          <div className="mt-10 space-y-4">
            {[
              "Real-time analytics & insights",
              "User & product management",
              "Revenue & growth tracking",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-400/30 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-brand-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-brand-100/90 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50 animate-slide-in-right">
        <div className="w-full max-w-md">
          {/* Mobile Logo (visible on small screens) */}
          <div className="flex items-center gap-2.5 mb-8 lg:hidden">
            <div className="w-10 h-10 bg-brand-800 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Donezo
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1.5">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-gray-500">
            Demo credentials:{" "}
            <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
              user1@example.com
            </span>{" "}
            /{" "}
            <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
              password123
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
