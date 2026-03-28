export const demoArticles = [
  {
    id: '1',
    slug: 'ransomware-angriff-sueddeutscher-klinikverbund',
    title: 'Ransomware-Angriff legt süddeutschen Klinikverbund lahm',
    excerpt: 'Ein großer Klinikverbund in Bayern wurde Opfer einer Ransomware-Attacke. Notaufnahmen mussten vorübergehend Patienten umleiten. BSI warnt vor Nachahmer-Attacken.',
    content: `## Ransomware-Angriff auf Klinikverbund

Ein großer Klinikverbund in Süddeutschland ist Opfer eines schwerwiegenden Ransomware-Angriffs geworden. Die Attacke, die in den frühen Morgenstunden entdeckt wurde, hat weite Teile der IT-Infrastruktur verschlüsselt.

### Was ist passiert?

Die Angreifer nutzten eine bekannte Schwachstelle in der VPN-Lösung des Klinikverbunds, um sich Zugang zum Netzwerk zu verschaffen. Über einen Zeitraum von vermutlich mehreren Wochen bewegten sie sich lateral durch das Netzwerk, bevor sie die Ransomware aktivierten.

### Auswirkungen

- Drei von fünf Kliniken mussten auf Notbetrieb umstellen
- Elektronische Patientenakten sind temporär nicht verfügbar
- Notaufnahmen leiteten Patienten vorübergehend um
- OP-Planungen mussten manuell koordiniert werden

### BSI-Warnung

Das BSI hat eine offizielle Warnung herausgegeben und empfiehlt allen Gesundheitseinrichtungen:

1. VPN-Systeme sofort auf aktuelle Patches prüfen
2. Netzwerksegmentierung überprüfen
3. Backup-Strategien testen
4. Incident Response Pläne aktualisieren

### Empfohlene Maßnahmen

Organisationen im Gesundheitssektor sollten ihre Sicherheitsmaßnahmen umgehend überprüfen. Besonders kritisch sind aktuell Schwachstellen in Fortinet FortiOS und Cisco ASA.`,
    category: 'ransomware',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    published_at: '2026-03-28T08:00:00Z',
    reading_time: 5,
    views: 15420,
    tags: ['Ransomware', 'Gesundheitswesen', 'KRITIS', 'BSI'],
    author: 'David Oberholzner',
  },
  {
    id: '2',
    slug: 'kritische-sap-schwachstelle-cve-2026-1234',
    title: 'Kritische SAP-Schwachstelle: CVSS 9.8 – Sofort patchen!',
    excerpt: 'Eine kritische Schwachstelle in SAP NetWeaver ermöglicht Remote Code Execution ohne Authentifizierung. Tausende DACH-Unternehmen potenziell betroffen.',
    content: `## Kritische SAP-Schwachstelle CVE-2026-1234

SAP hat ein Notfall-Sicherheitsupdate veröffentlicht, das eine kritische Schwachstelle in SAP NetWeaver behebt. Die Schwachstelle ermöglicht es Angreifern, ohne Authentifizierung Code auf dem Server auszuführen.

### Details

- **CVE:** CVE-2026-1234
- **CVSS Score:** 9.8 (Kritisch)
- **Betroffene Versionen:** SAP NetWeaver 7.50 bis 7.93
- **Angriffsvektor:** Netzwerk (Remote)
- **Authentifizierung:** Nicht erforderlich

### Wer ist betroffen?

Da SAP im DACH-Raum besonders stark verbreitet ist, sind potenziell tausende Unternehmen betroffen. Besonders kritisch ist die Lage für:

- Unternehmen die SAP NetWeaver öffentlich erreichbar betreiben
- Organisationen ohne aktuelle Patch-Strategie
- KRITIS-Betreiber mit SAP-Systemen

### Sofortmaßnahmen

1. Verfügbaren Patch sofort einspielen
2. Wenn Patch nicht möglich: Workaround laut SAP Security Note anwenden
3. Logs auf verdächtige Aktivitäten prüfen
4. WAF-Regeln aktualisieren`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-03-27T14:30:00Z',
    reading_time: 4,
    views: 23100,
    tags: ['SAP', 'CVE', 'Patch', 'Remote Code Execution'],
    author: 'David Oberholzner',
  },
  {
    id: '3',
    slug: 'nis2-umsetzung-deutschland-verzoegert',
    title: 'NIS2-Umsetzung in Deutschland erneut verzögert – Was Unternehmen jetzt tun müssen',
    excerpt: 'Die nationale Umsetzung der NIS2-Richtlinie verzögert sich weiter. Trotzdem sollten betroffene Unternehmen jetzt handeln. Ein Überblick über den aktuellen Stand.',
    content: `## NIS2-Umsetzung in Deutschland verzögert

Die nationale Umsetzung der europäischen NIS2-Richtlinie in Deutschland verzögert sich erneut. Das geplante NIS2-Umsetzungsgesetz (NIS2UmsuCG) konnte nicht wie geplant verabschiedet werden.

### Aktueller Stand

- Die EU-Frist für die nationale Umsetzung ist bereits verstrichen
- Deutschland gehört zu den Ländern, die die Frist nicht eingehalten haben
- Ein neuer Zeitplan wurde noch nicht offiziell kommuniziert

### Warum Unternehmen trotzdem jetzt handeln sollten

1. **Vorbereitung braucht Zeit:** Die Umsetzung der Anforderungen kann 12-18 Monate dauern
2. **Rückwirkende Pflichten:** Sobald das Gesetz in Kraft tritt, gelten die Pflichten
3. **Geschäftspartner verlangen es:** Viele große Unternehmen fordern NIS2-Compliance bereits in Verträgen
4. **Wettbewerbsvorteil:** Frühe Umsetzung kann als Differenzierungsmerkmal dienen

### Die wichtigsten NIS2-Anforderungen

- Risikomanagement-Maßnahmen
- Meldepflichten bei Sicherheitsvorfällen (24h/72h)
- Supply Chain Security
- Geschäftsführer-Haftung
- Regelmäßige Sicherheitsaudits`,
    category: 'nis2',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2026-03-27T10:00:00Z',
    reading_time: 6,
    views: 18700,
    tags: ['NIS2', 'Compliance', 'EU', 'Regulierung'],
    author: 'David Oberholzner',
  },
  {
    id: '4',
    slug: 'ki-generierte-phishing-mails-dach',
    title: 'KI-generierte Phishing-Mails: Neue Welle trifft DACH-Unternehmen',
    excerpt: 'Security-Forscher warnen vor einer massiven Zunahme KI-generierter Phishing-Mails in deutscher Sprache. Die Qualität ist erschreckend hoch.',
    content: `## KI-generierte Phishing-Mails auf dem Vormarsch

Eine neue Generation von Phishing-Mails trifft den DACH-Raum. Die mit KI generierten Nachrichten sind in nahezu perfektem Deutsch verfasst und kaum noch von legitimen Geschäfts-Emails zu unterscheiden.

### Was ist anders?

- Perfekte deutsche Grammatik und Rechtschreibung
- Kontextbezogene Inhalte (aktuelle Ereignisse, Branchenbezug)
- Personalisierte Anrede mit korrekten Titeln
- Gefälschte Absenderadressen die täuschend echt wirken

### Erkennungsmerkmale

Trotz der hohen Qualität gibt es Hinweise:

1. Ungewöhnliche Dringlichkeit
2. Links die nicht zum angegebenen Absender passen
3. Aufforderung Zugangsdaten einzugeben
4. Unerwartete Anhänge

### Empfehlungen

- Security Awareness Training aktualisieren
- KI-basierte Email-Security-Lösungen evaluieren
- Meldeprozesse für verdächtige Mails etablieren
- Zwei-Faktor-Authentifizierung für alle Konten aktivieren`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    published_at: '2026-03-26T16:00:00Z',
    reading_time: 4,
    views: 12340,
    tags: ['Phishing', 'KI', 'Social Engineering', 'Email Security'],
    author: 'David Oberholzner',
  },
  {
    id: '5',
    slug: 'zero-day-microsoft-exchange-maerz-2026',
    title: 'Zero-Day in Microsoft Exchange: Aktive Ausnutzung bestätigt',
    excerpt: 'Microsoft bestätigt eine aktiv ausgenutzte Zero-Day-Schwachstelle in Exchange Server. Ein Patch ist noch nicht verfügbar, aber ein Workaround wurde veröffentlicht.',
    content: `## Zero-Day in Microsoft Exchange Server

Microsoft hat eine aktiv ausgenutzte Zero-Day-Schwachstelle in Exchange Server bestätigt. Die Schwachstelle wird bereits von einer APT-Gruppe ausgenutzt, die auf europäische Organisationen abzielt.

### Technische Details

- **Typ:** Server-Side Request Forgery (SSRF)
- **Auswirkung:** Zugriff auf interne Systeme über Exchange
- **Betroffene Versionen:** Exchange Server 2019 CU14 und früher
- **Patch:** Noch nicht verfügbar

### Workaround

Microsoft empfiehlt als temporäre Maßnahme:

1. URL-Rewrite-Regel auf dem Exchange Server einrichten
2. Zugriff auf OWA einschränken
3. Enhanced Monitoring aktivieren

### Was IT-Admins jetzt tun sollten

- Workaround sofort implementieren
- Exchange-Logs auf Indicators of Compromise prüfen
- Netzwerk-Traffic auf ungewöhnliche Muster überwachen
- Incident Response Team in Bereitschaft versetzen`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-03-26T09:00:00Z',
    reading_time: 5,
    views: 31200,
    tags: ['Microsoft', 'Exchange', 'Zero-Day', 'APT'],
    author: 'David Oberholzner',
  },
  {
    id: '6',
    slug: 'datenpanne-oesterreichischer-versicherer',
    title: 'Datenpanne bei österreichischem Versicherungskonzern – 500.000 Kunden betroffen',
    excerpt: 'Einer der größten Versicherer Österreichs meldet eine massive Datenpanne. Persönliche Daten und Vertragsinformationen von 500.000 Kunden wurden kompromittiert.',
    content: `## Massive Datenpanne bei österreichischem Versicherer

Ein führender österreichischer Versicherungskonzern hat eine massive Datenpanne gemeldet. Betroffen sind die persönlichen Daten von rund 500.000 Kunden.

### Was wurde kompromittiert?

- Namen und Adressen
- Geburtsdaten
- Versicherungsnummern
- Vertragsinformationen
- Teilweise Bankverbindungen

### Ursache

Nach ersten Erkenntnissen wurde eine unzureichend gesicherte API als Einfallstor genutzt. Die Angreifer konnten über einen Zeitraum von mehreren Wochen Daten abgreifen, bevor der Vorfall entdeckt wurde.

### Rechtliche Konsequenzen

- Meldung an die österreichische Datenschutzbehörde erfolgt
- DSGVO-Bußgeld von bis zu 4% des Jahresumsatzes möglich
- Betroffene Kunden werden informiert
- Sammelklage wird bereits vorbereitet`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    published_at: '2026-03-25T11:00:00Z',
    reading_time: 4,
    views: 9870,
    tags: ['Datenpanne', 'DSGVO', 'Österreich', 'Versicherung'],
    author: 'David Oberholzner',
  },
  {
    id: '7',
    slug: 'bsi-warnung-kritische-infrastruktur',
    title: 'BSI erhöht Warnstufe: Gezielte Angriffe auf KRITIS-Betreiber',
    excerpt: 'Das BSI warnt vor einer Zunahme gezielter Cyberangriffe auf Betreiber kritischer Infrastrukturen. Energieversorger und Wasserwerke im Fokus.',
    content: `## BSI erhöht Warnstufe für KRITIS-Betreiber

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat seine Warnstufe für Betreiber kritischer Infrastrukturen erhöht. Hintergrund sind vermehrte gezielte Angriffe auf den Energie- und Wassersektor.

### Bedrohungslage

- Zunahme von Spear-Phishing gegen KRITIS-Mitarbeiter
- Scanning-Aktivitäten auf OT-Systeme deutlich gestiegen
- Mehrere Vorfälle bei europäischen Energieversorgern
- Verdacht auf staatlich gesteuerte Akteure

### Empfehlungen des BSI

1. OT-Netzwerke strikt von IT-Netzwerken trennen
2. Remote-Zugänge zu OT-Systemen minimieren
3. Monitoring in OT-Umgebungen verstärken
4. Notfallpläne für Cyber-Angriffe aktualisieren
5. Mitarbeiter-Sensibilisierung verstärken`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    published_at: '2026-03-25T08:00:00Z',
    reading_time: 5,
    views: 14560,
    tags: ['BSI', 'KRITIS', 'Energiesektor', 'OT-Security'],
    author: 'David Oberholzner',
  },
  {
    id: '8',
    slug: 'ki-security-tools-ueberblick-2026',
    title: 'KI in der Cybersecurity: Die besten Tools 2026 im Überblick',
    excerpt: 'Künstliche Intelligenz revolutioniert die Cybersecurity. Wir stellen die wichtigsten KI-basierten Security-Tools vor und zeigen, wie sie IT-Teams unterstützen.',
    content: `## KI-basierte Security-Tools 2026

Künstliche Intelligenz hat sich als unverzichtbarer Bestandteil moderner Security-Stacks etabliert. Hier ein Überblick über die wichtigsten Kategorien und Tools.

### Threat Detection & Response

KI-Systeme erkennen Bedrohungen in Echtzeit und können automatisch reagieren:
- Anomalie-Erkennung im Netzwerkverkehr
- Verhaltensbasierte Malware-Erkennung
- Automatisierte Incident Response

### Email Security

- Erkennung von KI-generierten Phishing-Mails
- Kontextbasierte Analyse von Absenderverhalten
- Echtzeit-URL-Analyse

### Vulnerability Management

- Automatische Priorisierung von Schwachstellen
- Vorhersage von Exploit-Wahrscheinlichkeiten
- Kontextbezogene Patch-Empfehlungen

### Worauf achten?

- Transparenz der KI-Entscheidungen
- False-Positive-Rate
- Integration in bestehende SIEM/SOAR-Systeme
- DSGVO-Konformität der Datenverarbeitung`,
    category: 'ki-security',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2026-03-24T14:00:00Z',
    reading_time: 7,
    views: 8920,
    tags: ['KI', 'Tools', 'SIEM', 'Automatisierung'],
    author: 'David Oberholzner',
  },
  {
    id: '9',
    slug: 'schweizer-unternehmen-ransomware-zahlung',
    title: 'Schweizer Industrieunternehmen zahlt Millionen-Lösegeld',
    excerpt: 'Ein großes Schweizer Industrieunternehmen hat nach einem Ransomware-Angriff ein Lösegeld im zweistelligen Millionenbereich gezahlt.',
    content: `## Millionen-Lösegeld in der Schweiz

Ein namhaftes Schweizer Industrieunternehmen hat bestätigt, nach einem Ransomware-Angriff ein Lösegeld gezahlt zu haben. Die Summe liegt Berichten zufolge im zweistelligen Millionenbereich.

### Hintergrund

- Angriff erfolgte über kompromittierte Zugangsdaten eines Dienstleisters
- Supply-Chain-Angriff als initialer Vektor
- Produktionsstillstand in mehreren Werken
- Geschätzter Gesamtschaden übersteigt die Lösegeldsumme deutlich

### Warum wurde gezahlt?

- Backups waren ebenfalls teilweise verschlüsselt
- Produktionsausfall verursachte höhere Kosten als das Lösegeld
- Zeitdruck durch Kundenverträge

### Lehren für andere Unternehmen

1. 3-2-1-Backup-Strategie konsequent umsetzen
2. Backup-Systeme vom Produktionsnetz isolieren
3. Supply Chain Risk Management etablieren
4. Cyber-Versicherung prüfen`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    published_at: '2026-03-24T09:00:00Z',
    reading_time: 5,
    views: 11230,
    tags: ['Ransomware', 'Schweiz', 'Industrie', 'Supply Chain'],
    author: 'David Oberholzner',
  },
  {
    id: '10',
    slug: 'dsgvo-bussgeld-rekord-deutschland-2026',
    title: 'Rekordbußgeld: Deutsche Behörde verhängt 15 Mio. Euro DSGVO-Strafe',
    excerpt: 'Eine deutsche Datenschutzbehörde hat das bisher höchste Bußgeld des Jahres verhängt. Ein Technologieunternehmen muss 15 Millionen Euro zahlen.',
    content: `## DSGVO-Rekordbußgeld in Deutschland

Eine deutsche Landesdatenschutzbehörde hat ein Bußgeld in Höhe von 15 Millionen Euro gegen ein Technologieunternehmen verhängt. Es ist das höchste DSGVO-Bußgeld in Deutschland im Jahr 2026.

### Grund für das Bußgeld

- Unrechtmäßige Verarbeitung personenbezogener Daten
- Fehlende Rechtsgrundlage für Profiling-Aktivitäten
- Unzureichende Informationspflichten
- Mangelhafte Datenschutz-Folgenabschätzung

### Was bedeutet das für andere Unternehmen?

Die Behörden werden strenger. Unternehmen sollten:

1. Datenschutz-Folgenabschätzungen regelmäßig durchführen
2. Rechtsgrundlagen für alle Verarbeitungen dokumentieren
3. Informationspflichten vollständig erfüllen
4. Datenschutzbeauftragte angemessen ausstatten

### Trend: Steigende Bußgelder

Die durchschnittliche Bußgeldhöhe in der EU steigt seit Jahren kontinuierlich an. Experten erwarten, dass sich dieser Trend 2026 fortsetzt.`,
    category: 'dsgvo',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    published_at: '2026-03-23T12:00:00Z',
    reading_time: 4,
    views: 7650,
    tags: ['DSGVO', 'Bußgeld', 'Datenschutz', 'Deutschland'],
    author: 'David Oberholzner',
  },
]

