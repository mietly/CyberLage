const levelStyles = {
  kritisch: 'bg-red-500/20 text-red-400 border-red-500/30',
  hoch: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  mittel: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  niedrig: 'bg-green-500/20 text-green-400 border-green-500/30',
  info: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
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
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${styles}`}
    >
      {label}
    </span>
  )
}
