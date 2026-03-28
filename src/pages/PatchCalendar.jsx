import { useState, useMemo } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react'

const vendorConfig = {
  Microsoft: { color: 'bg-blue-500/15 text-blue-400 border-blue-500/30', dot: 'bg-blue-500' },
  SAP: { color: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30', dot: 'bg-yellow-500' },
  Adobe: { color: 'bg-red-500/15 text-red-400 border-red-500/30', dot: 'bg-red-500' },
  Oracle: { color: 'bg-orange-500/15 text-orange-400 border-orange-500/30', dot: 'bg-orange-500' },
  Fortinet: { color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30', dot: 'bg-emerald-500' },
}

function getSecondTuesday(year, month) {
  const d = new Date(year, month, 1)
  const dayOfWeek = d.getDay()
  // Tuesday = 2
  let firstTuesday = dayOfWeek <= 2 ? 2 - dayOfWeek + 1 : 9 - dayOfWeek + 2 + 1
  // Actually: first Tuesday
  firstTuesday = 1 + ((2 - dayOfWeek + 7) % 7)
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

    // Microsoft Patch Tuesday
    events.push({
      vendor: 'Microsoft',
      name: 'Microsoft Patch Tuesday',
      date: new Date(secondTues),
      description: 'Monatliche Sicherheitsupdates für Windows, Office, Exchange, .NET und weitere Microsoft-Produkte.',
    })

    // SAP Security Patch Day (also 2nd Tuesday)
    events.push({
      vendor: 'SAP',
      name: 'SAP Security Patch Day',
      date: new Date(secondTues),
      description: 'Monatliche SAP Security Notes und Hotfixes für SAP-Systeme.',
    })

    // Adobe Patch Tuesday (also 2nd Tuesday)
    events.push({
      vendor: 'Adobe',
      name: 'Adobe Patch Tuesday',
      date: new Date(secondTues),
      description: 'Sicherheitsupdates für Acrobat, Reader, Creative Cloud und weitere Adobe-Produkte.',
    })

    // Oracle CPU - Quarterly: Jan, Apr, Jul, Oct (3rd Tuesday typically, but simplified to mid-month)
    if ([0, 3, 6, 9].includes(month)) {
      // Oracle CPU is typically the Tuesday closest to Jan 17, Apr 17, Jul 17, Oct 17
      const oracleDate = new Date(year, month, 17)
      const dayOw = oracleDate.getDay()
      // Adjust to nearest Tuesday
      const diff = (2 - dayOw + 7) % 7
      const oracleTuesday = new Date(year, month, 17 + (diff <= 3 ? diff : diff - 7))
      events.push({
        vendor: 'Oracle',
        name: 'Oracle Critical Patch Update',
        date: oracleTuesday,
        description: 'Vierteljährliche Sicherheitsupdates für alle Oracle-Produkte inkl. Datenbank, Java, Middleware.',
      })
    }

    // Fortinet - roughly mid-month
    events.push({
      vendor: 'Fortinet',
      name: 'Fortinet PSIRT Updates',
      date: new Date(year, month, 12),
      description: 'Regelmäßige Sicherheitsupdates für FortiOS, FortiGate, FortiClient und weitere Fortinet-Produkte.',
    })
  }

  events.sort((a, b) => a.date - b.date)
  return events
}

function formatDateDE(date) {
  return date.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
}

function formatDateShort(date) {
  return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function generateICS(event) {
  const pad = (n) => String(n).padStart(2, '0')
  const d = event.date
  const dateStr = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
  const now = new Date()
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}Z`

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CyberLage.de//Patch-Kalender//DE',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    `DTSTAMP:${stamp}`,
    `UID:${dateStr}-${event.vendor.toLowerCase()}@cyberlage.de`,
    `SUMMARY:${event.name}`,
    `DESCRIPTION:${event.description}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:Morgen: ${event.name}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics)
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay()
  // Convert Sunday=0 to Monday-based (Mon=0, Sun=6)
  return day === 0 ? 6 : day - 1
}

