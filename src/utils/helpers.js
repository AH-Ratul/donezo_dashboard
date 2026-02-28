/**
 * Format number with commas (e.g., 12458 → "12,458")
 */
export function formatNumber(num) {
  if (num == null) return "0";
  return num.toLocaleString("en-US");
}

/**
 * Format currency (e.g., 245890 → "$245,890")
 */
export function formatCurrency(num) {
  if (num == null) return "$0";
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
}

/**
 * Format date string (e.g., "2024-01-15" → "Jan 15, 2024")
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get status color class based on status string
 */
export function getStatusColor(status) {
  switch (status?.toLowerCase()) {
    case "completed":
    case "active":
      return "text-green-600 bg-green-100";
    case "in progress":
    case "in-progress":
      return "text-yellow-600 bg-yellow-100";
    case "pending":
    case "inactive":
      return "text-red-600 bg-red-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
}
