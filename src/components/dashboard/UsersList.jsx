import { Plus } from "lucide-react";
import Avatar from "../common/Avatar";

const statusStyles = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
};

function UsersList({ users }) {
  const members = (users || []).map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    status: u.status,
    joinDate: u.joinDate,
  }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm shadow-gray-100/50 h-full hover-lift">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Users</h3>
        <button className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5 hover:bg-gray-50 transition-colors cursor-pointer">
          <Plus className="w-3.5 h-3.5" />
          Add User
        </button>
      </div>

      {/* Members */}
      <ul className="space-y-3.5">
        {members.map((member) => (
          <li key={member.id} className="flex items-center gap-3">
            <Avatar name={member.name} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {member.name}
              </p>
              <p className="text-xs text-gray-400 truncate">{member.email}</p>
            </div>
            <span
              className={`shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyles[member.status] || "bg-gray-100 text-gray-600"}`}
            >
              {member.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