export const demoCVEs = [
  {
    cve_id: 'CVE-2026-1234',
    description: 'SAP NetWeaver Remote Code Execution – Unauthentifizierte Angreifer können beliebigen Code auf dem Server ausführen.',
    cvss_score: 9.8,
    affected_software: 'SAP NetWeaver 7.50–7.93',
    vendor: 'SAP',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-27',
    advisory_url: 'https://nvd.nist.gov',
  },
  {
    cve_id: 'CVE-2026-5678',
    description: 'Microsoft Exchange Server SSRF – Ermöglicht Zugriff auf interne Systeme über manipulierte Anfragen.',
    cvss_score: 9.1,
    affected_software: 'Microsoft Exchange Server 2019',
    vendor: 'Microsoft',
    patch_available: false,
    workaround: true,
    published_at: '2026-03-26',
    advisory_url: 'https://nvd.nist.gov',
  },
  {
    cve_id: 'CVE-2026-9012',
    description: 'Fortinet FortiOS Heap Overflow – Kritischer Buffer Overflow in SSL-VPN ermöglicht Remote Code Execution.',
    cvss_score: 9.6,
    affected_software: 'FortiOS 7.2.x, 7.4.x',
    vendor: 'Fortinet',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-25',
    advisory_url: 'https://nvd.nist.gov',
  },
  {
    cve_id: 'CVE-2026-3456',
    description: 'VMware vCenter Authentication Bypass – Umgehung der Authentifizierung ermöglicht administrativen Zugriff.',
    cvss_score: 9.4,
    affected_software: 'VMware vCenter Server 8.x',
    vendor: 'VMware',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-24',
    advisory_url: 'https://nvd.nist.gov',
  },
  {
    cve_id: 'CVE-2026-7890',
    description: 'Linux Kernel Privilege Escalation – Lokale Rechteausweitung über Netfilter-Subsystem.',
    cvss_score: 7.8,
    affected_software: 'Linux Kernel 6.x',
    vendor: 'Linux',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-23',
    advisory_url: 'https://nvd.nist.gov',
  },
]

