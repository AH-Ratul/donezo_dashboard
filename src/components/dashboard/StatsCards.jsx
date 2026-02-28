import {
  ArrowUpRight,
  Users,
  UserCheck,
  DollarSign,
  TrendingUp,
} from "lucide-react";

function StatsCards({ overview }) {
  const cards = [
    {
      label: "Total Users",
      value: overview?.totalUsers ?? 0,
      icon: Users,
      note: "All registered users",
      variant: "primary",
    },
    {
      label: "Active Users",
      value: overview?.activeUsers ?? 0,
      icon: UserCheck,
      note: "Currently active",
      variant: "default",
    },
    {
      label: "Revenue",
      value: overview?.revenue ?? 0,
      icon: DollarSign,
      note: "Total revenue earned",
      variant: "default",
    },
    {
      label: "Growth",
      value: overview?.growth ?? 0,
      icon: TrendingUp,
      note: "Percentage increase",
      variant: "default",
      suffix: "%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => {
        const isPrimary = card.variant === "primary";
        const Icon = card.icon;
        return (
          <div
            key={i}
            className={`relative rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover-lift animate-fade-in-up stagger-${i + 1} ${
              isPrimary
                ? "bg-brand-800 text-white shadow-sm shadow-brand-900/20"
                : "bg-white border border-gray-100 text-gray-900 shadow-sm shadow-gray-100/50"
            }`}
          >
            {/* Header with label + icon */}
            <div className="flex items-center justify-between mb-3">
              <p
                className={`text-sm font-medium ${isPrimary ? "text-brand-100" : "text-gray-500"}`}
              >
                {card.label}
              </p>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isPrimary
                    ? "bg-white/15"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isPrimary ? "text-white" : "text-gray-500"}`}
                />
              </div>
            </div>

            <p className="text-4xl font-bold mb-2">
              {card.value}
              {card.suffix && (
                <span className="text-xl font-semibold">{card.suffix}</span>
              )}
            </p>

            <p
              className={`text-xs flex items-center gap-1 ${isPrimary ? "text-brand-200" : "text-gray-400"}`}
            >
              <ArrowUpRight className="w-3 h-3" />
              {card.note}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;
