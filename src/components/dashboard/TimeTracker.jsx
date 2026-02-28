import { useState, useEffect, useRef } from "react";
import { Pause, Square, Play } from "lucide-react";

function TimeTracker() {
  const [seconds, setSeconds] = useState(5048); // 01:24:08
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handlePauseResume = () => setIsRunning(!isRunning);
  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-800 to-brand-900 p-5 text-white flex flex-col justify-between  min-h-52 shadow-md shadow-brand-900/30 hover-lift">
      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-600/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 right-8 w-24 h-24 bg-brand-400/10 rounded-full blur-xl" />

      <h3 className="text-sm font-medium text-brand-200 relative z-10">
        Time Tracker
      </h3>

      <p className="text-4xl font-bold tracking-wider relative z-10 my-3 font-mono flex justify-center items-center">
        {hrs}:{mins}:{secs}
      </p>

      <div className="flex items-center justify-center gap-3 relative z-10">
        <button
          onClick={handlePauseResume}
          className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer"
        >
          {isRunning ? (
            <Pause className="w-4.5 h-4.5 text-white" />
          ) : (
            <Play className="w-4.5 h-4.5 text-white" />
          )}
        </button>
        <button
          onClick={handleStop}
          className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer"
        >
          <Square className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

export default TimeTracker;