export const topThreats = [
  { name: 'Ransomware-as-a-Service (RaaS)', level: 'kritisch', description: 'Massive Zunahme von RaaS-Angriffen auf DACH-Unternehmen' },
  { name: 'KI-gestützte Phishing-Kampagnen', level: 'kritisch', description: 'Perfekt lokalisierte Phishing-Mails in Deutsch' },
  { name: 'Supply Chain Attacks', level: 'hoch', description: 'Angriffe über Dienstleister und Software-Lieferketten' },
  { name: 'Zero-Day Exploits in VPN/Firewalls', level: 'hoch', description: 'Aktive Ausnutzung ungepatchter Perimeter-Geräte' },
  { name: 'Cloud-Fehlkonfigurationen', level: 'mittel', description: 'Offene S3 Buckets und falsch konfigurierte Azure AD' },
]

export const breakingNews = [
  'BSI erhöht Warnstufe für kritische Infrastrukturen auf ORANGE',
  'Kritische SAP-Schwachstelle CVE-2026-1234 – Sofort patchen!',
  'Ransomware-Welle trifft Kliniken in Süddeutschland',
  'Microsoft Exchange Zero-Day wird aktiv ausgenutzt',
  'NIS2-Umsetzung in Deutschland erneut verschoben',
  'Neue KI-Phishing-Kampagne zielt auf C-Level im DACH-Raum',
]

