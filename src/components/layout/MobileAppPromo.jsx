function MobileAppPromo() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-brand-800 to-brand-900 p-5 text-white">
      {/* Decorative blurs */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-500/20 rounded-full blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-400/15 rounded-full blur-lg" />

      <div className="relative z-10">
        <p className="text-sm font-semibold leading-snug mb-0.5">
          Download our
        </p>
        <p className="text-sm font-semibold leading-snug mb-1">Mobile App</p>
        <p className="text-[11px] text-brand-200/80 mb-3">
          Get easy in another way
        </p>
        <button className="flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold px-3.5 py-3 rounded-full w-full transition-colors cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
}

export default MobileAppPromo;
