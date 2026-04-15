export const demoArticles = [
  {
    id: '1',
    slug: 'cpuid-supply-chain-attack-stx-rat-cpu-z-hwmonitor',
    title: 'Supply-Chain-Angriff auf CPUID: Trojaner in CPU-Z und HWMonitor verteilt',
    excerpt: 'Unbekannte Angreifer kompromittierten die CPUID-Website und verteilten sechs Stunden lang trojanisierte Versionen von CPU-Z und HWMonitor mit dem STX RAT – über 150 Opfer bestätigt.',
    content: `## Supply-Chain-Angriff auf CPUID – STX RAT über CPU-Z und HWMonitor

Unbekannte Angreifer haben die Website des beliebten Hardware-Tool-Entwicklers **CPUID** kompromittiert und trojanisierte Versionen der Programme **CPU-Z** und **HWMonitor** verteilt.

### Zeitlicher Ablauf

- **9. April 2026, ~15:00 UTC:** Download-Links auf cpuid.com werden auf bösartige Websites umgeleitet
- **10. April 2026, ~10:00 UTC:** CPUID erkennt den Angriff und stellt die originalen Links wieder her
- **Dauer:** Ca. 6 Stunden waren manipulierte Downloads verfügbar

### Technische Details

- **Angriffsvektor:** Kompromittierung einer sekundären API auf der CPUID-Website
- **Malware:** STX RAT (Remote Access Trojan)
- **Verteilung:** Über Cloudflare R2 Storage als gefälschtes HWiNFO-Installationspaket
- **Ziel:** Diebstahl von Browser-Zugangsdaten, insbesondere über Chromes IElevation COM Interface
- **Installer:** Russischer Inno Setup Wrapper

### Betroffene

Kaspersky identifizierte über **150 Opfer**, darunter Privatpersonen sowie Unternehmen aus den Bereichen Einzelhandel, Fertigung, Beratung, Telekommunikation und Landwirtschaft.

### Attribution

Die Angreifer werden als **russischsprachige Akteure** eingestuft, die entweder finanziell motiviert sind oder als Initial Access Broker operieren. Die Kampagne läuft seit Juli 2025.

### Sofortmaßnahmen

1. **CPU-Z und HWMonitor zwischen 9.–10. April heruntergeladen?** Sofort System scannen
2. Browser-Passwörter ändern, insbesondere in Chrome gespeicherte
3. Aktuelle Versionen nur von der offiziellen CPUID-Website laden
4. Hash-Werte der Installer mit offiziellen Checksums vergleichen
5. Netzwerk auf Kommunikation mit bekannten C2-Servern prüfen`,
    category: 'ransomware',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    published_at: '2026-04-11T08:00:00Z',
    reading_time: 5,
    views: 1240,
    tags: ['Supply Chain', 'CPUID', 'CPU-Z', 'HWMonitor', 'STX RAT', 'Malware'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '2',
    slug: 'anthropic-mythos-preview-zero-day-discovery-project-glasswing',
    title: 'Anthropic Mythos Preview: KI findet tausende Zero-Days in allen großen Betriebssystemen',
    excerpt: 'Anthropics Claude Mythos Preview entdeckte autonom tausende hochkritische Zero-Day-Schwachstellen in jedem großen OS und Browser – darunter einen 17 Jahre alten FreeBSD-RCE-Bug.',
    content: `## Anthropic Mythos Preview – KI als Zero-Day-Maschine

Anthropics neuestes KI-Modell **Claude Mythos Preview** hat die Cybersecurity-Welt erschüttert: Das Modell ist in der Lage, autonom **Zero-Day-Schwachstellen** in jedem großen Betriebssystem und Webbrowser zu finden und auszunutzen.

### Entdeckte Schwachstellen

- **CVE-2026-4747:** 17 Jahre alter Remote Code Execution Bug in FreeBSD (NFS) – Root-Zugriff möglich
- **27 Jahre alter Bug** in OpenBSD (inzwischen gepatcht)
- **16 Jahre alter Fehler** in FFmpeg
- **Memory-Corruption** in einem Memory-Safe Virtual Machine Monitor

### Exploit-Fähigkeiten

In einem Fall schrieb Mythos Preview einen **Browser-Exploit**, der vier Schwachstellen verkettete:

1. Komplexer JIT Heap Spray
2. Renderer-Sandbox-Escape
3. OS-Sandbox-Escape
4. Lokale Privilege Escalation über Race Conditions und KASLR-Bypass

### Project Glasswing

Anstatt Mythos frei verfügbar zu machen, startete Anthropic die Initiative **Project Glasswing**:

- Kontrollierte Nutzung zur Schwachstellensuche
- Partner: AWS, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorgan Chase, Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks
- Ziel: Schwachstellen finden und beheben, bevor Angreifer sie ausnutzen

### Reaktionen

- **Palo Alto Networks** warnt: Ähnliche Fähigkeiten sind "Wochen oder Monate von der Verbreitung entfernt"
- **Washington & Wall Street** auf höchster Alarmstufe
- US-Geheimdienstbericht 2026 stuft KI als **Top-Bedrohung für nationale Sicherheit** ein

### DACH-Relevanz

Deutsche Unternehmen müssen sich auf eine neue Ära der Schwachstellenentdeckung einstellen. Patch-Management und Reaktionszeiten werden noch kritischer.`,
    category: 'ki-security',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2026-04-08T06:00:00Z',
    reading_time: 6,
    views: 3420,
    tags: ['KI', 'Anthropic', 'Mythos', 'Zero-Day', 'Project Glasswing', 'Vulnerability Discovery'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '3',
    slug: 'chipsoft-ransomware-niederlaendische-krankenhaeuser-offline',
    title: 'ChipSoft Ransomware: 80% der niederländischen Krankenhäuser betroffen',
    excerpt: 'Ein Ransomware-Angriff auf den Healthcare-Softwareanbieter ChipSoft legte Patientenakten-Systeme in den Niederlanden und Belgien lahm – 11 Krankenhäuser trennten ihre Systeme.',
    content: `## ChipSoft Ransomware – Europas Healthcare im Visier

Am 7. April 2026 wurde der niederländische Healthcare-Softwareanbieter **ChipSoft** Opfer eines Ransomware-Angriffs. Das Unternehmen betreibt Patientenakten-Software für rund **80% aller Krankenhäuser** in den Niederlanden.

### Auswirkungen

- **11 Krankenhäuser** trennten vorsorglich ihre ChipSoft-Systeme
- **Zorgportaal**, **HiX Mobile** und **Zorgplatform** vorübergehend nicht verfügbar
- ChipSoft stellt Systeme schrittweise wieder her und vergibt neue Zugangsdaten
- Mehrheit der Krankenhäuser konnte Patientenportale weiter nutzen

### Datenlage

ChipSoft bestätigte gegenüber NOS:
- Es gab einen **"Datenvorfall"** mit **"möglichem unauthorisierten Zugriff"**
- Zugriff auf oder Diebstahl von **Patientendaten kann nicht ausgeschlossen** werden
- Kein Ransomware-Gruppe hat die Verantwortung übernommen

### Z-CERT Empfehlungen

Das niederländische Computer Emergency Response Team für den Gesundheitssektor empfiehlt:

1. ChipSoft-Systeme auf ungewöhnlichen Traffic prüfen
2. Verdächtige Aktivitäten über die Z-CERT-Meldestelle melden
3. Backup-Prozeduren für Patientendaten aktivieren
4. Manuelle Fallback-Prozesse für kritische Abläufe bereithalten

### DACH-Relevanz

Der Angriff zeigt die Verwundbarkeit des **Healthcare-Sektors** in Europa. Deutsche Krankenhäuser sollten ihre Abhängigkeit von einzelnen Software-Anbietern überprüfen und Notfallpläne aktualisieren. Unter NIS2 gelten Krankenhäuser als **Betreiber wesentlicher Dienste** mit erhöhten Anforderungen.`,
    category: 'kritis',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800',
    published_at: '2026-04-08T10:00:00Z',
    reading_time: 5,
    views: 2180,
    tags: ['Ransomware', 'Healthcare', 'ChipSoft', 'Niederlande', 'KRITIS', 'Patientendaten'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '4',
    slug: 'cisco-imc-ssm-kritische-schwachstellen-cvss-9-8',
    title: 'Cisco patcht kritische 9.8-CVSS-Lücken in IMC und SSM – Sofort updaten!',
    excerpt: 'CVE-2026-20093 und CVE-2026-20160 ermöglichen unauthentifizierten Angreifern die vollständige Übernahme von Cisco UCS-Servern und Smart Software Manager – CVSS 9.8.',
    content: `## Cisco IMC & SSM – Kritische Authentication-Bypass-Schwachstellen

Cisco hat Sicherheitsupdates für zwei kritische Schwachstellen mit **CVSS 9.8** veröffentlicht, die den Integrated Management Controller (IMC) und den Smart Software Manager On-Prem (SSM) betreffen.

### CVE-2026-20093 – Cisco IMC Authentication Bypass

- **CVSS:** 9.8 (Kritisch)
- **Typ:** Improper Input Validation bei Passwortänderungsanfragen
- **Angriffsvektor:** Ein einzelner, manipulierter HTTP POST Request genügt
- **Authentifizierung:** Nicht erforderlich (Pre-Auth)
- **Auswirkung:** Angreifer kann Passwörter beliebiger Nutzer ändern, einschließlich Admin
- **Betroffen:** Cisco UCS C-Series Rack-Server, S-Series Server

### CVE-2026-20160 – Cisco SSM On-Prem

- **CVSS:** 9.8 (Kritisch)
- **Typ:** Authentication Bypass mit Privilege Escalation
- **Auswirkung:** Remote-Ausführung von Befehlen mit Root-Rechten

### Gepatchte Versionen

| Produkt | Fixed Version |
|---------|--------------|
| IMC C-Series | 4.3(2.260007), 4.3(6.260017), 6.0(1.250174) |
| NFVIS ENCS | 4.15.5 |
| NFVIS Catalyst | 4.18.3 |

### Sofortmaßnahmen

1. **Sofort patchen** – Keine Workarounds verfügbar
2. IMC Web-Interface und XML API-Port auf ungewöhnliche Zugriffe prüfen
3. Netzwerkzugang zum IMC einschränken (Management-VLAN)
4. Logging und Monitoring für IMC-Zugriffe aktivieren
5. Alle Nutzerpasswörter nach dem Patch zurücksetzen`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-04-03T08:00:00Z',
    reading_time: 4,
    views: 1560,
    tags: ['Cisco', 'IMC', 'SSM', 'CVE-2026-20093', 'CVE-2026-20160', 'Authentication Bypass'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '5',
    slug: 'rockstar-games-shinyhunters-breach-78-millionen-datensaetze',
    title: 'Rockstar Games gehackt: ShinyHunters leaken 78,6 Millionen Datensätze',
    excerpt: 'Die Hackergruppe ShinyHunters erpresste Rockstar Games nach einem Einbruch über den Drittanbieter Anodot – nach Ablauf der Frist am 14. April wurden die Daten veröffentlicht.',
    content: `## Rockstar Games Breach – ShinyHunters schlagen zu

Die berüchtigte Hackergruppe **ShinyHunters** hat Rockstar Games erfolgreich angegriffen und **78,6 Millionen Datensätze** gestohlen und veröffentlicht.

### Angriffsweg

1. **Einstieg:** Kompromittierung von **Anodot**, einem SaaS-Tool für Cloud-Kosten-Monitoring
2. **Pivot:** Extraktion von Authentication Tokens aus der Anodot-Integration
3. **Zugriff:** Verbindung zu Rockstars **Snowflake**-Data-Warehouse
4. **Exfiltration:** 78,6 Millionen Datensätze heruntergeladen

### Zeitverlauf

- **11. April:** ShinyHunters postet Warnung auf Dark-Web-Leak-Site
- **13. April:** Frist für Lösegeldzahlung – Rockstar verhandelt nicht
- **14. April:** Daten werden veröffentlicht

### Geleakte Daten

Laut Analyse enthalten die Daten hauptsächlich:
- Metriken über **GTA Online** und **Red Dead Online**
- Tägliche und wöchentliche Umsatzdaten der Spiele
- **Keine Spielerdaten** betroffen (laut Rockstar)

### Lehren für Unternehmen

- **Third-Party-Risk-Management** ist kritisch
- Cloud-Data-Warehouse-Zugänge regelmäßig auditieren
- API-Tokens und Service-Accounts mit minimalen Rechten versehen
- Snowflake-Instanzen mit Network Policies absichern
- Incident-Response-Plan für Supply-Chain-Kompromittierungen bereithalten`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    published_at: '2026-04-14T07:00:00Z',
    reading_time: 5,
    views: 4210,
    tags: ['ShinyHunters', 'Rockstar Games', 'Data Breach', 'Snowflake', 'Third-Party Risk'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '6',
    slug: 'chrome-zero-day-cve-2026-5281-aktiv-ausgenutzt',
    title: 'Chrome Zero-Day CVE-2026-5281: Aktiv ausgenutzt – Sofort updaten!',
    excerpt: 'Google behebt 21 Sicherheitslücken in Chrome, darunter den aktiv ausgenutzten Zero-Day CVE-2026-5281 – eine Use-After-Free-Lücke in der Dawn-Komponente.',
    content: `## Chrome Zero-Day CVE-2026-5281 – Aktive Ausnutzung bestätigt

Google hat ein Sicherheitsupdate für Chrome veröffentlicht, das **21 Schwachstellen** behebt – darunter den aktiv ausgenutzten Zero-Day **CVE-2026-5281**.

### Technische Details

- **CVE:** CVE-2026-5281
- **Typ:** Use-After-Free in Dawn (WebGPU)
- **Schweregrad:** Hoch
- **Status:** Aktiv ausgenutzt (In the Wild)
- **Angriffsvektor:** Speziell präparierte Webseite

### Was ist Dawn?

Dawn ist Chromes Implementierung des **WebGPU-Standards**, der direkten Zugriff auf die GPU ermöglicht. Eine Use-After-Free-Lücke hier kann:

- Codeausführung im Renderer-Prozess ermöglichen
- Potentiell zur Sandbox-Escape-Kette beitragen
- Für gezielte Angriffe auf bestimmte Nutzer verwendet werden

### CISA-Reaktion

CISA hat CVE-2026-5281 zusammen mit 5 weiteren Schwachstellen (Fortinet, Microsoft, Adobe) in den **Known Exploited Vulnerabilities (KEV)** Katalog aufgenommen.

### Sofortmaßnahmen

1. **Chrome sofort updaten** – chrome://settings/help
2. Chromium-basierte Browser prüfen (Edge, Brave, Opera)
3. Zentrale Update-Policies über GPO/MDM durchsetzen
4. Browser-Isolierung für hochsensible Umgebungen erwägen
5. WebGPU ggf. temporär deaktivieren in chrome://flags`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    published_at: '2026-04-09T08:00:00Z',
    reading_time: 4,
    views: 2890,
    tags: ['Chrome', 'Google', 'Zero-Day', 'CVE-2026-5281', 'WebGPU', 'Dawn'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '7',
    slug: 'microsoft-ki-device-code-phishing-kampagne-hunderte-opfer-taeglich',
    title: 'KI-gestütztes Device-Code-Phishing: Hunderte Microsoft-365-Konten täglich kompromittiert',
    excerpt: 'Microsoft warnt vor einer massiven Phishing-Kampagne, die KI und Automatisierung nutzt, um über Device-Code-Authentifizierung täglich hunderte Organisationen zu kompromittieren.',
    content: `## KI-gestütztes Device-Code-Phishing – Microsoft 365 im Visier

Microsoft Defender Security Research hat eine **beispiellose Phishing-Kampagne** aufgedeckt, die KI und Automatisierung in jeder Phase der Angriffskette einsetzt.

### Angriffsablauf

1. **KI-generierte Lure-Mails:** Generative KI erstellt zielgruppenspezifische Phishing-Mails (RFPs, Rechnungen, Fertigungsabläufe)
2. **Dynamic Code Generation:** Device Codes werden erst bei Nutzerinteraktion generiert, um das 15-Minuten-Zeitfenster auszunutzen
3. **Redirect Chains:** Automatisierte Weiterleitungen über kompromittierte Domains auf Railway, Cloudflare Workers, DigitalOcean, AWS Lambda
4. **Account-Übernahme:** OAuth-Token-Diebstahl über den Device-Code-Flow

### Skala des Angriffs

- **Hunderte Organisationen** täglich betroffen
- **340+ Microsoft-365-Organisationen** in 5 Ländern kompromittiert
- Post-Compromise-Aktivität fokussiert auf **Finanz- und Executive-Rollen**
- Automatisierte Erstellung bösartiger Inbox-Rules für Persistenz

### EvilTokens PhaaS

Die Kampagne steht in Verbindung mit **EvilTokens**, einem Phishing-as-a-Service-Toolkit, das als Haupttreiber des Device-Code-Missbrauchs identifiziert wurde.

### Schutzmaßnahmen

1. **Conditional Access Policies** für Device-Code-Flow einschränken
2. MFA-Richtlinien überprüfen und verstärken
3. Anomalie-Erkennung für OAuth-Token-Nutzung aktivieren
4. Mitarbeiter zu Device-Code-Phishing schulen
5. Inbox-Rules regelmäßig auf unauthorisierte Änderungen prüfen`,
    category: 'phishing',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800',
    published_at: '2026-04-06T10:00:00Z',
    reading_time: 6,
    views: 2340,
    tags: ['Microsoft 365', 'Phishing', 'Device Code', 'OAuth', 'KI', 'EvilTokens'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '8',
    slug: 'die-linke-qilin-ransomware-deutsche-partei-gehackt',
    title: 'Qilin-Ransomware trifft deutsche Partei Die Linke – Daten gestohlen',
    excerpt: 'Die russischsprachige Ransomware-Gruppe Qilin hat die Bundestagspartei Die Linke angegriffen und droht mit der Veröffentlichung interner Daten – politische Motivation vermutet.',
    content: `## Qilin-Ransomware – Angriff auf Die Linke

Die russischsprachige Ransomware-Gruppe **Qilin** hat am 26. März 2026 die deutsche Bundestagspartei **Die Linke** angegriffen und sensible interne Daten gestohlen.

### Zeitverlauf

- **26. März:** Einbruch erkannt, IT-Infrastruktur teilweise heruntergefahren
- **27. März:** Die Linke geht mit einer Cyberincident-Meldung an die Öffentlichkeit
- **1. April:** Qilin listet Die Linke auf ihrer Dark-Web-Leak-Site

### Gestohlene Daten

Die Linke bestätigt:
- **Mitgliederdatenbank nicht betroffen** – keine Mitgliederdaten gestohlen
- Aber: Sensible Daten aus **internen Bereichen der Parteiorganisation**
- **Personenbezogene Daten von Mitarbeitern** der Parteizentrale

### Hintergrund: Qilin

- **Typ:** Ransomware-as-a-Service (RaaS)
- **Sprache:** Russischsprachig
- **Motivation:** Finanziell UND politisch
- Die Linke bezeichnet den Angriff als **"nicht zufällig"**

### Politische Dimension

Der Angriff auf eine Bundestagspartei mit 64 Mandaten und 123.000 Mitgliedern hat besondere Brisanz:

- Mögliche **Einflussnahme auf demokratische Prozesse**
- Parallelen zu früheren Angriffen auf den Bundestag (2015)
- BSI und BfV warnen seit Monaten vor staatlich motivierten Cyberangriffen

### Reaktion

Die Linke hat **Strafanzeige** erstattet und die zuständigen Behörden eingeschaltet. Der Vorfall unterstreicht die Notwendigkeit erhöhter Cybersicherheit für politische Organisationen.`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
    published_at: '2026-04-01T08:00:00Z',
    reading_time: 5,
    views: 3150,
    tags: ['Qilin', 'Ransomware', 'Die Linke', 'Deutschland', 'Politik', 'Cyberspionage'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '9',
    slug: 'fortinet-forticlient-ems-cve-2026-35616-aktiv-ausgenutzt',
    title: 'Fortinet patcht kritische FortiClient-EMS-Lücke CVE-2026-35616 – CVSS 9.1',
    excerpt: 'CISA bestätigt aktive Ausnutzung der Pre-Auth API-Bypass-Schwachstelle in FortiClient EMS – Privilege Escalation auf betroffenen Systemen möglich.',
    content: `## Fortinet FortiClient EMS – CVE-2026-35616

Fortinet hat ein **Out-of-Band-Sicherheitsupdate** für eine kritische Schwachstelle in FortiClient EMS veröffentlicht, die bereits **aktiv ausgenutzt** wird.

### Technische Details

- **CVE:** CVE-2026-35616
- **CVSS:** 9.1 (Kritisch)
- **Typ:** Pre-Authentication API Access Bypass
- **Auswirkung:** Privilege Escalation
- **Status:** Aktiv ausgenutzt – CISA KEV

### Angriffsvektor

Ein unauthentifizierter Angreifer kann:

1. Über einen manipulierten API-Request die Authentifizierung umgehen
2. Erhöhte Privilegien auf dem EMS-Server erlangen
3. Zentrale Endpoint-Management-Funktionen missbrauchen
4. FortiClient-Konfigurationen auf allen verwalteten Endpoints ändern

### Besondere Gefahr

FortiClient EMS ist ein **zentraler Management-Server**, der alle FortiClient-Endpoints verwaltet. Eine Kompromittierung bedeutet potentiellen Zugriff auf das **gesamte Endpoint-Netzwerk**.

### CISA-Aktion

CISA hat CVE-2026-35616 zusammen mit 5 weiteren Schwachstellen in den KEV-Katalog aufgenommen. US-Behörden müssen bis zum **30. April 2026** patchen.

### Sofortmaßnahmen

1. **Sofort auf die neueste FortiClient EMS Version updaten**
2. EMS-Server-Logs auf verdächtige API-Zugriffe prüfen
3. Netzwerkzugang zum EMS einschränken
4. FortiClient-Konfigurationen auf unauthorisierte Änderungen prüfen
5. IOCs von Fortinet PSIRT in SIEM einpflegen`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-04-10T08:00:00Z',
    reading_time: 4,
    views: 1870,
    tags: ['Fortinet', 'FortiClient', 'EMS', 'CVE-2026-35616', 'CISA KEV', 'Patch'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '10',
    slug: 'adobe-acrobat-reader-zero-day-cve-2026-34621-aktiv-ausgenutzt',
    title: 'Adobe Acrobat Reader Zero-Day CVE-2026-34621: Gezielte Angriffe bestätigt',
    excerpt: 'Adobe veröffentlicht Notfall-Patch für eine kritische Schwachstelle in Acrobat Reader (CVSS 8.6), die aktiv in gezielten Angriffen ausgenutzt wird.',
    content: `## Adobe Acrobat Reader – CVE-2026-34621

Adobe hat einen **Notfall-Patch** für Acrobat Reader veröffentlicht, nachdem gezielte Angriffe über die Schwachstelle **CVE-2026-34621** bestätigt wurden.

### Technische Details

- **CVE:** CVE-2026-34621
- **CVSS:** 8.6 (Hoch)
- **Betroffene Produkte:** Adobe Acrobat, Acrobat Reader (alle Plattformen)
- **Status:** Aktiv ausgenutzt in gezielten Angriffen

### Angriffsvektor

- Angreifer versendet speziell präpariertes PDF-Dokument
- Öffnen des Dokuments in einer verwundbaren Version genügt
- Keine weitere Nutzerinteraktion erforderlich nach dem Öffnen
- Codeausführung im Kontext des aktuellen Nutzers

### CISA-Katalog

CISA hat die Schwachstelle in den **Known Exploited Vulnerabilities (KEV)** Katalog aufgenommen – zusammen mit Lücken in Fortinet und Microsoft.

### DACH-Relevanz

Adobe Acrobat Reader ist in fast jedem Unternehmen im DACH-Raum im Einsatz. Besonders gefährdet:
- Unternehmen mit hohem PDF-Aufkommen (Buchhaltung, Recht, Verwaltung)
- Remote-Arbeitsplätze ohne zentrales Patch-Management
- Branchen mit regelmäßigem Dokumentenaustausch

### Sofortmaßnahmen

1. **Adobe Acrobat/Reader sofort updaten**
2. Automatische Updates in Adobe Admin Console aktivieren
3. PDFs aus unbekannten Quellen nicht öffnen
4. Protected Mode in Acrobat Reader aktivieren
5. Alternative: PDF-Viewer ohne JavaScript-Unterstützung für Massenverarbeitung`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800',
    published_at: '2026-04-09T14:00:00Z',
    reading_time: 4,
    views: 1430,
    tags: ['Adobe', 'Acrobat Reader', 'CVE-2026-34621', 'Zero-Day', 'PDF', 'CISA KEV'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '11',
    slug: 'ki-angriffe-bsi-warnt-neue-bedrohungslage-april-2026',
    title: 'BSI warnt: KI-gestützte Cyberangriffe erreichen neue Eskalationsstufe',
    excerpt: 'Das BSI sieht in KI-gestützten Angriffen eine neue Bedrohungsdimension – die Zahl KI-gestützter Attacken stieg 2026 um 89%, autonome Agenten verursachen bereits jeden 8. KI-bezogenen Breach.',
    content: `## BSI warnt vor neuer KI-Bedrohungslage

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) warnt vor einer **dramatischen Zunahme KI-gestützter Cyberangriffe**. Microsoft bestätigt: KI beschleunigt den gesamten Angriffslebenszyklus.

### Aktuelle Zahlen

- **+89%** Anstieg KI-gestützter Angriffe im Vergleich zum Vorjahr
- **9 verifizierte KI-gestützte Incidents** allein in 2026
- **Jeder 8. KI-bezogene Breach** wird von autonomen Agenten verursacht
- KI-Browser-Extensions sind **60% anfälliger** als durchschnittliche Extensions

### Wie Angreifer KI nutzen

| Phase | KI-Einsatz |
|-------|-----------|
| Reconnaissance | Automatisierte Zielanalyse und OSINT |
| Malware-Entwicklung | KI-generierter Code umgeht Signaturen |
| Phishing | Personalisierte Lures in Echtzeit |
| Post-Compromise | Automatisierte Daten-Triage und Exfiltration |

### LayerX-Report: KI-Browser-Extensions als Blindspot

- KI-Extensions haben **3x häufiger** Zugriff auf Cookies
- Viele Extensions mit übermäßigen Berechtigungen
- Enterprise-Browser-Policies decken KI-Extensions oft nicht ab

### US Intelligence Assessment 2026

Der US-Geheimdienstbericht 2026 stuft KI als **"definierende Technologie des 21. Jahrhunderts"** ein und warnt vor militärischer und nachrichtendienstlicher Nutzung.

### Empfehlungen des BSI

1. KI-spezifische Bedrohungsmodelle in Risikoanalysen integrieren
2. Browser-Extensions auditieren und KI-Tools kontrollieren
3. E-Mail-Security mit KI-Erkennung nachrüsten
4. Security-Awareness-Trainings auf KI-Phishing ausweiten
5. Incident-Response-Pläne um KI-Szenarien erweitern`,
    category: 'ki-security',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    published_at: '2026-04-10T12:00:00Z',
    reading_time: 6,
    views: 2670,
    tags: ['BSI', 'KI', 'Cyberangriffe', 'Autonome Agenten', 'Browser Extensions', 'Threat Intelligence'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '12',
    slug: 'nis2-operativ-april-2026-drei-board-entscheidungen',
    title: 'NIS2 wird operativ: Drei Entscheidungen, die Vorstände jetzt treffen müssen',
    excerpt: 'Die NIS2-Registrierungsfrist ist abgelaufen, die Bußgelder drohen – im April 2026 müssen Leitungsgremien drei kritische Entscheidungen für ihre Cybersicherheit treffen.',
    content: `## NIS2 wird operativ – Was Vorstände jetzt entscheiden müssen

Das **NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz** (NIS2UmsuCG) ist seit 6. Dezember 2025 in Kraft. Die Registrierungsfrist beim BSI lief am **6. März 2026** ab. Jetzt wird es ernst.

### Status Quo

- **29.500 Unternehmen** in Deutschland betroffen
- Registrierungsfrist abgelaufen – verspätete Registrierungen weiterhin möglich
- **Keine Schonfrist** für technische und organisatorische Maßnahmen
- Compliance muss ab Tag 1 nachweisbar sein

### Drei Board-Entscheidungen im April 2026

**1. Budget-Allokation für Cybersicherheit**
- Leitungsorgane haften persönlich bei Verstößen
- Investitionen in SIEM, SOC, Incident Response notwendig
- Externe Dienstleister vs. interner Aufbau abwägen

**2. Risikomanagement-Framework**
- Standardisiertes Framework (ISO 27001, BSI IT-Grundschutz) wählen
- Supply-Chain-Risiken systematisch bewerten
- Regelmäßige Penetrationstests beauftragen

**3. Meldepflichten implementieren**
- 24-Stunden-Frühwarnung an BSI bei erheblichen Vorfällen
- 72-Stunden-Meldung mit Erstbewertung
- 1-Monat-Abschlussbericht

### Bußgeld-Rahmen

| Kategorie | Maximum |
|-----------|---------|
| Besonders wichtige Einrichtungen | 10 Mio. € oder 2% Jahresumsatz |
| Wichtige Einrichtungen | 7 Mio. € oder 1,4% Jahresumsatz |

### Handlungsempfehlungen

1. Registrierungsstatus beim BSI prüfen und ggf. nachholen
2. Gap-Analyse zwischen IST-Zustand und NIS2-Anforderungen
3. Persönliche Haftung der Geschäftsleitung absichern
4. Schulungsprogramme für Leitungsorgane starten`,
    category: 'nis2',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    published_at: '2026-04-07T09:00:00Z',
    reading_time: 7,
    views: 3890,
    tags: ['NIS2', 'Compliance', 'BSI', 'Bußgeld', 'Vorstand', 'Haftung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '13',
    slug: 'hansemerkur-dragonforce-ransomware-97gb-daten',
    title: 'HanseMerkur auf DragonForce-Leak-Site: 97 GB interne Daten gestohlen',
    excerpt: 'Die deutsche Versicherung HanseMerkur wurde Opfer eines Ransomware-Angriffs – die Gruppe DragonForce behauptet, 97 GB sensibler interner Daten exfiltriert zu haben.',
    content: `## HanseMerkur – DragonForce Ransomware

Die deutsche Versicherungsgesellschaft **HanseMerkur** ist auf der Dark-Web-Leak-Site der Ransomware-Gruppe **DragonForce** aufgetaucht. Die Angreifer behaupten, **97 GB interner Daten** exfiltriert zu haben.

### Was wir wissen

- **Betroffen:** HanseMerkur Versicherungsgruppe
- **Angreifer:** DragonForce Ransomware-Gruppe
- **Behauptete Datenmenge:** ~97 GB
- **Datentyp:** Interne Unternehmensdaten

### DragonForce – Profil

DragonForce ist eine relativ neue Ransomware-Gruppe, die sich durch **doppelte Erpressung** (Double Extortion) auszeichnet:
1. Verschlüsselung der Systeme
2. Drohung mit Veröffentlichung gestohlener Daten

### Versicherungsbranche im Visier

Der Angriff reiht sich in einen **besorgniserregenden Trend**:
- Versicherungen sind attraktive Ziele wegen sensibler Kundendaten
- DSGVO-Meldepflichten verschärfen den Druck auf betroffene Unternehmen
- Potentielle Bußgelder bis zu 4% des weltweiten Jahresumsatzes

### Auswirkungen für Kunden

Sollten personenbezogene Daten betroffen sein, müsste HanseMerkur:
- Betroffene innerhalb von 72 Stunden informieren
- Datenschutzbehörde benachrichtigen
- Potentiell kostenlose Kredit-Monitoring-Dienste anbieten

### Empfehlungen für Versicherungskunden

1. Auf offizielle Kommunikation von HanseMerkur achten
2. Verdächtige E-Mails im Namen von HanseMerkur melden
3. Passwörter für Online-Portale ändern
4. Kontoauszüge auf verdächtige Aktivitäten prüfen`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    published_at: '2026-04-05T11:00:00Z',
    reading_time: 4,
    views: 1920,
    tags: ['HanseMerkur', 'DragonForce', 'Ransomware', 'Versicherung', 'DSGVO', 'Data Breach'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '14',
    slug: 'nsa-fbi-warnung-router-neustart-russische-akteure-dns-phishing',
    title: 'NSA & FBI: Router sofort neu starten – Russische Akteure kapern DNS für Phishing',
    excerpt: 'NSA und FBI warnen dringend: Russische Geheimdienstakteure kompromittieren gezielt Heimrouter, um DNS-Einträge für Phishing-Angriffe umzuleiten.',
    content: `## NSA & FBI warnen vor kompromittierten Routern

Am 7. April 2026 gaben **NSA und FBI** eine dringende gemeinsame Warnung heraus: Russische Geheimdienstakteure kompromittieren gezielt **Heimrouter**, um DNS-Einträge umzuleiten und großflächige Phishing-Angriffe durchzuführen.

### Angriffsvektor

1. Ausnutzung veralteter Router-Firmware mit bekannten Schwachstellen
2. Änderung der DNS-Konfiguration auf dem Router
3. Umleitung von Banking-, E-Mail- und Unternehmens-Websites
4. Phishing-Seiten sammeln Zugangsdaten ab

### Betroffene Geräte

- Router mit **veralteter Firmware** (älter als 2 Jahre)
- Geräte mit **Standard-Zugangsdaten**
- Consumer-Router in **Home-Office-Umgebungen**
- Besonders: TP-Link, Netgear, D-Link ältere Modelle

### Sofortmaßnahmen laut NSA/FBI

1. **Router sofort neu starten** (löscht temporäre Malware)
2. Firmware auf neueste Version updaten
3. Standard-Passwörter ändern
4. Remote-Management deaktivieren
5. DNS-Einstellungen auf Manipulation prüfen

### DACH-Relevanz

Mit der zunehmenden Home-Office-Nutzung in DACH-Unternehmen sind kompromittierte Heimrouter ein **direkter Angriffsvektor auf Unternehmensnetzwerke**:

- VPN-Verbindungen können über manipulierte DNS-Einträge umgeleitet werden
- MFA-Codes können über Phishing-Seiten abgefangen werden
- Enterprise-IT hat oft keine Kontrolle über Heimnetzwerk-Geräte`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    published_at: '2026-04-07T15:00:00Z',
    reading_time: 5,
    views: 2450,
    tags: ['NSA', 'FBI', 'Router', 'DNS', 'Russland', 'Phishing', 'Home Office'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '15',
    slug: 'dsgvo-bussgelder-7-1-milliarden-euro-transparency-enforcement-2026',
    title: 'DSGVO-Bußgelder erreichen 7,1 Milliarden Euro – Transparenz als Schwerpunkt 2026',
    excerpt: 'Europäische Datenschutzbehörden erheben durchschnittlich 443 Datenschutzmeldungen pro Tag – Transparenzpflichten werden 2026 zum Top-Enforcement-Thema.',
    content: `## DSGVO-Enforcement 2026 – Rekord-Bußgelder und Transparenz-Fokus

Die kumulierten **DSGVO-Bußgelder** seit Mai 2018 haben die Marke von **7,1 Milliarden Euro** erreicht. Der Enforcement-Schwerpunkt 2026 liegt auf **Transparenzpflichten**.

### Aktuelle Zahlen

- **7,1 Mrd. €** Gesamt-Bußgelder seit DSGVO-Inkrafttreten
- **~1,2 Mrd. €** Bußgelder allein in 2025
- **443 Datenschutzmeldungen pro Tag** (durchschnittlich)
- **+22%** Anstieg der täglichen Breach-Meldungen gegenüber Vorjahr
- **160.000+ Unternehmen** haben Verstöße bei Aufsichtsbehörden gemeldet

### Enforcement-Schwerpunkt 2026: Transparenz

Die **Coordinated Enforcement Action** des European Data Protection Board (EDPB) fokussiert auf:

1. Transparenz- und Informationspflichten nach Art. 12-14 DSGVO
2. Verständliche Erklärung der Datenverarbeitung
3. Cookie-Banner und Consent-Management
4. Datenschutzerklärungen und Privacy Notices

### Treiber des Anstiegs

- **Geopolitische Unruhen** und staatlich motivierte Angriffe
- **KI-gestützte Bedrohungen** erhöhen Breach-Wahrscheinlichkeit
- Wachsende Menge personenbezogener Daten in Cloud-Umgebungen

### Empfehlungen für DACH-Unternehmen

1. Datenschutzerklärungen auf Verständlichkeit prüfen
2. Cookie-Consent-Mechanismen EDPB-konform gestalten
3. Verarbeitungsverzeichnis aktuell halten
4. Datenschutz-Folgenabschätzungen für KI-Einsatz durchführen
5. Breach-Response-Prozesse für 72-Stunden-Frist optimieren`,
    category: 'dsgvo',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    published_at: '2026-04-04T09:00:00Z',
    reading_time: 5,
    views: 1680,
    tags: ['DSGVO', 'GDPR', 'Bußgeld', 'Transparenz', 'EDPB', 'Datenschutz'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '16',
    slug: 'bsi-linux-kernel-sicherheitsluecken-high-risk-april-2026',
    title: 'BSI warnt: Hochriskante Linux-Kernel-Schwachstellen – CVSS 8.6',
    excerpt: 'Das BSI hat am 9. April 2026 Updates zu mehreren hochriskanten Linux-Kernel-Schwachstellen herausgegeben – Remoteangriffe auf Debian, Red Hat, Ubuntu, SUSE und Amazon Linux möglich.',
    content: `## BSI-Warnung: Linux-Kernel-Schwachstellen

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat am **9. April 2026** mehrere Sicherheitswarnungen zu **hochriskanten Linux-Kernel-Schwachstellen** veröffentlicht.

### Details

- **Risikostufe:** 3 (Hoch)
- **CVSS Base Score:** 8.6
- **CVSS Temporal Score:** 7.5
- **Angriffsvektor:** Remote
- **Ursprüngliche Bekanntgabe:** 16. Dezember 2025

### Betroffene Systeme

- Debian Linux
- Amazon Linux 2
- Red Hat Enterprise Linux
- Ubuntu Linux
- SUSE Linux / SUSE openSUSE
- Oracle Linux
- Rocky Linux
- Open Source Linux Kernel

### Zusätzlich: FreeRDP-Schwachstellen

Das BSI warnt auch vor **FreeRDP-Sicherheitslücken** (CVSS 8.8):
- Betrifft Linux, UNIX und Windows
- Remote-Angriffe möglich
- Updates vom 9. April 2026 verfügbar

### Warum ist das relevant?

Linux ist das Rückgrat der meisten Serverinfrastrukturen in DACH:
- **~70%** aller Webserver laufen auf Linux
- Cloud-Instanzen (AWS, Azure, GCP) nutzen überwiegend Linux
- Container-Umgebungen (Docker, Kubernetes) basieren auf Linux

### Sofortmaßnahmen

1. Kernel-Updates der jeweiligen Distribution einspielen
2. FreeRDP auf neueste Version updaten
3. Systeme auf ungewöhnliche Remote-Zugriffe prüfen
4. Automatische Security-Updates aktivieren
5. BSI-Sicherheitswarnungen abonnieren (cert-bund.de)`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800',
    published_at: '2026-04-09T16:00:00Z',
    reading_time: 4,
    views: 1340,
    tags: ['BSI', 'Linux', 'Kernel', 'FreeRDP', 'Schwachstelle', 'Update'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '17',
    slug: 'veriftools-plattform-eine-million-gefaelschte-ausweise-verhaftungen',
    title: 'VerifTools-Razzia: Fast eine Million gefälschte Ausweise generiert – 8 Festnahmen',
    excerpt: 'Niederländische Polizei und FBI zerschlagen die Plattform VerifTools, die knapp eine Million gefälschte Identitätsdokumente generierte – acht Verdächtige festgenommen.',
    content: `## VerifTools – Industrielle Dokumentenfälschung zerschlagen

Anfang April 2026 haben **niederländische Polizei** und **FBI** in einer gemeinsamen Operation acht Personen festgenommen, die mit der Plattform **VerifTools** in Verbindung stehen.

### Die Plattform

- **Generierte Dokumente:** Fast **1 Million** gefälschte Identitätsdokumente
- **Dienste:** Automatisierte Erstellung realistischer Ausweise, Führerscheine, Pässe
- **Nutzung:** Identitätsbetrug, Geldwäsche, Account-Eröffnungen bei Finanzinstituten

### Operation

- **8 Festnahmen** in den Niederlanden
- Zusammenarbeit zwischen niederländischer Polizei und FBI
- Server und Infrastruktur beschlagnahmt
- Ermittlungen zu weiteren Nutzern laufen

### Bedeutung für Cybersecurity

Gefälschte Identitätsdokumente sind ein **Schlüsselelement** in der Cybercrime-Kette:

1. **KYC-Umgehung** bei Kryptobörsen und Finanzdienstleistern
2. **Fake-Accounts** auf Social-Media-Plattformen
3. **SIM-Swapping** mit gefälschten Ausweisen
4. **Geldwäsche** über unter falscher Identität eröffnete Konten

### DACH-Relevanz

Deutsche Unternehmen mit digitalen Identitätsverifikationsprozessen sollten:
1. Video-Ident-Verfahren auf Deepfake-Erkennung aufrüsten
2. Multi-Layer-Verification implementieren
3. Anomalie-Erkennung bei Kontoeröffnungen verstärken
4. Mit BaFin-Richtlinien zu Digital Identity abgleichen`,
    category: 'kritis',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800',
    published_at: '2026-04-06T08:00:00Z',
    reading_time: 4,
    views: 1120,
    tags: ['VerifTools', 'Identitätsbetrug', 'FBI', 'Festnahme', 'Dokumentenfälschung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '18',
    slug: 'ransomware-ohne-verschluesselung-pure-exfiltration-angriffe-2026',
    title: 'Ransomware ohne Verschlüsselung: Warum reine Datendiebstahl-Angriffe explodieren',
    excerpt: 'Der Trend zu "Encryption-less Ransomware" nimmt 2026 rasant zu – Angreifer setzen auf reine Datenexfiltration und Erpressung, ohne Systeme zu verschlüsseln.',
    content: `## Ransomware ohne Verschlüsselung – Der neue Trend

Die Ransomware-Landschaft verändert sich fundamental: Immer mehr Gruppen verzichten auf Verschlüsselung und setzen stattdessen auf **reine Datenexfiltration** als Druckmittel.

### Warum der Shift?

**Vorteile für Angreifer:**
- **Schneller:** Keine zeit- und ressourcenintensive Verschlüsselung
- **Leiser:** Weniger Alerts bei Security-Tools
- **Schwerer zu erkennen:** Keine typischen Ransomware-Signaturen
- **Flexibler:** Kein Risiko, dass Opfer aus Backups wiederherstellen

### Aktuelle Zahlen

- Reine Exfiltrations-Angriffe machen einen wachsenden Anteil der Ransomware-Vorfälle aus
- **Financial Services**, **Legal** und **Healthcare** sind Hauptziele in Europa
- Durchschnittliche Lösegeldforderung steigt bei reinem Datendiebstahl

### Wie funktioniert es?

1. **Initial Access:** Credentials-Diebstahl oder Schwachstellen-Ausnutzung
2. **Reconnaissance:** Identifikation wertvoller Daten
3. **Exfiltration:** Stilles Kopieren über verschlüsselte Kanäle
4. **Erpressung:** Drohung mit Veröffentlichung auf Leak-Sites

### Warum klassische Abwehr versagt

- **EDR:** Erkennt keine Verschlüsselungsaktivität (weil es keine gibt)
- **Backup-Strategie:** Nutzt nichts gegen Veröffentlichungsdrohung
- **DLP-Systeme:** Oft nicht auf verschleierte Exfiltration konfiguriert

### Gegenmaßnahmen

1. **Data Loss Prevention (DLP)** mit Fokus auf Exfiltrationserkennung
2. Netzwerk-Traffic auf ungewöhnliche Outbound-Datenmengen überwachen
3. Zero-Trust-Architektur mit Mikrosegmentierung
4. Datenklassifizierung und Zugriffskontrolle verschärfen
5. Incident-Response-Plan um Exfiltrations-Szenarien erweitern`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    published_at: '2026-04-12T10:00:00Z',
    reading_time: 6,
    views: 2010,
    tags: ['Ransomware', 'Exfiltration', 'Data Theft', 'Double Extortion', 'DLP'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '19',
    slug: 'apt28-prismex-malware-ukraine-spear-phishing-april-2026',
    title: 'APT28 setzt neue PRISMEX-Malware gegen Ukraine und Verbündete ein',
    excerpt: 'Russlands APT28 (Fancy Bear) führt eine neue Spear-Phishing-Kampagne gegen die Ukraine und ihre Verbündeten durch – mit der bisher unbekannten Malware-Suite PRISMEX.',
    content: `## APT28 – PRISMEX-Malware-Kampagne

Die russische Hackergruppe **APT28** (auch bekannt als **Fancy Bear** oder **Sofacy**) führt eine neue Spear-Phishing-Kampagne gegen die **Ukraine und ihre westlichen Verbündeten** durch.

### Die PRISMEX-Malware

- **Typ:** Bisher undokumentierte Malware-Suite
- **Verbreitung:** Spear-Phishing-E-Mails
- **Ziele:** Ukrainische Regierung, NATO-Verbündete, Verteidigungssektor
- **Fähigkeiten:** Multi-Stage-Payload mit modularer Architektur

### Angriffsvektor

1. Zielgerichtete Spear-Phishing-Mails an ausgewählte Personen
2. Manipulierte Dokumente mit Bezug zu aktuellen geopolitischen Themen
3. Mehrstufiger Infektionsprozess über Makros und DLL-Sideloading
4. Etablierung einer persistenten Backdoor

### APT28 – Hintergrund

- **Attribution:** Russischer Militärgeheimdienst GRU (Einheit 26165)
- **Aktiv seit:** Mindestens 2004
- **Bekannte Operationen:** Bundestag-Hack 2015, DNC-Hack 2016, WADA-Hack

### DACH-Relevanz

Deutschland ist als NATO-Mitglied und Ukraine-Unterstützer ein **primäres Ziel** für APT28:
- Bundesbehörden und Verteidigungsministerium
- Rüstungsunternehmen und Zulieferer
- Think-Tanks und politische Stiftungen
- Medien und Journalisten

### Schutzmaßnahmen

1. Spear-Phishing-Awareness speziell für Mitarbeiter in sensiblen Bereichen
2. E-Mail-Anhänge in Sandbox-Umgebungen analysieren
3. Makro-Ausführung in Office-Dokumenten einschränken
4. IOCs von Sicherheitsbehörden in eigene Systeme einpflegen
5. Zusammenarbeit mit BSI und BfV bei Verdachtsfällen`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800',
    published_at: '2026-04-11T14:00:00Z',
    reading_time: 5,
    views: 1780,
    tags: ['APT28', 'PRISMEX', 'Russland', 'Ukraine', 'Spear-Phishing', 'GRU'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '20',
    slug: 'aws-cli-command-injection-cve-2026-5059-cvss-9-8',
    title: 'AWS CLI Command Injection: CVE-2026-5059 mit CVSS 9.8 – Cloud-Infrastruktur gefährdet',
    excerpt: 'Eine kritische Command-Injection-Schwachstelle im aws-mcp-server ermöglicht Remote Code Execution über die AWS CLI – CVSS 9.8, sofortiges Handeln erforderlich.',
    content: `## AWS CLI Command Injection – CVE-2026-5059

Eine kritische Schwachstelle im **aws-mcp-server** ermöglicht Remote Code Execution über die AWS CLI.

### Technische Details

- **CVE:** CVE-2026-5059
- **CVSS:** 9.8 (Kritisch)
- **Typ:** Command Injection → Remote Code Execution
- **Betroffen:** aws-mcp-server mit AWS CLI Integration
- **Angriffsvektor:** Netzwerk, keine Authentifizierung erforderlich

### Angriffsvektor

Ein Angreifer kann über manipulierte Eingaben an den MCP-Server **beliebige Betriebssystembefehle** ausführen, die dann mit den AWS-Credentials des Servers laufen.

### Auswirkungen

- **Vollzugriff** auf die AWS-Umgebung des Servers
- Potentielle Kompromittierung der gesamten Cloud-Infrastruktur
- Datenexfiltration aus S3-Buckets, DynamoDB, etc.
- Erstellung neuer IAM-User mit Admin-Rechten
- Crypto-Mining auf EC2-Instanzen

### DACH-Relevanz

Cloud-Adoptionsrate in DACH steigt weiter – viele Unternehmen nutzen AWS als primären Cloud-Provider. MCP-Server-Integrationen werden immer populärer.

### Sofortmaßnahmen

1. aws-mcp-server sofort auf gepatchte Version updaten
2. AWS CloudTrail-Logs auf ungewöhnliche API-Aufrufe prüfen
3. IAM-Rollen nach Least-Privilege-Prinzip überprüfen
4. Netzwerkzugang zum MCP-Server einschränken
5. AWS GuardDuty aktivieren und Alerts konfigurieren`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2026-04-08T11:00:00Z',
    reading_time: 4,
    views: 1650,
    tags: ['AWS', 'CLI', 'Command Injection', 'CVE-2026-5059', 'Cloud Security', 'MCP'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '21',
    slug: 'sapienza-universitaet-rom-cyberangriff-offline',
    title: 'Sapienza Universität Rom: Europas größte Uni nach Cyberangriff tagelang offline',
    excerpt: 'Die Sapienza-Universität in Rom mit 120.000 Studierenden wurde Opfer eines massiven Cyberangriffs, der die gesamte IT-Infrastruktur für mehrere Tage lahmlegte.',
    content: `## Sapienza Universität Rom – Massiver Cyberangriff

Die **Sapienza-Universität in Rom**, eine der größten Universitäten Europas mit rund **120.000 Studierenden**, wurde Opfer eines schweren Cyberangriffs.

### Auswirkungen

- Gesamte IT-Infrastruktur für **mehrere Tage offline**
- E-Mail-Systeme, Studierendenportale und Verwaltungssysteme betroffen
- Prüfungen und Vorlesungen mussten teilweise verschoben werden
- Forschungsdaten potentiell gefährdet

### Bildungssektor als Ziel

Universitäten sind zunehmend attraktive Ziele:
- **Wertvolle Forschungsdaten** (Patente, unveröffentlichte Studien)
- Oft **veraltete IT-Infrastruktur** mit begrenztem Budget
- **Viele Nutzer** mit unterschiedlichen Geräten und Zugängen
- **Offene Netzwerke** für akademische Zusammenarbeit

### DACH-Relevanz

Deutsche Hochschulen waren in den letzten Jahren wiederholt Ziel von Cyberangriffen:
- Universität Duisburg-Essen (2022)
- Hochschule Karlsruhe (2023)
- HAW Hamburg (2023)

Unter NIS2 könnten größere Forschungseinrichtungen als **wichtige Einrichtungen** eingestuft werden.

### Empfehlungen für den Bildungssektor

1. Netzwerksegmentierung zwischen Verwaltung, Forschung und Studierenden
2. Backup-Strategie mit Offline-Backups
3. Security-Awareness-Programme für alle Nutzergruppen
4. Incident-Response-Plan mit klaren Verantwortlichkeiten
5. DFN-CERT-Warnungen zeitnah umsetzen`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    published_at: '2026-04-10T09:00:00Z',
    reading_time: 4,
    views: 980,
    tags: ['Universität', 'Bildung', 'Cyberangriff', 'Italien', 'KRITIS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '22',
    slug: 'totolink-router-command-injection-cve-2026-6140-cvss-9-8',
    title: 'Totolink A7100RU: Kritische Command Injection CVE-2026-6140 – CVSS 9.8',
    excerpt: 'Eine kritische OS-Command-Injection-Schwachstelle in Totolink-Routern erlaubt Remote-Angreifern die Ausführung beliebiger Befehle – kein Patch verfügbar.',
    content: `## Totolink A7100RU – CVE-2026-6140

Am 13. April 2026 wurde eine kritische Schwachstelle in der Firmware des **Totolink A7100RU** Routers veröffentlicht.

### Technische Details

- **CVE:** CVE-2026-6140
- **CVSS:** 9.8 (Kritisch)
- **Typ:** OS Command Injection im CGI Handler
- **Angriffsvektor:** Remote, ohne Authentifizierung
- **Patch:** Zum Zeitpunkt der Veröffentlichung **nicht verfügbar**

### Risiko

Ein Angreifer kann:
- Beliebige Betriebssystembefehle auf dem Router ausführen
- Vollständige Kontrolle über den Router erlangen
- DNS-Einträge manipulieren
- Netzwerkverkehr abfangen und umleiten
- Den Router als Sprungbrett ins interne Netzwerk nutzen

### Zusammenhang mit NSA/FBI-Warnung

Diese Schwachstelle passt direkt zur aktuellen **NSA/FBI-Warnung** vor kompromittierten Routern, die für DNS-Phishing missbraucht werden.

### Sofortmaßnahmen

1. Totolink A7100RU aus dem Netzwerk nehmen, wenn möglich
2. Remote-Management und WAN-Zugriff deaktivieren
3. Firmware-Updates des Herstellers überwachen
4. Alternativ: Router durch sicheres Modell ersetzen
5. Netzwerk-Monitoring auf ungewöhnlichen Router-Traffic`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    published_at: '2026-04-13T12:00:00Z',
    reading_time: 3,
    views: 870,
    tags: ['Totolink', 'Router', 'Command Injection', 'CVE-2026-6140', 'IoT'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '23',
    slug: 'cyber-erpressung-2026-deutscher-mittelstand-besonders-betroffen',
    title: 'Cyber-Erpressung 2026: Deutscher Mittelstand im Fadenkreuz',
    excerpt: 'Darktrace-Report zeigt: Deutschland ist 2026 das am häufigsten angegriffene Land in Europa – der Mittelstand ist besonders betroffen, da oft Budget und Personal fehlen.',
    content: `## Cyber-Erpressung 2026 – Mittelstand im Fokus

Der aktuelle **Darktrace-Report 2026** zeigt eine alarmierende Entwicklung: Deutschland ist das **am häufigsten angegriffene Land in Europa**, und der Mittelstand trägt die Hauptlast.

### Aktuelle Statistiken

- **1.345 Cyberangriffe pro Woche** auf deutsche Organisationen (Check Point)
- **+11% gegenüber Vorjahr**
- Mittelständische Unternehmen (50-500 Mitarbeiter) überproportional betroffen
- **Credential Theft** als Haupteinfallstor für Ransomware

### Warum der Mittelstand?

| Faktor | Problem |
|--------|---------|
| Budget | IT-Sicherheitsbudget oft < 5% des IT-Budgets |
| Personal | Kein dediziertes Security-Team |
| Awareness | Geschäftsführung unterschätzt Risiko |
| Legacy | Veraltete Systeme ohne Updates |
| Cloud | Unkontrollierte Cloud-Migration |

### Ransomware-Trend: Credential Theft als Hauptvektor

Die Angreifer haben ihren Ansatz geändert:
1. **Infostealer-Malware** stiehlt Browser-Zugangsdaten
2. Credentials werden auf Dark-Web-Marktplätzen verkauft
3. Initial Access Broker nutzen Credentials für Zugang
4. Ransomware-Gruppen kaufen fertigen Zugang

### Empfehlungen für den Mittelstand

1. **MFA überall aktivieren** – insbesondere für VPN und E-Mail
2. Managed Security Service Provider (MSSP) für SOC-Funktionen
3. Cyber-Versicherung mit angemessener Deckung
4. Regelmäßige Backup-Tests (nicht nur Erstellung!)
5. BSI-Grundschutz-Check als Ausgangspunkt
6. NIS2-Betroffenheit prüfen und Compliance sicherstellen`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    published_at: '2026-04-03T10:00:00Z',
    reading_time: 6,
    views: 3420,
    tags: ['Mittelstand', 'Ransomware', 'Deutschland', 'Darktrace', 'Credential Theft'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '24',
    slug: 'hack-for-hire-bitter-mena-journalisten-april-2026',
    title: 'Hack-for-Hire: Kampagne gegen Journalisten und Aktivisten im Nahen Osten aufgedeckt',
    excerpt: 'Access Now enthüllt eine Hack-for-Hire-Kampagne mit Verbindungen zur indischen Gruppe Bitter – ägyptische Journalisten und Regierungskritiker gezielt angegriffen.',
    content: `## Hack-for-Hire gegen MENA-Journalisten

Access Now hat eine **Hack-for-Hire-Kampagne** aufgedeckt, die gezielt **Journalisten, Aktivisten und Regierungsbeamte** im Nahen Osten und Nordafrika (MENA) angreift.

### Die Kampagne

- **Aufgedeckt von:** Access Now Digital Security Helpline
- **Verbindung zu:** Threat-Actor-Gruppe **Bitter** (mutmaßlich indischer Staatsbezug)
- **Ziele:** Ägyptische Journalisten und Regierungskritiker
- **Methode:** Spear-Phishing über Messenger-Dienste und E-Mail

### Betroffene

Namentlich identifiziert:
- **Mostafa Al-A'sar** – ägyptischer Journalist
- **Ahmed Eltantawy** – ägyptischer Politiker und Regierungskritiker

### Zusammenhang mit BSI/BfV-Warnung

Das BSI und der BfV haben im Februar 2026 einen **gemeinsamen Sicherheitshinweis** zu Phishing über Messengerdienste veröffentlicht – genau diese Methode wird in der MENA-Kampagne verwendet.

### Bedeutung für die Pressefreiheit

- Digitale Überwachung als Werkzeug autoritärer Regime
- Hack-for-Hire als wachsende Industrie
- Journalisten und Dissidenten als Hauptziele
- Ähnlichkeiten zur Pegasus-Spyware-Problematik

### Schutzempfehlungen für Journalisten

1. **Lockdown Mode** auf Apple-Geräten aktivieren
2. Separate Geräte für sensible Kommunikation verwenden
3. Signal oder andere E2E-verschlüsselte Messenger nutzen
4. Regelmäßige Geräte-Scans mit Amnesty Mobile Verification Toolkit
5. Digital-Security-Trainings bei Organisationen wie Access Now besuchen`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800',
    published_at: '2026-04-08T13:00:00Z',
    reading_time: 5,
    views: 1230,
    tags: ['Hack-for-Hire', 'Bitter', 'MENA', 'Journalisten', 'Spear-Phishing', 'Pressefreiheit'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '25',
    slug: 'marimo-rce-cve-2026-39987-10-stunden-exploit',
    title: 'Marimo RCE CVE-2026-39987: Innerhalb von 10 Stunden nach Disclosure ausgenutzt',
    excerpt: 'Eine kritische Pre-Auth RCE-Schwachstelle in der Python-Notebook-Plattform Marimo wurde nur 10 Stunden nach Veröffentlichung aktiv ausgenutzt – CVSS 9.3.',
    content: `## Marimo RCE – CVE-2026-39987

Die Python-Notebook-Plattform **Marimo** wurde Opfer einer kritischen Schwachstelle, die innerhalb von nur **10 Stunden** nach Disclosure aktiv ausgenutzt wurde.

### Technische Details

- **CVE:** CVE-2026-39987
- **CVSS:** 9.3 (Kritisch)
- **Typ:** Pre-Authenticated Remote Code Execution
- **Time-to-Exploit:** 10 Stunden nach Disclosure

### Warum ist die Geschwindigkeit besorgniserregend?

Die Exploitation-Geschwindigkeit zeigt einen **dramatischen Trend**:

| Schwachstelle | Time-to-Exploit |
|--------------|----------------|
| Langflow CVE-2026-33017 | 20 Stunden |
| Marimo CVE-2026-39987 | 10 Stunden |
| Trend: | Immer schneller |

Laut Statistik werden **32,1% aller ausgenutzten CVEs** am Tag der Veröffentlichung oder davor ausgenutzt.

### Risiko für Data-Science-Teams

Marimo ist ein beliebtes Tool für Data-Science und ML-Workflows:
- Oft auf Servern mit **Zugang zu sensiblen Daten** installiert
- Viele Instanzen **ohne Authentifizierung** im Internet erreichbar
- Data-Science-Teams haben oft **elevated permissions** auf Datenbanken

### Sofortmaßnahmen

1. Marimo sofort auf gepatchte Version updaten
2. Öffentlich erreichbare Instanzen absichern oder offline nehmen
3. Netzwerksegmentierung für Data-Science-Umgebungen
4. VPN-Pflicht für Zugriff auf Entwicklungstools
5. Automatisiertes CVE-Monitoring für alle eingesetzten Tools`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    published_at: '2026-04-07T08:00:00Z',
    reading_time: 4,
    views: 920,
    tags: ['Marimo', 'RCE', 'CVE-2026-39987', 'Python', 'Data Science', 'Zero-Day'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '26',
    slug: 'europaeische-kommission-teampcp-cloud-kompromittierung',
    title: 'EU-Kommission: TeamPCP-Kampagne kompromittiert Cloud-Infrastruktur über Trivy',
    excerpt: 'Die TeamPCP-Kampagne hat über eine manipulierte Version des Vulnerability-Scanners Trivy die Cloud- und Web-Infrastruktur der EU-Kommission infiltriert.',
    content: `## TeamPCP – EU-Kommission-Cloud kompromittiert

Die **TeamPCP-Kampagne** hat eine kompromittierte Version des populären Vulnerability-Scanners **Trivy** genutzt, um in die Cloud- und Web-Infrastruktur der **Europäischen Kommission** einzudringen.

### Angriffsvektor

1. Kompromittierung einer Trivy-Version in der Supply Chain
2. Einschleusen in CI/CD-Pipelines der EU-Kommission
3. Zugriff auf AWS-Umgebungen über gestohlene Credentials
4. Tausende Opfer über die Blast-Radius-Expansion

### Ironie des Angriffs

Ein **Vulnerability-Scanner** – ein Tool, das Sicherheitslücken finden soll – wurde selbst zum Angriffsvektor. Dies unterstreicht die Bedeutung von **Software Supply Chain Security**.

### Auswirkungen

- Zugriff auf **AWS-Umgebungen** der EU-Kommission
- Potentieller Zugang zu sensiblen EU-Dokumenten
- **Tausende weitere Opfer** durch die Verbreitung der manipulierten Version

### Lehren

1. **Supply-Chain-Verification:** Auch Security-Tools müssen verifiziert werden
2. **Signaturen prüfen:** Checksums und GPG-Signaturen validieren
3. **CI/CD-Security:** Pipeline-Integrität überwachen
4. **Least Privilege:** CI/CD-Credentials minimal halten
5. **SBOM:** Software Bill of Materials für alle eingesetzten Tools

### DACH-Relevanz

Viele DACH-Unternehmen nutzen Trivy in ihren DevOps-Pipelines. Eine Überprüfung der eingesetzten Versionen ist dringend empfohlen.`,
    category: 'kritis',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    published_at: '2026-04-11T10:00:00Z',
    reading_time: 5,
    views: 1560,
    tags: ['EU-Kommission', 'TeamPCP', 'Trivy', 'Supply Chain', 'Cloud Security', 'AWS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '27',
    slug: 'deutschland-1345-cyberangriffe-pro-woche-check-point-2026',
    title: '1.345 Cyberangriffe pro Woche: Deutschland verzeichnet 11% Anstieg',
    excerpt: 'Check Point registriert durchschnittlich 1.345 Cyberangriffe pro Organisation und Woche in Deutschland – ein Anstieg von 11% gegenüber dem Vorjahr.',
    content: `## Cyberangriffe auf Deutschland – Neue Rekordwerte

Laut **Check Point Research** verzeichnet Deutschland durchschnittlich **1.345 Cyberangriffe** pro Organisation und Woche – ein Anstieg von **11% gegenüber dem Vorjahr**.

### Zahlen im Detail

- **1.345** Angriffe pro Woche pro Organisation
- **+11%** Steigerung zum Vorjahr
- Deutschland unter den **Top-5 Angriffszielen** in Europa
- Cyberangriffe erreichen 2026 eine **neue Eskalationsstufe**

### Meistangegriffene Branchen

1. **Fertigung/Produktion** – OT/IT-Konvergenz als Einfallstor
2. **Gesundheitswesen** – Sensible Daten, oft veraltete Systeme
3. **Finanzdienstleistungen** – Direkter Zugang zu Geld
4. **Öffentlicher Sektor** – Politisch motivierte Angriffe
5. **Bildung** – Offene Netzwerke, viele Nutzer

### Angriffstrends 2026

- **Vulnerability Exploitation** überholt Phishing als primärer Initial Access Vektor
- **40% aller Einbrüche** gehen auf ausgenutzte Schwachstellen zurück (Cisco Talos)
- Time-to-Exploit schrumpft Richtung **"Day 0"**
- KI-gestützte Angriffe nehmen massiv zu

### Was Unternehmen tun sollten

1. Patch-Management auf < 24h für kritische CVEs beschleunigen
2. Angriffsfläche minimieren: Unnötige Internet-Exposure reduzieren
3. XDR/EDR-Lösungen mit KI-basierter Erkennung einsetzen
4. Red-Team-Übungen mindestens jährlich durchführen
5. Threat Intelligence Feeds in Security Operations integrieren`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800',
    published_at: '2026-04-02T08:00:00Z',
    reading_time: 5,
    views: 2890,
    tags: ['Deutschland', 'Check Point', 'Cyberangriffe', 'Statistik', '2026'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '28',
    slug: 'bfv-bsi-phishing-messenger-warnung-2026',
    title: 'BfV & BSI warnen gemeinsam: Staatliche Phishing-Angriffe über Messenger nehmen zu',
    excerpt: 'Bundesverfassungsschutz und BSI veröffentlichen gemeinsamen Sicherheitshinweis zu Phishing über Messenger-Dienste – staatlich gesteuerte Akteure aus Russland, China, Iran und Nordkorea im Fokus.',
    content: `## BfV & BSI – Gemeinsame Warnung vor Messenger-Phishing

Der **Bundesverfassungsschutz (BfV)** und das **BSI** haben einen gemeinsamen Sicherheitshinweis zu **Phishing über Messenger-Dienste** veröffentlicht.

### Bedrohungsakteure

Staatlich gesteuerte Cybergruppen aus:
- **Russland** (APT28, APT29, Sandworm)
- **China** (APT40, APT41)
- **Iran** (APT33, APT35)
- **Nordkorea** (Lazarus Group, Kimsuky)

### Methoden

Die Angreifer nutzen zunehmend **Messenger-Dienste** statt klassischer E-Mail:

1. **WhatsApp:** Kontaktaufnahme über vermeintlich bekannte Kontakte
2. **Signal:** Ausnutzung des Vertrauens in sichere Messenger
3. **Telegram:** Fake-Gruppen und -Kanäle
4. **LinkedIn/Teams:** Berufliche Kontexte für Vertrauensaufbau

### Warum Messenger?

- Weniger E-Mail-Security-Filter
- Persönlichere Kommunikation → höheres Vertrauen
- Mobile Geräte mit weniger Security-Software
- Oft keine Enterprise-Kontrolle auf privaten Geräten

### Ziele in Deutschland

- Bundesbehörden und Ministerien
- Politische Entscheidungsträger
- Kritische Infrastruktur-Betreiber
- Forschungseinrichtungen
- Verteidigungssektor und Rüstungsindustrie

### Schutzmaßnahmen

1. Kontaktanfragen über Messenger kritisch prüfen
2. Links aus unbekannten Nachrichten nicht anklicken
3. Verdächtige Nachrichten an IT-Sicherheitsbeauftragte melden
4. Separate Geräte für dienstliche und private Kommunikation
5. Regelmäßige Security-Awareness-Schulungen`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
    published_at: '2026-04-05T08:00:00Z',
    reading_time: 5,
    views: 2130,
    tags: ['BfV', 'BSI', 'Phishing', 'Messenger', 'Staatliche Akteure', 'Warnung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '29',
    slug: 'vulnerability-exploitation-ueberholt-phishing-cisco-talos-2026',
    title: 'Paradigmenwechsel: Schwachstellen-Ausnutzung überholt Phishing als #1 Angriffsvektor',
    excerpt: 'Cisco Talos bestätigt: Fast 40% aller Einbrüche 2026 gehen auf ausgenutzte Schwachstellen zurück – ein fundamentaler Shift in der Bedrohungslandschaft.',
    content: `## Schwachstellen statt Phishing – Der neue #1 Angriffsvektor

**Cisco Talos** berichtet, dass **Vulnerability Exploitation** erstmals **Phishing als primären Initial-Access-Vektor** überholt hat.

### Die Zahlen

- **~40%** aller Einbrüche durch ausgenutzte Schwachstellen (Q4 2025)
- **32,1%** der CVEs werden am Tag der Veröffentlichung oder davor ausgenutzt
- Time-to-Exploit schrumpft auf **"Day 0"**
- Phishing fällt auf Platz 2 zurück

### Warum der Paradigmenwechsel?

1. **Automatisierung:** Angreifer nutzen Tools zur automatischen Schwachstellensuche
2. **KI:** Modelle wie Mythos zeigen das Potential zur Schwachstellenfindung
3. **Größere Angriffsfläche:** Mehr Internet-exponierte Dienste als je zuvor
4. **Patch-Verzögerungen:** Unternehmen patchen zu langsam

### Top ausgenutzte Schwachstellen-Kategorien

1. **Authentication Bypass** – Zugang ohne Credentials
2. **Remote Code Execution** – Direkter Systemzugriff
3. **Command Injection** – Betriebssystembefehle ausführen
4. **Path Traversal** – Dateisystemzugriff
5. **Deserialization** – Codeausführung über manipulierte Daten

### Konsequenzen für die Verteidigung

- **Patch-Management** wird zur **#1 Priorität**
- Vulnerability-Scanning muss **kontinuierlich** stattfinden
- **External Attack Surface Management** (EASM) essentiell
- Zero-Day-Budget für **Virtual Patching** und **WAF** einplanen
- Umstellung von reaktivem auf **proaktives** Vulnerability Management`,
    category: 'ki-security',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-04-04T14:00:00Z',
    reading_time: 5,
    views: 2560,
    tags: ['Cisco Talos', 'Vulnerability', 'Phishing', 'Angriffsvektor', 'Patch Management'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '30',
    slug: 'ki-browser-extensions-blindspot-layerx-report-2026',
    title: 'KI-Browser-Extensions: 60% anfälliger und 3x mehr Cookie-Zugriff',
    excerpt: 'LayerX-Report enthüllt: KI-basierte Browser-Extensions sind 60% anfälliger als durchschnittliche Extensions und haben dreimal häufiger Zugriff auf Cookies.',
    content: `## KI-Browser-Extensions als Sicherheits-Blindspot

Der aktuelle **LayerX Security Report** zeigt eine alarmierende Situation: KI-basierte Browser-Extensions stellen ein **erhebliches und oft übersehenes Sicherheitsrisiko** dar.

### Kernergebnisse

- KI-Extensions sind **60% anfälliger** als durchschnittliche Extensions
- **3x häufiger** Zugriff auf Cookies
- Oft mit **übermäßigen Berechtigungen** ausgestattet
- Enterprise-Browser-Policies decken KI-Extensions oft **nicht** ab

### Warum sind KI-Extensions riskanter?

| Risikofaktor | Erklärung |
|--------------|-----------|
| Datenexfiltration | KI-Extensions verarbeiten oft den Seiteninhalt |
| Cookie-Zugriff | Session-Tokens können abgegriffen werden |
| Schnelle Entwicklung | Security-Reviews halten nicht Schritt |
| Vertrauen | Nutzer vertrauen "KI-Tools" oft blind |
| API-Anbindung | Daten werden an externe Server gesendet |

### Prominente Risiko-Szenarien

1. **ChatGPT-Clones:** Fake-Extensions, die als KI-Assistenten getarnt sind
2. **KI-Zusammenfassungstools:** Lesen den gesamten Seiteninhalt mit
3. **KI-Schreibassistenten:** Zugriff auf Formularinhalte und Passwortfelder
4. **KI-Bildgeneratoren:** Oft mit Crypto-Mining oder Adware gebündelt

### Empfehlungen

1. **Browser-Extension-Policy** um KI-spezifische Regeln erweitern
2. Nur genehmigte Extensions in Enterprise-Umgebungen zulassen
3. Regelmäßiges Audit der installierten Extensions
4. Berechtigungen der Extensions auf Minimum beschränken
5. Nutzer über Risiken von KI-Extensions aufklären`,
    category: 'ki-security',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800',
    published_at: '2026-04-06T12:00:00Z',
    reading_time: 5,
    views: 1890,
    tags: ['KI', 'Browser Extensions', 'LayerX', 'Chrome', 'Cookie', 'Enterprise Security'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '31',
    slug: 'hornetsecurity-monthly-threat-report-april-2026',
    title: 'Hornetsecurity Threat Report April 2026: E-Mail bleibt Angriffsvektor Nr. 1',
    excerpt: 'Der monatliche Threat Report von Hornetsecurity zeigt: Trotz des Shifts zu Vulnerability Exploitation bleibt E-Mail der wichtigste Einstiegspunkt für Social Engineering.',
    content: `## Hornetsecurity Monthly Threat Report – April 2026

Der monatliche **Hornetsecurity Threat Report** für April 2026 analysiert die aktuelle E-Mail-Bedrohungslandschaft.

### Key Findings

- E-Mail bleibt der **wichtigste Vektor** für Social Engineering
- **Spear-Phishing-Qualität** steigt durch KI-generierte Inhalte
- HTML-Smuggling und QR-Code-Phishing nehmen zu
- **Malware-Verteilung** über Office-Dokumente rückläufig dank Makro-Blockierung

### Top E-Mail-Bedrohungen April 2026

1. **KI-generierte Phishing-Mails** – grammatisch perfekt, kontextbezogen
2. **QR-Code-Phishing (Quishing)** – umgeht Text-basierte Filter
3. **HTML-Smuggling** – Malware in HTML-Anhängen versteckt
4. **Thread-Hijacking** – Antworten in echte E-Mail-Konversationen
5. **PDF-Exploits** – Bezug zu CVE-2026-34621

### Branchen-Analyse DACH

| Branche | Bedrohungslevel |
|---------|----------------|
| Fertigung | Sehr hoch |
| Logistik | Hoch |
| Finanzwesen | Hoch |
| Öffentlicher Sektor | Mittel-Hoch |
| Bildung | Mittel |

### Empfehlungen

1. E-Mail-Security-Gateways mit KI-Erkennung ausstatten
2. QR-Code-Scanning in Sicherheitslösungen integrieren
3. DMARC, DKIM und SPF vollständig implementieren
4. Regelmäßige Phishing-Simulationen durchführen
5. Sofortige Meldewege für verdächtige E-Mails einrichten`,
    category: 'phishing',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800',
    published_at: '2026-04-13T09:00:00Z',
    reading_time: 4,
    views: 1120,
    tags: ['Hornetsecurity', 'E-Mail', 'Phishing', 'Threat Report', 'QR-Code', 'HTML Smuggling'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '32',
    slug: 'uat-10362-lucidrook-malware-taiwan-ngos',
    title: 'Neuer Threat-Cluster UAT-10362: Lua-basierte Malware LucidRook gegen Taiwan',
    excerpt: 'Ein bisher unbekannter Threat-Cluster UAT-10362 greift taiwanesische NGOs mit der neuen Lua-basierten Malware LucidRook über Spear-Phishing an.',
    content: `## UAT-10362 – LucidRook-Malware gegen Taiwan

Ein bisher **undokumentierter Threat-Cluster** mit der Bezeichnung **UAT-10362** führt Spear-Phishing-Kampagnen gegen **taiwanesische NGOs und Universitäten** durch.

### Die LucidRook-Malware

- **Typ:** Backdoor/RAT
- **Sprache:** Lua-basiert (ungewöhnlich)
- **Verbreitung:** Spear-Phishing-E-Mails
- **Ziele:** NGOs, Universitäten in Taiwan
- **Fähigkeiten:** Command & Control, Datenexfiltration, Screenshot-Capture

### Warum Lua?

Lua als Malware-Sprache ist ungewöhnlich und bietet Vorteile:
- **Geringe Erkennung:** AV-Engines sind weniger auf Lua trainiert
- **Leichtgewichtig:** Kleine Payload-Größe
- **Einbettbar:** Kann in legitime Lua-Anwendungen eingebettet werden
- **Cross-Platform:** Läuft auf verschiedenen Betriebssystemen

### Geopolitischer Kontext

Der Angriff auf taiwanesische Einrichtungen reiht sich in eine **Zunahme von Cyberspionage-Aktivitäten** im Kontext der Spannungen in der Taiwanstraße ein.

### DACH-Relevanz

Deutsche Unternehmen mit Geschäftsbeziehungen zu Taiwan oder in der Halbleiterindustrie sollten besonders aufmerksam sein. TSMC-Zulieferer und Technologie-Partner könnten als **Sekundärziele** in Frage kommen.

### IOCs und Empfehlungen

1. Threat Intelligence Feeds auf UAT-10362-Indikatoren aktualisieren
2. Lua-Runtime-Prozesse in Monitoring aufnehmen
3. E-Mail-Anhänge aus der Region besonders prüfen
4. Netzwerkkommunikation zu bekannten C2-Servern blockieren`,
    category: 'kritis',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-04-12T14:00:00Z',
    reading_time: 4,
    views: 670,
    tags: ['UAT-10362', 'LucidRook', 'Lua', 'Taiwan', 'Spear-Phishing', 'APT'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '33',
    slug: 'check-point-threat-intelligence-report-13-april-2026',
    title: 'Check Point Weekly Threat Report: Die gefährlichsten Angriffe der Woche',
    excerpt: 'Der wöchentliche Threat-Intelligence-Report von Check Point vom 13. April 2026 fasst die kritischsten Cyberbedrohungen der vergangenen Woche zusammen.',
    content: `## Check Point Threat Intelligence – 13. April 2026

Der wöchentliche Bericht von **Check Point Research** fasst die kritischsten Bedrohungen zusammen.

### Top Threats der Woche

**1. CPUID Supply-Chain-Angriff**
- CPU-Z und HWMonitor mit STX RAT trojanisiert
- Über 150 bestätigte Opfer
- Russischsprachige Angreifer

**2. ChipSoft Ransomware**
- 80% der niederländischen Krankenhäuser betroffen
- Patientendaten potentiell gefährdet
- Healthcare-Sektor weiter im Visier

**3. Rockstar Games / ShinyHunters**
- 78,6 Mio. Datensätze über Snowflake-Kompromittierung
- Third-Party-Risk als Einfallstor
- Ransom nicht bezahlt → Daten veröffentlicht

**4. Fortinet FortiClient EMS**
- CVE-2026-35616 aktiv ausgenutzt
- Pre-Auth API Bypass → Privilege Escalation
- CISA KEV Eintrag

**5. Chrome Zero-Day CVE-2026-5281**
- Use-After-Free in Dawn/WebGPU
- Aktive Ausnutzung bestätigt
- Sofortiges Update erforderlich

### Empfohlene Aktionen

1. Alle genannten Patches sofort einspielen
2. Supply-Chain-Integrität der eigenen Tools prüfen
3. Third-Party-Zugänge auditieren
4. Browser-Updates zentral durchsetzen
5. IOCs in SIEM/SOC einpflegen`,
    category: 'ki-security',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    published_at: '2026-04-13T15:00:00Z',
    reading_time: 4,
    views: 1450,
    tags: ['Check Point', 'Threat Intelligence', 'Weekly Report', 'Zusammenfassung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '34',
    slug: 'qualys-report-cyberangriffe-digitale-infrastruktur-beschleunigung',
    title: 'Qualys-Report: Cyberangriffe auf digitale Infrastruktur beschleunigen sich dramatisch',
    excerpt: 'Laut aktuellem Qualys-Report beschleunigen sich Angriffe auf digitale Infrastruktur massiv – KI und Automatisierung treiben die Geschwindigkeit der Exploitation.',
    content: `## Qualys-Report: Beschleunigte Angriffe auf Infrastruktur

Der aktuelle **Qualys Threat Research Report** zeigt eine **dramatische Beschleunigung** von Cyberangriffen auf digitale Infrastrukturen.

### Kernergebnisse

- Angriffe auf digitale Infrastruktur nehmen **exponentiell** zu
- **KI und Automatisierung** verkürzen die Exploit-Entwicklungszeit
- **Patch-Lücken** werden schneller ausgenutzt als je zuvor
- Exploits werden zunehmend **als Service** angeboten

### Beschleunigungs-Treiber

1. **KI-gestützte Exploitation:** Automatisierte Schwachstellenfindung
2. **Exploit-as-a-Service:** Fertige Exploits auf Dark-Web-Marktplätzen
3. **Größere Angriffsfläche:** Mehr Cloud-Dienste, APIs, IoT-Geräte
4. **Langsames Patching:** Durchschnittliche Patch-Zeit zu hoch

### Empfehlungen von Qualys

- **Continuous Vulnerability Management** statt periodischer Scans
- **Risk-Based Prioritization:** CVSS allein reicht nicht
- **Asset Inventory:** Man kann nicht schützen, was man nicht kennt
- **Automated Remediation:** Patches automatisch ausrollen wo möglich
- **Threat Intelligence Integration:** Exploit-Verfügbarkeit in Priorisierung einbeziehen

### DACH-Implikation

Deutsche Unternehmen sollten ihre **Mean Time to Patch (MTTP)** drastisch reduzieren – idealerweise auf unter **48 Stunden** für kritische, aktiv ausgenutzte Schwachstellen.`,
    category: 'ki-security',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800',
    published_at: '2026-04-13T11:00:00Z',
    reading_time: 4,
    views: 890,
    tags: ['Qualys', 'Vulnerability Management', 'Automatisierung', 'KI', 'Patch Management'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '35',
    slug: 'dsgvo-transparency-enforcement-edpb-coordinated-action-2026',
    title: 'EDPB Coordinated Enforcement 2026: Transparenzpflichten im Fokus der Aufsichtsbehörden',
    excerpt: 'Der European Data Protection Board startet seine 2026 Coordinated Enforcement Action mit Fokus auf Transparenz- und Informationspflichten nach Art. 12-14 DSGVO.',
    content: `## EDPB Coordinated Enforcement 2026 – Transparenz

Der **European Data Protection Board (EDPB)** hat die Themen für die **Coordinated Enforcement Action 2026** bekannt gegeben: **Transparenz- und Informationspflichten**.

### Was bedeutet das?

Alle EU-Datenschutzbehörden werden koordiniert prüfen, ob Unternehmen:

1. **Art. 12 DSGVO:** Informationen in verständlicher Form bereitstellen
2. **Art. 13 DSGVO:** Bei Datenerhebung vollständig informieren
3. **Art. 14 DSGVO:** Bei indirekter Datenerhebung informieren

### Prüfschwerpunkte

- **Cookie-Banner:** Sind sie DSGVO-konform?
- **Datenschutzerklärungen:** Verständlich und vollständig?
- **Consent-Management:** Echte Einwilligung oder Dark Patterns?
- **KI-Transparenz:** Wird der Einsatz von KI offengelegt?
- **Drittlands-Transfers:** Werden Nutzer informiert?

### Risiken für DACH-Unternehmen

Bei Verstößen gegen Transparenzpflichten drohen:
- Bußgelder bis zu **20 Mio. € oder 4% des Jahresumsatzes**
- **Abmahnungen** durch Verbraucherschutzverbände
- **Klagen** von Betroffenen auf Schadensersatz

### Handlungsempfehlungen

1. Datenschutzerklärung auf Vollständigkeit und Verständlichkeit prüfen
2. Cookie-Banner EDPB-konform gestalten (kein "Nudging")
3. KI-Einsatz in Datenschutzerklärung offenlegen
4. Verarbeitungsverzeichnis aktualisieren
5. Privacy-by-Design für neue Projekte sicherstellen`,
    category: 'dsgvo',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    published_at: '2026-04-02T10:00:00Z',
    reading_time: 5,
    views: 1350,
    tags: ['EDPB', 'DSGVO', 'Transparenz', 'Cookie-Banner', 'Enforcement', 'Art. 12-14'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '36',
    slug: 'eviltokens-phishing-as-a-service-device-code-microsoft',
    title: 'EvilTokens: Neuer PhaaS-Dienst macht Device-Code-Phishing zum Massengeschäft',
    excerpt: 'Der neue Phishing-as-a-Service-Dienst EvilTokens automatisiert Device-Code-Phishing-Angriffe auf Microsoft 365 – ohne technische Kenntnisse durchführbar.',
    content: `## EvilTokens – Device-Code-Phishing für jedermann

Der neue **Phishing-as-a-Service (PhaaS)** Dienst **EvilTokens** macht Device-Code-Phishing-Angriffe auf Microsoft 365 zum **Massengeschäft**.

### Was ist EvilTokens?

- **Typ:** Phishing-as-a-Service Plattform
- **Ziel:** Microsoft 365 Device-Code-Authentifizierung
- **Preis:** Abonnement-basiert auf Dark-Web-Marktplätzen
- **Einstiegshürde:** Minimal – kein technisches Wissen nötig

### Funktionsumfang

1. **Automatische Phishing-Seiten:** Generiert realistische Microsoft-Login-Seiten
2. **Token-Harvesting:** Fängt OAuth-Tokens automatisch ab
3. **Dashboard:** Echtzeit-Übersicht über kompromittierte Konten
4. **Post-Compromise-Tools:** Automatisches E-Mail-Scanning und Datenexfiltration
5. **Evasion:** Nutzt kompromittierte legitime Domains als Infrastruktur

### Zusammenhang mit Microsoft-Warnung

EvilTokens wurde als **Haupttreiber** der von Microsoft dokumentierten Device-Code-Phishing-Kampagne identifiziert, die täglich hunderte Organisationen kompromittiert.

### Schutzmaßnahmen

1. Device-Code-Flow in Azure AD Conditional Access einschränken
2. Verdächtige OAuth-App-Registrierungen überwachen
3. Phishing-resistente MFA (FIDO2, Windows Hello) einsetzen
4. Microsoft Defender for Cloud Apps aktivieren
5. Regelmäßige Überprüfung der Consent Grants`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800',
    published_at: '2026-04-07T12:00:00Z',
    reading_time: 4,
    views: 1780,
    tags: ['EvilTokens', 'PhaaS', 'Device Code', 'Microsoft 365', 'OAuth', 'Phishing'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '37',
    slug: 'blackfog-state-of-ransomware-2026-report',
    title: 'State of Ransomware 2026: Rekordjahr für Cybererpressung erwartet',
    excerpt: 'Der BlackFog State of Ransomware Report 2026 zeigt: Ransomware-Angriffe nehmen in Häufigkeit und Raffinesse weiter zu – 2026 wird ein Rekordjahr.',
    content: `## State of Ransomware 2026 – BlackFog Report

Der **BlackFog State of Ransomware Report 2026** zeichnet ein düsteres Bild: Die Ransomware-Bedrohung erreicht **neue Höchststände**.

### Globale Trends

- Ransomware-Vorfälle nehmen **weiter zu**
- **Datenexfiltration** ohne Verschlüsselung als wachsender Trend
- Durchschnittliche Lösegeldforderung steigt
- **Median-Ausfallzeit** bleibt bei ~21 Tagen

### Meistbetroffene Sektoren

1. **Healthcare** – ChipSoft als aktuelles Beispiel
2. **Financial Services** – Hohe Zahlungsbereitschaft
3. **Manufacturing** – OT-Systeme als Druckmittel
4. **Government** – Politische Motivation
5. **Education** – Geringe Budgets

### Ransomware-Gruppen 2026

Aktive Gruppen im DACH-Raum:
- **Qilin** – Angriff auf Die Linke
- **DragonForce** – Angriff auf HanseMerkur
- **ShinyHunters** – Rockstar Games
- **LockBit 4.0** – Weiterhin aktiv trotz Takedowns
- **BlackBasta** – DACH-Fokus

### Anti-Ransomware-Strategie

1. **3-2-1 Backup-Regel:** 3 Kopien, 2 Medien, 1 offsite
2. **Netzwerksegmentierung** – Laterale Bewegung verhindern
3. **EDR/XDR** mit Anti-Ransomware-Modulen
4. **Incident Response Retainer** bei einem DFIR-Dienstleister
5. **Tabletop Exercises** für Ransomware-Szenarien`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    published_at: '2026-04-11T11:00:00Z',
    reading_time: 5,
    views: 1670,
    tags: ['Ransomware', 'BlackFog', 'Report', '2026', 'Trends', 'Double Extortion'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '38',
    slug: 'nis2-registrierungsfrist-abgelaufen-was-jetzt-droht',
    title: 'NIS2-Registrierungsfrist abgelaufen: Was betroffenen Unternehmen jetzt droht',
    excerpt: 'Die NIS2-Registrierungsfrist beim BSI lief am 6. März 2026 ab – viele der 29.500 betroffenen Unternehmen haben noch nicht registriert. Die Konsequenzen.',
    content: `## NIS2-Registrierungsfrist abgelaufen

Die **Registrierungsfrist** beim BSI für NIS2-betroffene Unternehmen lief am **6. März 2026** ab. Doch viele der **29.500 betroffenen Unternehmen** haben noch nicht gehandelt.

### Aktuelle Situation

- Verspätete Registrierungen sind **weiterhin möglich**
- Aber: **Keine Schonfrist** für die Umsetzung der Maßnahmen
- BSI beginnt mit **stichprobenartigen Überprüfungen**
- Erste Bußgeldverfahren werden vorbereitet

### Wer ist betroffen?

**Besonders wichtige Einrichtungen:**
- Energie, Verkehr, Bankwesen, Finanzmarkt
- Gesundheit, Trinkwasser, Abwasser
- Digitale Infrastruktur, ICT-Dienstleistungen
- Öffentliche Verwaltung, Weltraum

**Wichtige Einrichtungen:**
- Post, Abfall, Chemie, Lebensmittel
- Verarbeitendes Gewerbe, Digitale Dienste
- Forschung

### Konsequenzen bei Nicht-Compliance

| Verstoß | Bußgeld |
|---------|---------|
| Nicht-Registrierung | Bis 500.000 € |
| Fehlende TOM | Bis 10 Mio. € / 2% Umsatz |
| Meldepflicht-Verstoß | Bis 10 Mio. € / 2% Umsatz |
| Persönliche Haftung | Geschäftsleitung haftet persönlich |

### Sofort-Maßnahmen

1. **Jetzt registrieren** – bsi.bund.de/NIS2
2. Gap-Analyse durchführen
3. Verantwortliche Person benennen
4. Meldeprozesse implementieren
5. Schulungen für Geschäftsleitung`,
    category: 'nis2',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800',
    published_at: '2026-04-01T09:00:00Z',
    reading_time: 5,
    views: 4560,
    tags: ['NIS2', 'BSI', 'Registrierung', 'Compliance', 'Bußgeld', 'Frist'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '39',
    slug: 'windows-fake-support-site-datendiebstahl-april-2026',
    title: 'Warnung: Gefälschte Windows-11-Support-Seite stiehlt Daten und umgeht Antivirus',
    excerpt: 'Eine gefälschte Windows-11-Support-Website bietet ein angebliches Update an, das in Wahrheit Daten stiehlt und Antivirensoftware umgeht.',
    content: `## Fake Windows 11 Support – Datendiebstahl

Eine aufwendig gestaltete **gefälschte Windows-11-Support-Website** verbreitet Malware, die als System-Update getarnt ist.

### Angriffsvektor

1. Opfer findet die Seite über SEO-Poisoning oder Werbeanzeigen
2. Professionelles Design imitiert offizielle Microsoft-Seite
3. "Update" wird heruntergeladen und ausgeführt
4. Malware sammelt Daten und umgeht AV-Software

### Gestohlene Daten

- Browser-Passwörter und Autofill-Daten
- Kryptowährungs-Wallets
- Session-Cookies für Social Media und Banking
- System-Informationen und installierte Software

### AV-Evasion

Die Malware nutzt mehrere Techniken zur Umgehung:
- **Code-Signierung** mit gestohlenen Zertifikaten
- **Polymorphe Payload** – ändert sich bei jedem Download
- **Living-off-the-Land** – nutzt legitime Windows-Tools
- **Zeitverzögerung** – wird erst nach Stunden aktiv

### Schutzmaßnahmen

1. Windows-Updates **nur über Windows Update** beziehen
2. URLs von Microsoft-Seiten sorgfältig prüfen
3. Downloads nur von **microsoft.com** herunterladen
4. Browser-Warnungen nicht ignorieren
5. Werbeblocker verwenden, um SEO-Poisoning zu reduzieren`,
    category: 'phishing',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800',
    published_at: '2026-04-12T08:00:00Z',
    reading_time: 3,
    views: 890,
    tags: ['Windows 11', 'Fake Update', 'Malware', 'SEO Poisoning', 'Datendiebstahl'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '40',
    slug: 'unifi-play-critical-vulnerabilities-cve-2026-22564-22562',
    title: 'UniFi Play: Zwei kritische CVSS-9.8-Schwachstellen entdeckt',
    excerpt: 'Zwei kritische Schwachstellen (CVE-2026-22564, CVE-2026-22562) mit CVSS 9.8 betreffen UniFi Play Geräte von Ubiquiti – sofortiger Patch erforderlich.',
    content: `## UniFi Play – Doppelte kritische Schwachstellen

Ubiquiti hat Sicherheitsupdates für zwei **kritische Schwachstellen** in UniFi Play Geräten veröffentlicht.

### CVE-2026-22564

- **CVSS:** 9.8 (Kritisch)
- **Betroffen:** UniFi Play Geräte
- **Angriffsvektor:** Remote, ohne Authentifizierung

### CVE-2026-22562

- **CVSS:** 9.8 (Kritisch)
- **Betroffen:** UniFi Play Geräte
- **Angriffsvektor:** Remote, ohne Authentifizierung

### Risiko

UniFi-Geräte werden häufig in **Unternehmensumgebungen** eingesetzt:
- Schulen und Universitäten
- Hotels und Gaststätten
- KMU-Netzwerke
- Managed-Service-Provider

Eine Kompromittierung kann zur **Übernahme der gesamten Netzwerkinfrastruktur** führen.

### DACH-Relevanz

Ubiquiti/UniFi hat im DACH-Raum eine **starke Marktpräsenz**, besonders bei:
- Managed-Service-Providern (MSPs)
- Klein- und Mittelunternehmen
- Bildungseinrichtungen

### Sofortmaßnahmen

1. Alle UniFi Play Geräte sofort updaten
2. UniFi Controller auf neueste Version bringen
3. Netzwerk auf verdächtige Aktivitäten prüfen
4. Remote-Management-Zugang einschränken
5. Firmware-Auto-Updates aktivieren`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    published_at: '2026-04-10T15:00:00Z',
    reading_time: 3,
    views: 760,
    tags: ['UniFi', 'Ubiquiti', 'CVE-2026-22564', 'CVE-2026-22562', 'Netzwerk', 'IoT'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '41',
    slug: 'ki-krise-kontrolle-cfr-analyse-april-2026',
    title: 'KI-Kontrollkrise: Warum die Industrie ihr eigenes Sicherheitsproblem nicht lösen kann',
    excerpt: 'Der Council on Foreign Relations analysiert die wachsende KI-Kontrollkrise – ohne nationale Regulierung und Meldestandards beurteilen KI-Unternehmen ihre eigene Sicherheit.',
    content: `## KI-Kontrollkrise – Analyse des CFR

Der **Council on Foreign Relations (CFR)** warnt: Die KI-Industrie steht vor einer **Krise der Kontrolle** – und die regulatorische Antwort bleibt unzureichend.

### Kernprobleme

1. **Keine nationale KI-Policy:** Kein verbindlicher Rahmen für KI-Sicherheit
2. **Selbstregulierung:** KI-Unternehmen "benoten ihre eigenen Hausaufgaben"
3. **Fehlende Meldepflichten:** Keine Standards für Disclosure von KI-Sicherheitsvorfällen
4. **Schnelle Release-Zyklen:** Neue Modelle alle paar Monate ohne ausreichende Tests

### Anthropic Mythos als Wendepunkt

Das Mythos-Preview-Modell hat gezeigt:
- KI kann **autonom Zero-Days finden und ausnutzen**
- Die Fähigkeiten sind **Wochen von der Verbreitung** entfernt
- Defensive Nutzung (Project Glasswing) ist ein Anfang
- Aber: **Offensive Nutzung ist nicht kontrollierbar**

### EU vs. USA

| Aspekt | EU | USA |
|--------|-----|-----|
| KI-Regulierung | AI Act in Kraft | Keine Bundesregelung |
| Meldepflichten | Ja (AI Act Art. 62) | Nein |
| Enforcement | DPA + AI Office | Fragmentiert |
| Transparenz | Pflicht | Freiwillig |

### DACH-Perspektive

Deutschland und die EU sind durch den **AI Act** besser aufgestellt. Unternehmen sollten:

1. AI Act Compliance frühzeitig planen
2. High-Risk-KI-Systeme identifizieren und dokumentieren
3. KI-Sicherheitstests in Entwicklungsprozesse integrieren
4. Incident-Response-Pläne um KI-Szenarien erweitern
5. An EU-KI-Kompetenzzentren partizipieren`,
    category: 'ki-security',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2026-04-09T10:00:00Z',
    reading_time: 6,
    views: 1560,
    tags: ['KI', 'Regulierung', 'AI Act', 'CFR', 'Kontrolle', 'Anthropic'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '42',
    slug: 'datenschutz-meldungen-443-pro-tag-rekord-europa-2026',
    title: 'Rekord: 443 Datenschutzmeldungen pro Tag in Europa – Ursachen und Konsequenzen',
    excerpt: 'Europäische Datenschutzbehörden verzeichnen erstmals über 400 Breach-Meldungen täglich – ein Anstieg von 22% gegenüber dem Vorjahr, getrieben durch KI-Bedrohungen.',
    content: `## 443 Datenschutzmeldungen pro Tag – Neuer Rekord

Die europäischen Datenschutzbehörden verzeichnen **durchschnittlich 443 Meldungen** über Datenschutzverletzungen pro Tag – ein historischer **Rekord**.

### Entwicklung

- **+22%** gegenüber dem Vorjahr
- Erstmals über **400 Meldungen täglich**
- **160.000+ Unternehmen** haben seit DSGVO-Inkrafttreten Verstöße gemeldet
- Tendenz steigend

### Hauptursachen

1. **KI-gestützte Angriffe:** Automatisierte und skalierbare Attacken
2. **Geopolitische Konflikte:** Staatlich motivierte Cyberspionage
3. **Cloud-Migration:** Fehlkonfigurationen und mangelnde Absicherung
4. **Drittanbieter-Risiken:** Supply-Chain-Kompromittierungen
5. **Ransomware-Exfiltration:** Datendiebstahl vor Verschlüsselung

### Meistbetroffene Sektoren

1. Healthcare (Patientendaten)
2. Finanzdienstleistungen (Kontodaten)
3. Öffentlicher Sektor (Bürgerdaten)
4. E-Commerce (Kundendaten)
5. Telekommunikation (Verbindungsdaten)

### Was DACH-Unternehmen tun sollten

1. **72-Stunden-Meldeprozess** testen und optimieren
2. Breach-Detection-Fähigkeiten verbessern
3. Data-Mapping für personenbezogene Daten aktuell halten
4. Incident-Response-Team mit Datenschutzbeauftragtem verknüpfen
5. Regelmäßige Breach-Simulationen durchführen`,
    category: 'datenpannen',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    published_at: '2026-04-03T12:00:00Z',
    reading_time: 4,
    views: 1340,
    tags: ['DSGVO', 'Datenschutz', 'Breach', 'Europa', 'Meldepflicht', 'Statistik'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '43',
    slug: 'cisa-6-known-exploited-vulnerabilities-april-2026',
    title: 'CISA fügt 6 aktiv ausgenutzte Schwachstellen zum KEV-Katalog hinzu',
    excerpt: 'CISA erweitert den Known Exploited Vulnerabilities Katalog um 6 Schwachstellen in Fortinet, Microsoft, Adobe, Chrome und weiteren Produkten.',
    content: `## CISA KEV Update – 6 neue Einträge

Die **Cybersecurity and Infrastructure Security Agency (CISA)** hat **6 neue Schwachstellen** zum Known Exploited Vulnerabilities (KEV) Katalog hinzugefügt.

### Neue KEV-Einträge

| CVE | Produkt | CVSS | Typ |
|-----|---------|------|-----|
| CVE-2026-35616 | Fortinet FortiClient EMS | 9.1 | Pre-Auth API Bypass |
| CVE-2026-5281 | Google Chrome | Hoch | Use-After-Free (Dawn) |
| CVE-2026-34621 | Adobe Acrobat Reader | 8.6 | Arbitrary Code Execution |
| + 3 weitere | Microsoft, andere | Variiert | Diverse |

### Bedeutung des KEV-Katalogs

- US-Bundesbehörden **müssen** innerhalb definierter Fristen patchen
- Gilt als **de-facto-Standard** für Patch-Priorisierung weltweit
- Nur Schwachstellen mit **bestätigter aktiver Ausnutzung** werden aufgenommen
- Aktuell über **1.200 Einträge** im Katalog

### Relevanz für DACH

Obwohl der KEV-Katalog ein US-Instrument ist, nutzen ihn viele DACH-Unternehmen als **Priorisierungsgrundlage**:

- BSI verweist regelmäßig auf CISA-KEV
- NIS2 fordert "Stand der Technik" – KEV-Patching gehört dazu
- Cyber-Versicherungen fragen zunehmend nach KEV-Compliance

### Empfehlungen

1. KEV-Feed in Vulnerability-Management-Workflow integrieren
2. SLA für KEV-Patches: **< 48 Stunden** für kritische Einträge
3. Automatisierte Alerts bei neuen KEV-Einträgen einrichten
4. Monatlichen KEV-Compliance-Report erstellen`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    published_at: '2026-04-08T16:00:00Z',
    reading_time: 4,
    views: 1120,
    tags: ['CISA', 'KEV', 'Fortinet', 'Chrome', 'Adobe', 'Patch Management'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '44',
    slug: 'nis2-informationssicherheit-bundesverwaltung-bundestag-2026',
    title: 'Bundestag beschließt Gesetz zur Informationssicherheit der Bundesverwaltung',
    excerpt: 'Der Deutsche Bundestag hat das Gesetz zur Informationssicherheit in der Bundesverwaltung beschlossen – ein wichtiger Baustein der NIS2-Umsetzung.',
    content: `## Informationssicherheit der Bundesverwaltung

Der **Deutsche Bundestag** hat das **Gesetz zur Informationssicherheit in der Bundesverwaltung** beschlossen – ein zentraler Baustein der deutschen NIS2-Umsetzung.

### Kerninhalte

- Verbindliche IT-Sicherheitsstandards für alle Bundesbehörden
- Stärkung des BSI als zentrale Cybersicherheitsbehörde
- Meldepflichten für Sicherheitsvorfälle in der Verwaltung
- Mindeststandards für IT-Sicherheit in Bundesbehörden

### Bedeutung

Das Gesetz ist Teil des größeren NIS2-Umsetzungspakets und zeigt, dass auch der Staat seine eigenen Cybersicherheits-Anforderungen erhöht. Die Bundesverwaltung mit ihren **300.000+ Arbeitsplätzen** muss nun denselben Standards entsprechen, die auch für die Privatwirtschaft gelten.

### Zeitplan

- Verabschiedung: November 2025
- Inkrafttreten: Dezember 2025
- Umsetzungspflichten: Ab sofort

### DACH-Perspektive

Das Gesetz hat **Signal-Wirkung**:
- Österreich und Schweiz arbeiten an ähnlichen Regelungen
- Privatwirtschaft kann sich nicht mehr auf "der Staat macht es ja auch nicht" berufen
- BSI erhält mehr Ressourcen und Kompetenzen
- Gemeinsame Standards erleichtern die Zusammenarbeit

### Empfehlungen für Lieferanten der Bundesverwaltung

1. Eigene IT-Sicherheit auf BSI-Grundschutz-Niveau bringen
2. Sicherheitsanforderungen in Ausschreibungen beachten
3. Incident-Response-Fähigkeiten nachweisen können
4. Supply-Chain-Security dokumentieren`,
    category: 'nis2',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=800',
    published_at: '2026-04-01T14:00:00Z',
    reading_time: 4,
    views: 1230,
    tags: ['NIS2', 'Bundestag', 'Bundesverwaltung', 'BSI', 'Informationssicherheit'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '45',
    slug: 'darktrace-report-2026-deutschland-im-visier',
    title: 'Darktrace Report 2026: Deutschland im Visier – KI-gestützte Angriffe dominieren',
    excerpt: 'Der Darktrace Annual Threat Report 2026 zeigt: Deutschland ist das meistangegriffene Land in Europa, KI-gestützte Angriffe dominieren die Bedrohungslandschaft.',
    content: `## Darktrace Report 2026 – Deutschland im Visier

Der jährliche **Darktrace Threat Report** für 2026 bestätigt: Deutschland ist das **am häufigsten angegriffene Land in Europa**.

### Key Findings

- Deutschland **#1 Angriffsziel** in Europa
- KI-gestützte Angriffe steigen **rasant**
- **Credential Theft** als primärer Angriffsvektor
- Cloud-Umgebungen zunehmend im Fokus
- OT/ICS-Angriffe nehmen zu

### Bedrohungslandschaft DACH

**Top Angriffsvektoren:**
1. Kompromittierte Zugangsdaten (Infostealer, Phishing)
2. Ausnutzung bekannter Schwachstellen
3. Social Engineering (zunehmend KI-gestützt)
4. Supply-Chain-Angriffe
5. Insider Threats

**Top Angriffstypen:**
1. Ransomware / Erpressung
2. Business Email Compromise
3. Cyberspionage
4. DDoS
5. Cryptomining

### KI als Game-Changer

Darktrace beobachtet:
- KI wird auf **beiden Seiten** eingesetzt
- Angreifer nutzen KI für **schnellere und präzisere** Angriffe
- Defender nutzen KI für **automatisierte Erkennung** und Response
- Das "KI-Wettrüsten" verschärft sich

### Empfehlungen

1. KI-basierte Security-Tools evaluieren und einsetzen
2. Autonomous Response für schnelle Eindämmung
3. Visibility über Cloud, OT und IT vereinheitlichen
4. Threat Hunting als kontinuierlichen Prozess etablieren
5. Cross-Domain-Korrelation (E-Mail, Netzwerk, Endpoint)`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    published_at: '2026-04-04T08:00:00Z',
    reading_time: 5,
    views: 2340,
    tags: ['Darktrace', 'Report', 'Deutschland', 'KI', 'Threat Intelligence', '2026'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '46',
    slug: 'langflow-ki-plattform-rce-cve-2026-33017-20-stunden',
    title: 'Langflow KI-Plattform: Kritische RCE innerhalb von 20 Stunden ausgenutzt',
    excerpt: 'CVE-2026-33017 (CVSS 9.3) in der KI-Plattform Langflow wurde nur 20 Stunden nach Disclosure aktiv ausgenutzt – unauthentifizierte Remote Code Execution über den Flow-Build-Endpunkt.',
    content: `## Langflow RCE – CVE-2026-33017

Die KI-Workflow-Plattform **Langflow** wurde über eine kritische Schwachstelle angegriffen, die innerhalb von nur **20 Stunden** nach Disclosure aktiv ausgenutzt wurde.

### Technische Details

- **CVE:** CVE-2026-33017
- **CVSS:** 9.3 (Kritisch)
- **Typ:** Unauthentifizierte Remote Code Execution
- **Betroffen:** Langflow bis Version 1.8.1
- **Angriffsvektor:** Öffentlicher Flow-Build-Endpunkt

### Warum ist Langflow relevant?

Langflow ist eine **Low-Code-Plattform** für KI-Workflows:
- Wird in vielen Unternehmen für **RAG-Pipelines** und **LLM-Orchestrierung** eingesetzt
- Oft mit Zugang zu **internen Datenquellen** konfiguriert
- Viele Instanzen sind **öffentlich erreichbar**

### Angriffsvektor

1. Angreifer sendet manipulierte Request an den Flow-Build-API-Endpunkt
2. Keine Authentifizierung erforderlich
3. Beliebiger Code wird auf dem Server ausgeführt
4. Zugriff auf verbundene Datenquellen und LLM-APIs möglich

### Sofortmaßnahmen

1. Langflow sofort auf Version > 1.8.1 updaten
2. Öffentlich erreichbare Instanzen absichern
3. API-Endpunkte mit Authentifizierung schützen
4. Netzwerksegmentierung für KI-Entwicklungsumgebungen
5. Verbundene API-Keys (OpenAI, etc.) rotieren`,
    category: 'ki-security',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    published_at: '2026-04-02T14:00:00Z',
    reading_time: 4,
    views: 1780,
    tags: ['Langflow', 'KI', 'RCE', 'CVE-2026-33017', 'LLM', 'Low-Code'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '47',
    slug: 'cyberangriffe-fruehjahr-2026-neue-malware-kritische-luecken',
    title: 'Cyberangriffe Frühjahr 2026: Neue Malware-Familien und kritische Lücken',
    excerpt: 'Eine Übersicht der wichtigsten neuen Malware-Familien und kritischen Schwachstellen aus dem Frühjahr 2026 – von STX RAT bis PRISMEX.',
    content: `## Cyberangriffe Frühjahr 2026 – Übersicht

Das Frühjahr 2026 brachte eine Welle neuer Malware-Familien und kritischer Schwachstellen. Hier die wichtigsten Entwicklungen.

### Neue Malware-Familien

**STX RAT**
- Verbreitung über CPUID Supply-Chain-Angriff
- Fokus auf Browser-Credential-Diebstahl
- Russischsprachige Akteure

**PRISMEX**
- Multi-Stage-Malware-Suite
- Einsatz durch APT28 gegen Ukraine und Verbündete
- Modulare Architektur

**LucidRook**
- Lua-basierte Backdoor
- Einsatz durch UAT-10362 gegen Taiwan
- Ungewöhnliche Programmiersprache für niedrige Erkennung

### Kritische Schwachstellen Q1/Q2 2026

| CVE | CVSS | Produkt | Status |
|-----|------|---------|--------|
| CVE-2026-20093 | 9.8 | Cisco IMC | Gepatcht |
| CVE-2026-20160 | 9.8 | Cisco SSM | Gepatcht |
| CVE-2026-5059 | 9.8 | AWS CLI | Gepatcht |
| CVE-2026-6140 | 9.8 | Totolink Router | Kein Patch |
| CVE-2026-35616 | 9.1 | Fortinet EMS | Gepatcht, KEV |
| CVE-2026-39987 | 9.3 | Marimo | Gepatcht |
| CVE-2026-33017 | 9.3 | Langflow | Gepatcht |
| CVE-2026-5281 | Hoch | Chrome | Gepatcht, KEV |
| CVE-2026-34621 | 8.6 | Adobe Reader | Gepatcht, KEV |

### Trend-Zusammenfassung

1. **Supply-Chain-Angriffe** nehmen weiter zu
2. **KI-Tools und -Plattformen** werden zu Angriffszielen
3. **Time-to-Exploit** sinkt auf unter 24 Stunden
4. **Geopolitisch motivierte** Angriffe bleiben hoch
5. **Ransomware** entwickelt sich Richtung reine Exfiltration`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    published_at: '2026-04-14T10:00:00Z',
    reading_time: 5,
    views: 1890,
    tags: ['Malware', 'Übersicht', 'Frühjahr 2026', 'CVE', 'STX RAT', 'PRISMEX', 'LucidRook'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '48',
    slug: 'cyber-sicherheit-2026-unternehmen-sturm-regeln-hackerangriffe',
    title: 'Cyber-Sicherheit 2026: Unternehmen im Sturm aus Regulierung und Hackerangriffen',
    excerpt: 'Deutsche Unternehmen stehen 2026 vor einer doppelten Herausforderung: Steigende Cyberangriffe und gleichzeitig neue regulatorische Anforderungen durch NIS2, DSGVO und AI Act.',
    content: `## Doppelter Druck: Regulierung + Cyberangriffe

Deutsche Unternehmen stehen 2026 vor einer **beispiellosen Doppelbelastung**: Einerseits steigen die Cyberangriffe dramatisch, andererseits verschärfen sich die **regulatorischen Anforderungen**.

### Regulatorischer Sturm

**NIS2UmsuCG** (seit Dezember 2025):
- 29.500 Unternehmen betroffen
- Bußgelder bis 10 Mio. € / 2% Umsatz
- Persönliche Vorstandshaftung

**DSGVO Enforcement 2026:**
- Fokus auf Transparenzpflichten
- 7,1 Mrd. € Gesamt-Bußgelder
- 443 Meldungen pro Tag

**EU AI Act:**
- High-Risk-KI-Systeme reguliert
- Compliance-Anforderungen für KI-Einsatz
- Übergangsfristen laufen

### Bedrohungssturm

- **1.345 Angriffe/Woche** auf deutsche Organisationen
- **+89% KI-gestützte Angriffe**
- **40% aller Einbrüche** über Schwachstellen
- Ransomware-Gruppen aktiver denn je

### Budget-Realität

Die meisten deutschen Unternehmen können **nicht beides gleichzeitig** finanzieren:
- Compliance-Kosten steigen
- Security-Investitionen notwendig
- Fachkräftemangel verschärft das Problem
- Viele Maßnahmen überlappen sich aber

### Synergien nutzen

1. NIS2-Compliance **und** Security-Verbesserung als ein Projekt
2. ISO 27001 als gemeinsamer Rahmen
3. Managed Services für SOC und Compliance
4. Automatisierung wo möglich
5. Priorisierung nach tatsächlichem Risiko, nicht nur Compliance`,
    category: 'kritis',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800',
    published_at: '2026-04-06T14:00:00Z',
    reading_time: 6,
    views: 2670,
    tags: ['NIS2', 'DSGVO', 'AI Act', 'Regulierung', 'Deutschland', 'Compliance'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '49',
    slug: 'datenpanne-sapienza-europas-groesste-uni-it-zusammenbruch',
    title: 'Datenpanne an Italiens größter Uni: Forschungsdaten und 120.000 Studierendendaten gefährdet',
    excerpt: 'Nach dem Cyberangriff auf die Sapienza-Universität in Rom wird das Ausmaß der Datenpanne deutlich – Forschungsdaten und personenbezogene Daten von 120.000 Studierenden potentiell betroffen.',
    content: `## Sapienza-Datenpanne – Ausmaß wird deutlich

Nach dem schweren Cyberangriff auf die **Sapienza-Universität in Rom** wird das Ausmaß der Datenpanne schrittweise sichtbar.

### Potentiell betroffene Daten

- **120.000 Studierende:** Namen, Matrikelnummern, Adressen, Noten
- **Forschungsdaten:** Unveröffentlichte Studien, Patentanmeldungen
- **Mitarbeiterdaten:** Personalakten, Gehaltsabrechnungen
- **Finanzdaten:** Buchhaltung, Fördergelder

### DSGVO-Konsequenzen

Als öffentliche Einrichtung muss die Sapienza:
- Italienische Datenschutzbehörde (Garante) innerhalb von 72h informieren
- Alle betroffenen Personen benachrichtigen
- Umfangreiche Dokumentation des Vorfalls erstellen
- Maßnahmen zur Schadensbegrenzung nachweisen

### Lehren für den Bildungssektor

Der Angriff offenbart strukturelle Probleme:
1. **Chronisch unterfinanzierte IT** an Hochschulen
2. **Flache Netzwerkstrukturen** ohne Segmentierung
3. **BYOD-Politik** ohne MDM
4. **Dezentrale IT-Verantwortung** in Fakultäten
5. **Fehlende Incident-Response-Pläne**

### Empfehlungen

1. Forschungsdaten in isolierten, verschlüsselten Umgebungen speichern
2. Netzwerksegmentierung zwischen Verwaltung, Lehre und Forschung
3. Zentrale IT-Security-Verantwortung etablieren
4. Regelmäßige Backup-Tests
5. DFN-CERT-Mitgliedschaft für deutsche Hochschulen nutzen`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    published_at: '2026-04-12T12:00:00Z',
    reading_time: 4,
    views: 780,
    tags: ['Sapienza', 'Universität', 'Datenpanne', 'DSGVO', 'Bildung', 'Forschungsdaten'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '50',
    slug: 'security-awareness-ki-zeitalter-training-update-2026',
    title: 'Security Awareness im KI-Zeitalter: Warum klassische Trainings nicht mehr reichen',
    excerpt: 'KI-generierte Phishing-Mails sind grammatisch perfekt und kontextbezogen – Security-Awareness-Trainings müssen fundamental überarbeitet werden.',
    content: `## Security Awareness im KI-Zeitalter

Klassische Security-Awareness-Trainings, die auf das Erkennen von **Tippfehlern und schlechter Grammatik** in Phishing-Mails setzen, sind im Zeitalter von KI-generierten Angriffen **obsolet**.

### Was sich geändert hat

**Vorher (Pre-KI):**
- Phishing-Mails mit Grammatikfehlern
- Generische Ansprache ("Sehr geehrter Kunde")
- Offensichtlich falsche URLs
- Schlechte Design-Qualität

**Jetzt (KI-Zeitalter):**
- Perfekte Grammatik und Kontext
- Personalisierte Ansprache mit korrektem Namen und Rolle
- Subtile URL-Variationen
- Pixel-perfekte Design-Kopien
- Multi-Channel-Angriffe (E-Mail + Messenger + Voice)

### Neue Trainingsansätze

1. **Prozess-basiert:** Nicht "sieht die Mail echt aus?" sondern "ist dieser Prozess korrekt?"
2. **Verify-First-Kultur:** Ungewöhnliche Anfragen immer über zweiten Kanal verifizieren
3. **KI-gestützte Simulationen:** Trainings mit KI-generierten Phishing-Mails
4. **Continuous Learning:** Nicht 1x/Jahr, sondern kontinuierlich
5. **Gamification:** Interaktive Szenarien statt PowerPoint

### Metriken

Statt "Klickrate bei Phishing-Simulation" besser messen:
- **Melderate:** Wie viele verdächtige Mails werden gemeldet?
- **Reaktionszeit:** Wie schnell wird gemeldet?
- **False-Positive-Rate:** Werden auch echte verdächtige Mails erkannt?

### Empfehlungen

1. Awareness-Programme auf KI-Szenarien aktualisieren
2. Multi-Channel-Phishing-Simulationen einführen
3. "Verify before you act"-Kultur etablieren
4. Positives Feedback für Meldungen geben
5. Führungskräfte als Vorbilder einbinden`,
    category: 'phishing',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    published_at: '2026-04-05T14:00:00Z',
    reading_time: 5,
    views: 1890,
    tags: ['Security Awareness', 'Training', 'KI', 'Phishing', 'Schulung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '51',
    slug: 'datenpanne-europaeische-unternehmen-breach-kosten-2026',
    title: 'Breach-Kosten 2026: Durchschnittlich 4,7 Millionen Euro pro Vorfall in Europa',
    excerpt: 'Die durchschnittlichen Kosten einer Datenpanne in Europa steigen auf 4,7 Millionen Euro – Healthcare und Finanzsektor sind am teuersten betroffen.',
    content: `## Breach-Kosten 2026 in Europa

Die durchschnittlichen Kosten einer Datenpanne in Europa steigen weiter und erreichen **4,7 Millionen Euro** pro Vorfall.

### Kosten-Aufschlüsselung

| Kostenfaktor | Anteil |
|-------------|--------|
| Erkennung & Eskalation | 35% |
| Geschäftsausfall | 30% |
| Benachrichtigung Betroffener | 10% |
| Forensik & Response | 15% |
| Bußgelder & Rechtskosten | 10% |

### Teuerste Branchen

1. **Healthcare:** ~6,2 Mio. € (Patientendaten besonders wertvoll)
2. **Finanzdienstleistungen:** ~5,8 Mio. €
3. **Technologie:** ~5,1 Mio. €
4. **Energie:** ~4,9 Mio. €
5. **Pharma:** ~4,7 Mio. €

### Kostensenkende Faktoren

- **Incident-Response-Plan:** -25% Kosten
- **KI-gestützte Security:** -20% Kosten
- **DevSecOps:** -18% Kosten
- **Verschlüsselung:** -15% Kosten
- **Security-Automation:** -12% Kosten

### DACH-Kontext

Mit den steigenden DSGVO-Bußgeldern und NIS2-Strafen können die Gesamtkosten noch deutlich höher ausfallen. Investitionen in Prävention sind wirtschaftlich sinnvoller als Reaktion.

### Empfehlungen

1. Cyber-Versicherung mit angemessener Deckung abschließen
2. Incident-Response-Retainer bei DFIR-Dienstleister
3. Breach-Kosten in Business-Case für Security-Budget einrechnen
4. Präventive Maßnahmen priorisieren
5. Regelmäßige Tabletop-Exercises durchführen`,
    category: 'datenpannen',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    published_at: '2026-04-07T10:00:00Z',
    reading_time: 4,
    views: 1560,
    tags: ['Breach', 'Kosten', 'DSGVO', 'Europa', 'Healthcare', 'Finanzsektor'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '52',
    slug: 'kritis-schutz-2026-energie-wasser-gesundheit-cyberangriffe',
    title: 'KRITIS-Schutz 2026: Energie, Wasser und Gesundheit zunehmend im Visier',
    excerpt: 'Kritische Infrastrukturen in Deutschland werden 2026 verstärkt angegriffen – Energie, Wasser und Gesundheitssektor sind die Hauptziele staatlich motivierter Akteure.',
    content: `## KRITIS-Schutz 2026

Kritische Infrastrukturen in Deutschland stehen 2026 unter **erhöhtem Druck** durch Cyberangriffe.

### Bedrohungslage

- **Energiesektor:** Angriffe auf OT/SCADA-Systeme nehmen zu
- **Wasserversorgung:** IT/OT-Konvergenz schafft neue Angriffsflächen
- **Gesundheitswesen:** ChipSoft-Angriff als warnendes Beispiel
- **Verkehr:** DDoS-Angriffe auf Deutsche Bahn durch NoName05716

### NIS2 für KRITIS

KRITIS-Betreiber fallen als **"Besonders wichtige Einrichtungen"** unter die strengsten NIS2-Anforderungen:

- Bußgelder bis 10 Mio. € oder 2% Umsatz
- 24-Stunden-Frühwarnung bei Vorfällen
- Umfassende technische und organisatorische Maßnahmen
- Regelmäßige Audits und Penetrationstests
- Supply-Chain-Security-Anforderungen

### OT-Security-Herausforderungen

| Herausforderung | Lösung |
|----------------|--------|
| Legacy-Systeme | Netzwerksegmentierung, Virtual Patching |
| Fehlende Visibility | OT-Monitoring-Lösungen |
| Kein Patching möglich | Kompensatorische Kontrollen |
| IT/OT-Konvergenz | Sichere Schnittstellen, DMZ |
| Fachkräftemangel | OT-Security-Spezialisten ausbilden |

### Empfehlungen

1. OT-Security-Assessment durchführen
2. Netzwerksegmentierung zwischen IT und OT
3. Anomalie-Erkennung für OT-Netzwerke
4. Notfall-Übungen mit Fokus auf OT-Szenarien
5. BSI-Grundschutz für KRITIS implementieren`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    published_at: '2026-04-09T08:00:00Z',
    reading_time: 5,
    views: 1450,
    tags: ['KRITIS', 'OT', 'Energie', 'Wasser', 'Gesundheit', 'NIS2'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '53',
    slug: 'datenpanne-hansemerkur-update-kundenbenachrichtigung',
    title: 'HanseMerkur-Update: Kundendaten betroffen – Benachrichtigung läuft',
    excerpt: 'Nach dem DragonForce-Ransomware-Angriff bestätigt HanseMerkur, dass auch Kundendaten betroffen sind – die Benachrichtigung der Betroffenen hat begonnen.',
    content: `## HanseMerkur – Update zum Ransomware-Vorfall

Nach dem Ransomware-Angriff durch die Gruppe **DragonForce** hat HanseMerkur nun bestätigt, dass auch **Kundendaten betroffen** sind.

### Neue Erkenntnisse

- **Kundendaten betroffen:** Personenbezogene Daten von Versicherungsnehmern
- **97 GB Daten:** Umfang der Exfiltration bestätigt
- **Benachrichtigung:** Hat begonnen gemäß DSGVO Art. 34
- **Ermittlungen:** BKA und Datenschutzbehörde eingeschaltet

### Betroffene Datentypen (unbestätigt)

Basierend auf der Art der exfiltrierten Daten könnten betroffen sein:
- Versicherungsverträge und -details
- Gesundheitsdaten (besonders sensibel nach Art. 9 DSGVO)
- Bankverbindungen und Zahlungsdaten
- Korrespondenz und interne Dokumente

### DSGVO-Konsequenzen

Gesundheitsdaten fallen unter **Art. 9 DSGVO** (besondere Kategorien):
- Höhere Schutzanforderungen
- Strengere Meldepflichten
- Potentiell höhere Bußgelder
- Recht auf Schadensersatz für Betroffene

### Was Kunden tun sollten

1. Auf offizielle Kommunikation von HanseMerkur achten
2. **Phishing-Warnungen:** Angreifer könnten gestohlene Daten für gezielte Phishing-Mails nutzen
3. Passwörter für Online-Portale ändern
4. Bankkonten auf verdächtige Aktivitäten überwachen
5. Bei Bedarf Auskunftsrecht nach Art. 15 DSGVO geltend machen`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    published_at: '2026-04-12T16:00:00Z',
    reading_time: 4,
    views: 2340,
    tags: ['HanseMerkur', 'Datenpanne', 'DSGVO', 'DragonForce', 'Versicherung', 'Kundendaten'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '54',
    slug: 'forrester-project-glasswing-10-konsequenzen',
    title: 'Forrester: 10 Konsequenzen von Project Glasswing, über die niemand spricht',
    excerpt: 'Forrester analysiert die weitreichenden Folgen von Anthropics Project Glasswing – von der Versicherungsbranche bis zum Arbeitsmarkt für Sicherheitsforscher.',
    content: `## Forrester: 10 Konsequenzen von Project Glasswing

Forrester Research hat eine Analyse zu den **weitreichenden Folgen** von Anthropics Project Glasswing veröffentlicht.

### Die 10 Konsequenzen

**1. Vulnerability Discovery wird demokratisiert**
Nicht nur große Unternehmen, sondern auch KMU könnten Zugang zu KI-gestützter Schwachstellenfindung erhalten.

**2. Patch-Zyklen müssen sich radikal verkürzen**
Wenn KI tausende Zero-Days in Stunden findet, müssen Patches in Tagen statt Wochen bereitstehen.

**3. Cyber-Versicherungsmarkt wird umgekrempelt**
Versicherer müssen ihre Risikomodelle komplett überarbeiten.

**4. Bug-Bounty-Programme werden transformiert**
KI könnte menschliche Bug-Bounty-Jäger bei bestimmten Aufgaben überholen.

**5. Offensive vs. Defensive Balance kippt**
Die Verteidigung hat erstmals einen KI-Vorteil – aber wie lange?

**6. Open-Source-Sicherheit bekommt einen Boost**
Project Glasswing-Partner (Linux Foundation) können systematisch Open-Source scannen.

**7. Legacy-Software steht vor einer Krise**
17+ Jahre alte Bugs werden sichtbar – Legacy-Systeme sind exponiert.

**8. Geopolitische Implikationen**
Staaten ohne KI-Zugang fallen beim Cyberschutz zurück.

**9. Security-Researcher-Arbeitsmarkt verändert sich**
Neue Rollen: KI-Security-Trainer, Prompt-Engineer für Vulnerability Research.

**10. Regulierung muss nachziehen**
AI Act und NIS2 reichen nicht – neue Frameworks für KI-gestützte Security nötig.

### DACH-Implikation

Deutsche Unternehmen sollten die Entwicklung genau beobachten und Partnerschaften mit Project-Glasswing-Teilnehmern evaluieren.`,
    category: 'ki-security',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    published_at: '2026-04-10T16:00:00Z',
    reading_time: 6,
    views: 2120,
    tags: ['Forrester', 'Project Glasswing', 'Anthropic', 'KI', 'Analyse', 'Zukunft'],
    author: 'CyberLage Redaktion',
  },
]

export const demoCVEs = [
  {
    cve_id: 'CVE-2026-20093',
    description: 'Cisco IMC Authentication Bypass – Unauthentifizierter Angreifer kann über manipulierten HTTP-Request Admin-Passwörter ändern und System übernehmen.',
    cvss_score: 9.8,
    affected_software: 'Cisco Integrated Management Controller (IMC)',
    vendor: 'Cisco',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-02',
    advisory_url: 'https://thehackernews.com/2026/04/cisco-patches-98-cvss-imc-and-ssm-flaws.html',
  },
  {
    cve_id: 'CVE-2026-20160',
    description: 'Cisco Smart Software Manager On-Prem – Authentication Bypass mit Privilege Escalation ermöglicht Remote-Befehlsausführung als Root.',
    cvss_score: 9.8,
    affected_software: 'Cisco Smart Software Manager On-Prem (SSM)',
    vendor: 'Cisco',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-02',
    advisory_url: 'https://vulert.com/blog/cisco-imc-ssm-vulnerabilities-cve-2026-20093-20160/',
  },
  {
    cve_id: 'CVE-2026-5059',
    description: 'AWS CLI Command Injection über aws-mcp-server – Remote Code Execution ohne Authentifizierung auf Cloud-Infrastruktur.',
    cvss_score: 9.8,
    affected_software: 'aws-mcp-server (AWS CLI Integration)',
    vendor: 'AWS',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-05',
    advisory_url: 'https://www.thehackerwire.com/vulnerability/CVE-2026-5059/',
  },
  {
    cve_id: 'CVE-2026-6140',
    description: 'Totolink A7100RU OS Command Injection im CGI Handler – Unauthentifizierte Remote-Befehlsausführung auf Router.',
    cvss_score: 9.8,
    affected_software: 'Totolink A7100RU Firmware',
    vendor: 'Totolink',
    patch_available: false,
    workaround: true,
    published_at: '2026-04-13',
    advisory_url: 'https://www.thehackerwire.com/totolink-a7100ru-cgi-command-injection-cve-2026-6140/',
  },
  {
    cve_id: 'CVE-2026-35616',
    description: 'Fortinet FortiClient EMS Pre-Auth API Access Bypass – Aktiv ausgenutzt! Privilege Escalation auf zentralem Endpoint-Management-Server.',
    cvss_score: 9.1,
    affected_software: 'FortiClient Enterprise Management Server (EMS)',
    vendor: 'Fortinet',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-08',
    advisory_url: 'https://thehackernews.com/2026/04/fortinet-patches-actively-exploited-cve.html',
  },
  {
    cve_id: 'CVE-2026-39987',
    description: 'Marimo Pre-Auth RCE – Unauthentifizierte Remote Code Execution in Python-Notebook-Plattform. Innerhalb von 10h ausgenutzt.',
    cvss_score: 9.3,
    affected_software: 'Marimo Python Notebook',
    vendor: 'Marimo',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-06',
    advisory_url: 'https://thehackernews.com/2026/04/marimo-rce-vulnerability.html',
  },
  {
    cve_id: 'CVE-2026-5281',
    description: 'Google Chrome Use-After-Free in Dawn (WebGPU) – Aktiv ausgenutzt! Zero-Day ermöglicht Codeausführung über präparierte Webseite.',
    cvss_score: 8.8,
    affected_software: 'Google Chrome (alle Plattformen)',
    vendor: 'Google',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-09',
    advisory_url: 'https://thehackernews.com/2026/04/new-chrome-zero-day-cve-2026-5281-under.html',
  },
  {
    cve_id: 'CVE-2026-34621',
    description: 'Adobe Acrobat Reader Arbitrary Code Execution – Aktiv ausgenutzt! Kritische Schwachstelle bei Verarbeitung von PDF-Dokumenten.',
    cvss_score: 8.6,
    affected_software: 'Adobe Acrobat, Acrobat Reader (alle Plattformen)',
    vendor: 'Adobe',
    patch_available: true,
    workaround: false,
    published_at: '2026-04-09',
    advisory_url: 'https://thehackernews.com/2026/04/adobe-patches-actively-exploited.html',
  },
]

export const topThreats = [
  { name: 'Anthropic Mythos: KI findet Zero-Days in allen Betriebssystemen', level: 'kritisch', description: 'Project Glasswing – Tausende Zero-Days autonom entdeckt, 17-jähriger FreeBSD-Bug ausgenutzt' },
  { name: 'Cisco IMC/SSM Authentication Bypass (CVSS 9.8)', level: 'kritisch', description: 'CVE-2026-20093/20160 – Unauthentifizierte Übernahme von UCS-Servern und SSM' },
  { name: 'Fortinet FortiClient EMS Pre-Auth Bypass (CVSS 9.1)', level: 'kritisch', description: 'CVE-2026-35616 – CISA KEV, aktiv ausgenutzt, Endpoint-Management kompromittierbar' },
  { name: 'CPUID Supply-Chain-Angriff: STX RAT über CPU-Z', level: 'hoch', description: 'Trojanisierte Downloads, 150+ Opfer, russischsprachige Angreifer' },
  { name: 'KI-gestütztes Device-Code-Phishing auf Microsoft 365', level: 'hoch', description: 'EvilTokens PhaaS – Hunderte Organisationen täglich kompromittiert' },
]

export const breakingNews = [
  'CPUID gehackt: CPU-Z und HWMonitor verteilten 6 Stunden lang Trojaner – 150+ Opfer',
  'Anthropic Mythos Preview findet tausende Zero-Days in allen Betriebssystemen und Browsern',
  'Rockstar Games: ShinyHunters leaken 78,6 Mio. Datensätze nach abgelehnter Lösegeldforderung',
  'Cisco IMC & SSM: Kritische 9.8-CVSS-Lücken – Sofort patchen!',
  'ChipSoft Ransomware: 80% der niederländischen Krankenhäuser betroffen',
  'Chrome Zero-Day CVE-2026-5281: Aktive Ausnutzung – Update dringend!',
  'KI-Phishing-Kampagne: Hunderte Microsoft-365-Konten täglich über Device-Code-Flow kompromittiert',
  'Qilin-Ransomware: Deutsche Partei Die Linke gehackt – Daten gestohlen',
  'NIS2-Registrierungsfrist abgelaufen: BSI bereitet erste Bußgeldverfahren vor',
  'NSA & FBI warnen: Router sofort neu starten – Russische Akteure kapern DNS',
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
  { term: 'CVE', full: 'Common Vulnerabilities and Exposures', description: 'Ein Katalog öffentlich bekannter Sicherheitslücken und Schwachstellen, jede mit einer eindeutigen Kennung (z.B. CVE-2026-20093).' },
  { term: 'DSGVO', full: 'Datenschutz-Grundverordnung', description: 'EU-Verordnung zum Schutz personenbezogener Daten. Seit Mai 2018 in Kraft, regelt sie die Verarbeitung personenbezogener Daten durch Unternehmen und Behörden.' },
  { term: 'Firewall', full: '', description: 'Ein Sicherheitssystem, das den Netzwerkverkehr überwacht und filtert. Es entscheidet anhand definierter Regeln, welcher Verkehr erlaubt oder blockiert wird.' },
  { term: 'IoC', full: 'Indicator of Compromise', description: 'Hinweise oder Artefakte, die auf einen Sicherheitsvorfall hindeuten, z.B. verdächtige IP-Adressen, Datei-Hashes oder ungewöhnliche Netzwerkaktivitäten.' },
  { term: 'KEV', full: 'Known Exploited Vulnerabilities', description: 'Von der CISA gepflegter Katalog bekannter, aktiv ausgenutzter Schwachstellen. Wichtiger Indikator für Patch-Priorisierung.' },
  { term: 'KRITIS', full: 'Kritische Infrastrukturen', description: 'Organisationen und Einrichtungen mit wichtiger Bedeutung für das Gemeinwesen, deren Ausfall dramatische Folgen hätte (Energie, Wasser, Gesundheit, etc.).' },
  { term: 'MFA', full: 'Multi-Faktor-Authentifizierung', description: 'Sicherheitsverfahren, das mindestens zwei verschiedene Faktoren zur Identitätsbestätigung erfordert (z.B. Passwort + SMS-Code).' },
  { term: 'NIS2', full: 'Network and Information Security Directive 2', description: 'EU-Richtlinie zur Stärkung der Cybersicherheit. In Deutschland seit 6. Dezember 2025 als NIS2UmsuCG in Kraft. Betrifft ca. 29.500 Unternehmen.' },
  { term: 'Phishing', full: '', description: 'Social-Engineering-Angriff, bei dem Angreifer sich als vertrauenswürdige Quelle ausgeben, um an sensible Daten zu gelangen oder Malware zu verbreiten.' },
  { term: 'PhaaS', full: 'Phishing-as-a-Service', description: 'Geschäftsmodell im Dark Web, bei dem fertige Phishing-Kits und -Infrastruktur als Dienstleistung angeboten werden. Beispiel: EvilTokens für Device-Code-Phishing.' },
  { term: 'Ransomware', full: '', description: 'Schadsoftware, die Daten verschlüsselt und ein Lösegeld für die Entschlüsselung fordert. Trend 2026: Reine Exfiltration ohne Verschlüsselung (Encryption-less Ransomware).' },
  { term: 'SBOM', full: 'Software Bill of Materials', description: 'Eine vollständige Liste aller Komponenten, Bibliotheken und Abhängigkeiten einer Software. Wichtig für Supply-Chain-Security und NIS2-Compliance.' },
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
