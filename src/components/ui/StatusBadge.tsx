'use client';

export function StatusBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#e5e5e5] rounded-full text-[13px] font-medium text-ink ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
      </span>
      Available for Work
    </div>
  );
}
