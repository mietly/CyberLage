const levelStyles = {
  kritisch: 'text-[#D97B5A] border-[#D97B5A]/30',
  hoch: 'text-[#D97B5A] border-[#D97B5A]/20',
  mittel: 'text-[#C8A96E] border-[#C8A96E]/30',
  niedrig: 'text-[#5A9A6B] border-[#5A9A6B]/30',
  info: 'text-[#7A7D83] border-[#7A7D83]/30',
}

const levelLabels = {
  kritisch: 'Kritisch',
  hoch: 'Hoch',
  mittel: 'Mittel',
  niedrig: 'Niedrig',
  info: 'Info',
}

export default function RiskBadge({ level }) {
  const styles = levelStyles[level] || levelStyles.info
  const label = levelLabels[level] || level

  return (
    <span
      className={`severity-badge inline-flex items-center px-2 py-0.5 rounded-none text-xs font-mono font-semibold uppercase tracking-wider border ${styles}`}
    >
      {label}
    </span>
  )
}
