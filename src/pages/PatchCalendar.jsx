import { useState, useMemo } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'

const vendorConfig = {
  Microsoft: { color: 'border-[#C8A96E]/30 text-[#C8A96E]', dot: 'bg-[#C8A96E]' },
  SAP: { color: 'border-[#C8A96E]/30 text-[#C8A96E]', dot: 'bg-[#C8A96E]' },
  Adobe: { color: 'border-[#D97B5A]/30 text-[#D97B5A]', dot: 'bg-[#D97B5A]' },
  Oracle: { color: 'border-[#D97B5A]/30 text-[#D97B5A]', dot: 'bg-[#D97B5A]' },
  Fortinet: { color: 'border-[#5A9A6B]/30 text-[#5A9A6B]', dot: 'bg-[#5A9A6B]' },
}

function getSecondTuesday(year, month) {
  const d = new Date(year, month, 1)
  const dayOfWeek = d.getDay()
  let firstTuesday = 1 + ((2 - dayOfWeek + 7) % 7)
  const secondTuesday = firstTuesday + 7
  return new Date(year, month, secondTuesday)
}

function generatePatchDates(startDate, monthsAhead) {
  const events = []
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), 1)
  for (let i = 0; i < monthsAhead; i++) {
    const year = start.getFullYear() + Math.floor((start.getMonth() + i) / 12)
    const month = (start.getMonth() + i) % 12
    const secondTues = getSecondTuesday(year, month)
    events.push({ vendor: 'Microsoft', name: 'Microsoft Patch Tuesday', date: new Date(secondTues), description: 'Monatliche Sicherheitsupdates für Windows, Office, Exchange, .NET und weitere Microsoft-Produkte.' })
    events.push({ vendor: 'SAP', name: 'SAP Security Patch Day', date: new Date(secondTues), description: 'Monatliche SAP Security Notes und Hotfixes für SAP-Systeme.' })
    events.push({ vendor: 'Adobe', name: 'Adobe Patch Tuesday', date: new Date(secondTues), description: 'Sicherheitsupdates für Acrobat, Reader, Creative Cloud und weitere Adobe-Produkte.' })
    if ([0, 3, 6, 9].includes(month)) {
      const oracleDate = new Date(year, month, 17)
      const dayOw = oracleDate.getDay()
      const diff = (2 - dayOw + 7) % 7
      const oracleTuesday = new Date(year, month, 17 + (diff <= 3 ? diff : diff - 7))
      events.push({ vendor: 'Oracle', name: 'Oracle Critical Patch Update', date: oracleTuesday, description: 'Vierteljährliche Sicherheitsupdates für alle Oracle-Produkte inkl. Datenbank, Java, Middleware.' })
    }
    events.push({ vendor: 'Fortinet', name: 'Fortinet PSIRT Updates', date: new Date(year, month, 12), description: 'Regelmäßige Sicherheitsupdates für FortiOS, FortiGate, FortiClient und weitere Fortinet-Produkte.' })
  }
  events.sort((a, b) => a.date - b.date)
  return events
}

function formatDateDE(date) { return date.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) }
function formatDateShort(date) { return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }

