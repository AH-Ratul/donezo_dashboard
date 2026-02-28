import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

function OverviewProgress({ overview }) {
  const totalUsers = overview?.totalUsers || 0;
  const activeUsers = overview?.activeUsers || 0;
  const inactiveUsers = totalUsers - activeUsers;
  const activePercent = totalUsers
    ? Math.round((activeUsers / totalUsers) * 100)
    : 0;
  const inactivePercent = 100 - activePercent;

  const data = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        data: [activePercent, inactivePercent],
        backgroundColor: ["#166534", "#ef4444"],
        borderWidth: 0,
        cutout: "72%",
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
        padding: 8,
        bodyFont: { size: 12, weight: "600" },
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
  };

  const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = "bold 28px Inter, sans-serif";
      ctx.fillStyle = "#111827";
      ctx.fillText(`${activePercent}%`, centerX, centerY - 8);

      ctx.font = "400 11px Inter, sans-serif";
      ctx.fillStyle = "#6b7280";
      ctx.fillText("Active Users", centerX, centerY + 14);

      ctx.restore();
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm shadow-gray-100/50 h-full flex flex-col hover-lift">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Overview</h3>

      <div className="h-44 flex items-center justify-center">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-5 mt-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-800" />
          <span className="text-xs text-gray-500">
            Active ({activeUsers.toLocaleString()})
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="text-xs text-gray-500">
            Inactive ({inactiveUsers.toLocaleString()})
          </span>
        </div>
      </div>
    </div>
  );
}

export default OverviewProgress;
