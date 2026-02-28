import { Video } from "lucide-react";

function RemindersCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col justify-between h-full shadow-sm shadow-gray-100/50 hover-lift">
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Reminders
        </h3>
        <p className="text-xl font-bold text-gray-900 leading-snug mb-1">
          Meeting with Arc
          <br />
          Company
        </p>
        <p className="text-sm text-gray-500">Time : 02.00 pm - 04.00 pm</p>
      </div>
      <button className="mt-4 inline-flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors self-start cursor-pointer">
        <Video className="w-4 h-4" />
        Start Meeting
      </button>
    </div>
  );
}

export default RemindersCard;