export const categories = [
  { id: 'ransomware', name: 'Ransomware & Malware', color: 'text-orange-400', emoji: '' },
  { id: 'phishing', name: 'Phishing & Social Engineering', color: 'text-yellow-400', emoji: '' },
  { id: 'schwachstellen', name: 'Schwachstellen & Patches', color: 'text-blue-400', emoji: '' },
  { id: 'dsgvo', name: 'DSGVO & Datenschutz', color: 'text-green-400', emoji: '' },
  { id: 'nis2', name: 'NIS2 & Compliance', color: 'text-gray-300', emoji: '' },
  { id: 'ki-security', name: 'KI & Security', color: 'text-purple-400', emoji: '' },
  { id: 'datenpannen', name: 'Datenpannen', color: 'text-red-400', emoji: '' },
  { id: 'kritis', name: 'Kritische Infrastruktur', color: 'text-amber-400', emoji: '' },
]

export const glossaryTerms = [
  { term: 'APT', full: 'Advanced Persistent Threat', description: 'Ein gezielter, langandauernder Cyberangriff, meist von staatlich gesteuerten Gruppen, der darauf abzielt, unbemerkt in Netzwerke einzudringen und dort zu verbleiben.' },
  { term: 'CVSS', full: 'Common Vulnerability Scoring System', description: 'Ein standardisiertes Bewertungssystem für die Schwere von Sicherheitslücken auf einer Skala von 0.0 bis 10.0.' },
  { term: 'CVE', full: 'Common Vulnerabilities and Exposures', description: 'Ein Katalog öffentlich bekannter Sicherheitslücken und Schwachstellen, jede mit einer eindeutigen Kennung (z.B. CVE-2026-1234).' },
  { term: 'DSGVO', full: 'Datenschutz-Grundverordnung', description: 'EU-Verordnung zum Schutz personenbezogener Daten. Seit Mai 2018 in Kraft, regelt sie die Verarbeitung personenbezogener Daten durch Unternehmen und Behörden.' },
  { term: 'Firewall', full: '', description: 'Ein Sicherheitssystem, das den Netzwerkverkehr überwacht und filtert. Es entscheidet anhand definierter Regeln, welcher Verkehr erlaubt oder blockiert wird.' },
  { term: 'IoC', full: 'Indicator of Compromise', description: 'Hinweise oder Artefakte, die auf einen Sicherheitsvorfall hindeuten, z.B. verdächtige IP-Adressen, Datei-Hashes oder ungewöhnliche Netzwerkaktivitäten.' },
  { term: 'KRITIS', full: 'Kritische Infrastrukturen', description: 'Organisationen und Einrichtungen mit wichtiger Bedeutung für das Gemeinwesen, deren Ausfall dramatische Folgen hätte (Energie, Wasser, Gesundheit, etc.).' },
  { term: 'MFA', full: 'Multi-Faktor-Authentifizierung', description: 'Sicherheitsverfahren, das mindestens zwei verschiedene Faktoren zur Identitätsbestätigung erfordert (z.B. Passwort + SMS-Code).' },
  { term: 'NIS2', full: 'Network and Information Security Directive 2', description: 'EU-Richtlinie zur Stärkung der Cybersicherheit. Erweitert den Kreis der betroffenen Unternehmen und verschärft die Anforderungen gegenüber NIS1.' },
  { term: 'Phishing', full: '', description: 'Social-Engineering-Angriff, bei dem Angreifer sich als vertrauenswürdige Quelle ausgeben, um an sensible Daten zu gelangen oder Malware zu verbreiten.' },
  { term: 'Ransomware', full: '', description: 'Schadsoftware, die Daten verschlüsselt und ein Lösegeld für die Entschlüsselung fordert. Häufigste Form: Double Extortion (Verschlüsselung + Datendiebstahl).' },
  { term: 'SIEM', full: 'Security Information and Event Management', description: 'System zur zentralen Sammlung, Analyse und Korrelation von Sicherheitsereignissen aus verschiedenen Quellen in Echtzeit.' },
  { term: 'SOC', full: 'Security Operations Center', description: 'Zentrale Organisationseinheit, die für die Überwachung, Erkennung und Reaktion auf Sicherheitsvorfälle zuständig ist.' },
  { term: 'Zero-Day', full: '', description: 'Eine Sicherheitslücke, die dem Hersteller noch nicht bekannt ist oder für die noch kein Patch verfügbar ist. "Zero Days" seit Bekanntwerden.' },
  { term: 'XSS', full: 'Cross-Site Scripting', description: 'Angriffstechnik, bei der schädlicher Code in Webseiten eingeschleust wird, der dann im Browser anderer Nutzer ausgeführt wird.' },
]

