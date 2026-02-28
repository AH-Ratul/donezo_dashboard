import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function AnalyticsChart({ analytics }) {
  // Map actual analytics dates to short labels
  const labels = (analytics || []).map((item) => {
    const date = new Date(item.date);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  });

  const views = (analytics || []).map((item) => item.views);
  const clicks = (analytics || []).map((item) => item.clicks);
  const conversions = (analytics || []).map((item) => item.conversions);

  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: views,
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;
          if (!chartArea) return "#166534";
          const gradient = canvasCtx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top,
          );
          gradient.addColorStop(0, "#166534");
          gradient.addColorStop(1, "#22c55e");
          return gradient;
        },
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
      {
        label: "Clicks",
        data: clicks,
        backgroundColor: "#eab308",
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
      {
        label: "Conversions",
        data: conversions,
        backgroundColor: "#ef4444",
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#1f2937",
        cornerRadius: 8,
        padding: 10,
        bodyFont: { size: 12, weight: "600" },
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 16,
          font: { size: 11, weight: "500" },
          color: "#6b7280",
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#9ca3af",
          font: { size: 12, weight: "500" },
        },
      },
      y: {
        grid: { color: "#f3f4f6" },
        border: { display: false },
        beginAtZero: true,
        ticks: {
          color: "#9ca3af",
          font: { size: 11 },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm shadow-gray-100/50 h-full flex flex-col hover-lift">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Analytics</h3>
        <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1">
          {analytics?.length || 0} days
        </span>
      </div>
      <div className="h-48 flex-1">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default AnalyticsChart;
