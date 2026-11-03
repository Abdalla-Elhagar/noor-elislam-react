const units = [
  ['days', 'يوم'],
  ['hours', 'ساعة'],
  ['minutes', 'دقيقة'],
  ['seconds', 'ثانية'],
]

export default function Countdown({ time }) {
  return (
    <div
      role="timer"
      aria-label="الوقت المتبقي لانتهاء عروض الأسبوع"
      className="flex flex-wrap items-center gap-[7px] sm:gap-2.5"
    >
      <span className="me-1 basis-full text-xs font-bold text-white/90 min-[381px]:basis-auto">ينتهي في:</span>
      {units.map(([key, label]) => (
        <div
          key={key}
          className="grid min-w-[48px] rounded-xl border border-white/25 bg-white/10 px-[7px] py-2 text-center min-[381px]:min-w-[53px] sm:min-w-[58px] sm:px-2.5"
        >
          <strong className="text-xl leading-[1.3] text-[#ffd166]">{time[key]}</strong>
          <span className="text-[10px] text-white/85">{label}</span>
        </div>
      ))}
    </div>
  )
}
