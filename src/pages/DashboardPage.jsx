import { Plus, Upload } from "lucide-react";
import Layout from "../components/layout/Layout";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RemindersCard from "../components/dashboard/RemindersCard";
import ProductList from "../components/dashboard/ProductList";
import UsersList from "../components/dashboard/UsersList";
import OverviewProgress from "../components/dashboard/OverviewProgress";
import TimeTracker from "../components/dashboard/TimeTracker";
import { useFetch } from "../hooks/useFetch";
import { getDashboardData } from "../services/api";
import Loader from "../components/common/Loader";

function DashboardPage() {
  const { data, loading, error } = useFetch(getDashboardData);

  if (loading) {
    return (
      <Layout>
        <div className="flex-1 flex items-center justify-center h-[80vh]">
          <Loader size="lg" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex-1 flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <p className="text-red-500 text-lg font-medium mb-2">
              Failed to load dashboard
            </p>
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
        </div>
      </Layout>
    );
  }

  const { overview, users, analytics, products } = data || {};

  return (
    <Layout>
      {/* Page Header */}
      <div className="animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Overview of users, products, and analytics data.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer">
              <Plus className="w-4 h-4" />
              Add Product
            </button>
            <button className="inline-flex items-center gap-2 border border-brand-700 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer hover:border-gray-300">
              <Upload className="w-4 h-4" />
              Import Data
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="animate-fade-in-up stagger-2">
        <StatsCards overview={overview} />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5 animate-fade-in-up stagger-4">
        {/* LEFT SIDE */}
        <div className="lg:col-span-9 space-y-5">
          {/* Top Left Row: Analytics + Reminders */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
            <div className="lg:col-span-5">
              <AnalyticsChart analytics={analytics} />
            </div>

            <div className="lg:col-span-3">
              <RemindersCard />
            </div>
          </div>

          {/* Bottom Left Row: Users + Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
            <div className="lg:col-span-5">
              <UsersList users={users} />
            </div>

            <div className="lg:col-span-3">
              <OverviewProgress overview={overview} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (ProductList + TimeTracker stacked) */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          <ProductList products={products} />
          <TimeTracker />
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage;
