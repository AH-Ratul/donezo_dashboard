import { Plus, Package } from "lucide-react";

const categoryColors = {
  subscription: "bg-blue-500",
  addon: "bg-orange-500",
};

function ProductList({ products }) {
  const items = (products || []).map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    sales: p.sales,
    category: p.category,
    color: categoryColors[p.category] || "bg-gray-500",
  }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm shadow-gray-100/50 h-full hover-lift">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Products</h3>
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
          <Plus className="w-3.5 h-3.5" />
          New
        </button>
      </div>

      {/* Items */}
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center shrink-0`}
            >
              <Package className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </p>
              <p className="text-xs text-gray-400">
                ${item.price} · {item.sales} sales
              </p>
            </div>
            <span className="shrink-0 text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-2 py-0.5">
              {item.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