function generateICS(event) {
  const pad = (n) => String(n).padStart(2, '0')
  const d = event.date
  const dateStr = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
  const now = new Date()
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}Z`
  const ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//CyberLage.de//Patch-Kalender//DE','BEGIN:VEVENT',`DTSTART;VALUE=DATE:${dateStr}`,`DTEND;VALUE=DATE:${dateStr}`,`DTSTAMP:${stamp}`,`UID:${dateStr}-${event.vendor.toLowerCase()}@cyberlage.de`,`SUMMARY:${event.name}`,`DESCRIPTION:${event.description}`,'BEGIN:VALARM','TRIGGER:-P1D','ACTION:DISPLAY',`DESCRIPTION:Morgen: ${event.name}`,'END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n')
  return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics)
}

function getDaysInMonth(year, month) { return new Date(year, month + 1, 0).getDate() }
function getFirstDayOfMonth(year, month) { const day = new Date(year, month, 1).getDay(); return day === 0 ? 6 : day - 1 }

const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export default function PatchCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const allEvents = useMemo(() => generatePatchDates(today, 6), [])

  const visibleMonths = useMemo(() => {
    const months = []
    for (let i = 0; i < 3; i++) { const m = (currentMonth + i) % 12; const y = currentYear + Math.floor((currentMonth + i) / 12); months.push({ month: m, year: y }) }
    return months
  }, [currentMonth, currentYear])

  const eventsForMonth = (year, month) => allEvents.filter((e) => e.date.getFullYear() === year && e.date.getMonth() === month)

  const upcomingEvents = useMemo(() => { const now = new Date(); now.setHours(0, 0, 0, 0); return allEvents.filter((e) => e.date >= now).slice(0, 10) }, [allEvents])

  function prevMonth() { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1) } else setCurrentMonth(currentMonth - 1) }
  function nextMonth() { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1) } else setCurrentMonth(currentMonth + 1) }

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-8 w-8 text-[#C8A96E]" />
            <h1 className="text-3xl font-display text-[#C8A96E]">Patch-Kalender</h1>
          </div>
          <p className="text-[#7A7D83]">Wichtige Patch-Termine und Security Update Cycles der großen Hersteller im Überblick.</p>
        </div>

        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            {Object.entries(vendorConfig).map(([name, cfg]) => (
              <div key={name} className="flex items-center gap-2"><div className={`w-3 h-3 ${cfg.dot}`} /><span className="text-sm font-mono text-[#E8E6E0]">{name}</span></div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="flex items-center gap-1 px-3 py-2 rounded-none border border-[#1E2228] text-[#7A7D83] hover:text-[#E8E6E0] hover:border-[#C8A96E] transition-colors font-mono"><ChevronLeft className="h-4 w-4" />Zurück</button>
          <h2 className="text-lg font-display text-[#E8E6E0]">{monthNames[currentMonth]} {currentYear}</h2>
          <button onClick={nextMonth} className="flex items-center gap-1 px-3 py-2 rounded-none border border-[#1E2228] text-[#7A7D83] hover:text-[#E8E6E0] hover:border-[#C8A96E] transition-colors font-mono">Weiter<ChevronRight className="h-4 w-4" /></button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {visibleMonths.map(({ month, year }) => {
            const days = getDaysInMonth(year, month)
            const firstDay = getFirstDayOfMonth(year, month)
            const monthEvents = eventsForMonth(year, month)
            const eventsByDay = {}
            monthEvents.forEach((e) => { const day = e.date.getDate(); if (!eventsByDay[day]) eventsByDay[day] = []; eventsByDay[day].push(e) })

            return (
              <div key={`${year}-${month}`} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-4">
                <h3 className="text-center font-display text-[#E8E6E0] mb-4">{monthNames[month]} {year}</h3>
                <div className="grid grid-cols-7 gap-1 mb-2">{dayNames.map((d) => (<div key={d} className="text-center text-xs font-mono text-[#3E4148] py-1">{d}</div>))}</div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (<div key={`empty-${i}`} className="h-10" />))}
                  {Array.from({ length: days }).map((_, i) => {
                    const day = i + 1; const dayEvents = eventsByDay[day] || []
                    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
                    return (
                      <div key={day} className={`h-10 flex flex-col items-center justify-center rounded-none text-sm font-mono relative ${isToday ? 'bg-[#C8A96E]/20 border border-[#C8A96E]/40 text-[#C8A96E]' : dayEvents.length > 0 ? 'bg-[#0A0C0F] text-[#E8E6E0]' : 'text-[#3E4148]'}`} title={dayEvents.map((e) => e.name).join(', ')}>
                        {day}
                        {dayEvents.length > 0 && (<div className="flex gap-0.5 absolute -bottom-0.5">{dayEvents.slice(0, 3).map((e, idx) => (<div key={idx} className={`w-1.5 h-1.5 ${vendorConfig[e.vendor]?.dot || 'bg-[#7A7D83]'}`} />))}</div>)}
                      </div>
                    )
                  })}
                </div>
                {monthEvents.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {monthEvents.map((event, idx) => {
                      const cfg = vendorConfig[event.vendor] || vendorConfig.Microsoft
                      return (
                        <div key={idx} className={`flex items-center gap-3 px-3 py-2 rounded-none border ${cfg.color}`}>
                          <div className={`w-2 h-2 ${cfg.dot} shrink-0`} />
                          <div className="flex-1 min-w-0"><span className="text-xs font-mono truncate block">{event.name}</span><span className="text-xs font-mono opacity-70">{formatDateShort(event.date)}</span></div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-display text-[#E8E6E0] mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-[#C8A96E]" />Kommende Patch-Termine</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, idx) => {
              const cfg = vendorConfig[event.vendor] || vendorConfig.Microsoft
              const daysUntil = Math.ceil((event.date - new Date()) / (1000 * 60 * 60 * 24))
              return (
                <div key={idx} className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-5 hover:border-[#C8A96E]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-none border ${cfg.color} shrink-0`}><div className={`w-2.5 h-2.5 ${cfg.dot} mr-2`} /><span className="text-sm font-mono">{event.vendor}</span></div>
                    <div className="flex-1 min-w-0"><h3 className="text-sm font-display text-[#E8E6E0] mb-1">{event.name}</h3><p className="text-xs text-[#7A7D83]">{event.description}</p></div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right"><div className="text-sm font-mono text-[#E8E6E0]">{formatDateDE(event.date)}</div><div className="text-xs font-mono text-[#3E4148]">{daysUntil === 0 ? 'Heute' : daysUntil === 1 ? 'Morgen' : `In ${daysUntil} Tagen`}</div></div>
                      <a href={generateICS(event)} download={`${event.vendor.toLowerCase()}-patch-${formatDateShort(event.date).replace(/\./g, '-')}.ics`} className="flex items-center gap-1 px-3 py-2 border border-[#1E2228] hover:border-[#C8A96E] rounded-none text-xs font-mono text-[#7A7D83] hover:text-[#C8A96E] transition-colors" title="Zum Kalender hinzufügen"><Download className="h-3.5 w-3.5" /><span className="hidden sm:inline">iCal</span></a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="border border-[#C8A96E]/20 rounded-sm p-5">
          <h3 className="text-sm font-display text-[#C8A96E] mb-2">Hinweis</h3>
          <p className="text-xs text-[#7A7D83] leading-relaxed">Die angezeigten Termine basieren auf den bekannten Patch-Zyklen der Hersteller. Außerplanmäßige Sicherheitsupdates (Out-of-Band Patches) werden hier nicht berücksichtigt. Prüfe immer die offiziellen Herstellerseiten für die aktuellsten Informationen.</p>
        </div>
      </div>
    </div>
  )
}