const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export default function PatchCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const allEvents = useMemo(() => generatePatchDates(today, 6), [])

  const visibleMonths = useMemo(() => {
    const months = []
    for (let i = 0; i < 3; i++) {
      const m = (currentMonth + i) % 12
      const y = currentYear + Math.floor((currentMonth + i) / 12)
      months.push({ month: m, year: y })
    }
    return months
  }, [currentMonth, currentYear])

  const eventsForMonth = (year, month) =>
    allEvents.filter((e) => e.date.getFullYear() === year && e.date.getMonth() === month)

  const upcomingEvents = useMemo(() => {
    const now = new Date()
    now.setHours(0, 0, 0, 0)
    return allEvents.filter((e) => e.date >= now).slice(0, 10)
  }, [allEvents])

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-8 w-8 text-blue-500" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Patch-Kalender
            </h1>
          </div>
          <p className="text-gray-400">
            Wichtige Patch-Termine und Security Update Cycles der großen Hersteller im Überblick.
          </p>
        </div>

        {/* Legend */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            {Object.entries(vendorConfig).map(([name, cfg]) => (
              <div key={name} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${cfg.dot}`} />
                <span className="text-sm text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück
          </button>
          <h2 className="text-lg font-bold text-white">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={nextMonth}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            Weiter
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Calendar Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {visibleMonths.map(({ month, year }) => {
            const days = getDaysInMonth(year, month)
            const firstDay = getFirstDayOfMonth(year, month)
            const monthEvents = eventsForMonth(year, month)

            const eventsByDay = {}
            monthEvents.forEach((e) => {
              const day = e.date.getDate()
              if (!eventsByDay[day]) eventsByDay[day] = []
              eventsByDay[day].push(e)
            })

            return (
              <div key={`${year}-${month}`} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-center font-bold text-white mb-4">
                  {monthNames[month]} {year}
                </h3>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((d) => (
                    <div key={d} className="text-center text-xs text-gray-500 font-medium py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-10" />
                  ))}
                  {Array.from({ length: days }).map((_, i) => {
                    const day = i + 1
                    const dayEvents = eventsByDay[day] || []
                    const isToday =
                      day === today.getDate() &&
                      month === today.getMonth() &&
                      year === today.getFullYear()

                    return (
                      <div
                        key={day}
                        className={`h-10 flex flex-col items-center justify-center rounded-lg text-sm relative ${
                          isToday
                            ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold'
                            : dayEvents.length > 0
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-500'
                        }`}
                        title={dayEvents.map((e) => e.name).join(', ')}
                      >
                        {day}
                        {dayEvents.length > 0 && (
                          <div className="flex gap-0.5 absolute -bottom-0.5">
                            {dayEvents
                              .slice(0, 3)
                              .map((e, idx) => (
                                <div
                                  key={idx}
                                  className={`w-1.5 h-1.5 rounded-full ${vendorConfig[e.vendor]?.dot || 'bg-gray-400'}`}
                                />
                              ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Month events list */}
                {monthEvents.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {monthEvents.map((event, idx) => {
                      const cfg = vendorConfig[event.vendor] || vendorConfig.Microsoft
                      return (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${cfg.color}`}
                        >
                          <div className={`w-2 h-2 rounded-full ${cfg.dot} shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-medium truncate block">
                              {event.name}
                            </span>
                            <span className="text-xs opacity-70">
                              {formatDateShort(event.date)}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Upcoming Events Detail List */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-400" />
            Kommende Patch-Termine
          </h2>

          <div className="space-y-3">
            {upcomingEvents.map((event, idx) => {
              const cfg = vendorConfig[event.vendor] || vendorConfig.Microsoft
              const daysUntil = Math.ceil((event.date - new Date()) / (1000 * 60 * 60 * 24))

              return (
                <div
                  key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-lg border ${cfg.color} shrink-0`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${cfg.dot} mr-2`} />
                      <span className="text-sm font-bold">{event.vendor}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white mb-1">{event.name}</h3>
                      <p className="text-xs text-gray-400">{event.description}</p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">{formatDateDE(event.date)}</div>
                        <div className="text-xs text-gray-500">
                          {daysUntil === 0
                            ? 'Heute'
                            : daysUntil === 1
                              ? 'Morgen'
                              : `In ${daysUntil} Tagen`}
                        </div>
                      </div>
                      <a
                        href={generateICS(event)}
                        download={`${event.vendor.toLowerCase()}-patch-${formatDateShort(event.date).replace(/\./g, '-')}.ics`}
                        className="flex items-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs text-gray-300 transition-colors"
                        title="Zum Kalender hinzufügen"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">iCal</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
          <h3 className="text-sm font-bold text-blue-400 mb-2">Hinweis</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Die angezeigten Termine basieren auf den bekannten Patch-Zyklen der Hersteller.
            Außerplanmäßige Sicherheitsupdates (Out-of-Band Patches) werden hier nicht berücksichtigt.
            Prüfe immer die offiziellen Herstellerseiten für die aktuellsten Informationen.
          </p>
        </div>
      </div>
    </div>
  )
}