export const knowledgeBaseArticles = [
  { id: 'ransomware-erklaert', title: 'Was ist Ransomware?', category: 'Grundlagen', excerpt: 'Alles was du über Ransomware wissen musst – von der Funktionsweise bis zur Prävention.' },
  { id: 'phishing-erkennen', title: 'Wie funktioniert Phishing?', category: 'Grundlagen', excerpt: 'Lerne die verschiedenen Phishing-Methoden kennen und wie du dich schützen kannst.' },
  { id: 'zero-day-erklaert', title: 'Zero-Day Schwachstellen erklärt', category: 'Grundlagen', excerpt: 'Was Zero-Days sind, warum sie so gefährlich sind und wie Unternehmen sich vorbereiten können.' },
  { id: 'cvss-score', title: 'Was ist ein CVSS Score?', category: 'Technisch', excerpt: 'Das Bewertungssystem für Schwachstellen verstehen und richtig einordnen.' },
  { id: 'nis2-einfach', title: 'NIS2 einfach erklärt', category: 'Compliance', excerpt: 'Die EU NIS2-Richtlinie verständlich erklärt – wer ist betroffen und was muss getan werden.' },
  { id: 'dsgvo-it-admins', title: 'DSGVO für IT-Admins', category: 'Compliance', excerpt: 'Die wichtigsten DSGVO-Anforderungen aus technischer Sicht.' },
  { id: 'incident-response', title: 'Incident Response Guide', category: 'Praxis', excerpt: 'Schritt-für-Schritt Anleitung für den Umgang mit Sicherheitsvorfällen.' },
  { id: 'security-awareness', title: 'Security Awareness Training Guide', category: 'Praxis', excerpt: 'Wie du ein effektives Security Awareness Programm aufbaust.' },
]
