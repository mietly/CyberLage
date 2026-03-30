export const demoArticles = [
  {
    id: '45',
    slug: 'vmware-aria-operations-rce-aktiv-ausgenutzt',
    title: 'VMware Aria Operations: Kritische RCE-Schwachstelle wird aktiv ausgenutzt',
    excerpt: 'CISA warnt: CVE-2026-22719 in VMware Aria Operations ermöglicht unauthentifizierte Remote Code Execution. Angreifer nutzen die Lücke bereits aktiv aus. Sofort patchen oder Workaround anwenden.',
    content: `## VMware Aria Operations – Aktive Ausnutzung bestätigt

Die CISA hat die Schwachstelle **CVE-2026-22719** in VMware Aria Operations in ihren KEV-Katalog (Known Exploited Vulnerabilities) aufgenommen. Die Lücke wird aktiv ausgenutzt.

### Technische Details

- **CVE:** CVE-2026-22719
- **CVSS Score:** 8.1 (Important)
- **Typ:** Command Injection → Remote Code Execution
- **Betroffen:** VMware Aria Operations (Enterprise-Monitoring)
- **Authentifizierung:** Nicht erforderlich
- **Bedingung:** Schwachstelle greift während der support-assisted Product Migration

### Was können Angreifer tun?

Ein unauthentifizierter Angreifer kann **beliebige Befehle ausführen**, was zu einer vollständigen Serverübernahme führen kann. Da Aria Operations als zentrale Monitoring-Plattform eingesetzt wird, hat eine Kompromittierung weitreichende Folgen:

- Zugriff auf Monitoring-Daten aller überwachten Systeme
- Laterale Bewegung im Netzwerk
- Manipulation von Alerts und Dashboards
- Persistenter Zugang zur gesamten Infrastruktur

### Patch & Workaround

- **Patch:** Seit 24. Februar 2026 verfügbar – sofort einspielen
- **Workaround:** Script \`aria-ops-rce-workaround.sh\` deaktiviert verwundbare Migrations-Komponenten
- **CISA-Frist:** Bundesbehörden mussten bis 24. März patchen

### Sofortmaßnahmen

1. VMware Aria Operations Version prüfen
2. **Patch sofort einspielen** oder Workaround-Script ausführen
3. Netzwerk-Logs auf verdächtige Aktivitäten gegen Aria Operations prüfen
4. Management-Interface nicht aus dem Internet erreichbar machen
5. Monitoring auf IoCs von CISA prüfen`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-03-30T07:00:00Z',
    reading_time: 4,
    views: 340,
    tags: ['VMware', 'Aria Operations', 'CVE', 'CISA', 'RCE', 'KEV'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '46',
    slug: 'oracle-notfall-patch-identity-manager-cvss-9-8',
    title: 'Oracle Notfall-Patch: Kritische Identity Manager Schwachstelle – CVSS 9.8',
    excerpt: 'Oracle veröffentlicht außerplanmäßigen Notfall-Patch für CVE-2026-21992 im Identity Manager. Unauthentifizierte Remote Code Execution möglich.',
    content: `## Oracle Identity Manager – Notfall-Patch

Oracle hat einen außerplanmäßigen Notfall-Patch für eine kritische Schwachstelle im **Identity Manager** veröffentlicht. Die Schwachstelle erlaubt Remote Code Execution ohne Authentifizierung.

### Details

- **CVE:** CVE-2026-21992
- **CVSS Score:** 9.8 (Kritisch)
- **Betroffen:** Oracle Identity Manager, Oracle Web Services Manager
- **Angriffsvektor:** Netzwerk, ohne Authentifizierung
- **Auswirkung:** Vollständige Systemübernahme

### Warum ist das kritisch?

Oracle Identity Manager wird für das zentrale **Identity & Access Management** (IAM) in Unternehmen eingesetzt. Eine Kompromittierung bedeutet:

- Zugriff auf **alle Benutzerkonten** und Berechtigungen
- Anlegen neuer Admin-Accounts
- Manipulation von Zugriffsrechten
- Potentiell Zugang zu allen angebundenen Systemen

### DACH-Relevanz

Oracle IAM-Produkte sind in großen DACH-Unternehmen und Behörden verbreitet, insbesondere:

- Finanzdienstleister
- Versicherungen
- Öffentliche Verwaltung
- Große Industrieunternehmen

### Empfehlungen

1. **Notfall-Patch sofort einspielen**
2. Identity Manager Logs auf verdächtige Account-Erstellungen prüfen
3. Alle Admin-Zugänge verifizieren
4. Zugriff auf Identity Manager auf interne Netze beschränken
5. Incident Response Team informieren`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-03-30T09:00:00Z',
    reading_time: 4,
    views: 210,
    tags: ['Oracle', 'Identity Manager', 'IAM', 'CVE', 'CVSS 9.8', 'Notfall-Patch'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '47',
    slug: 'supply-chain-angriff-pypi-telnyx-malware-wav',
    title: 'Supply-Chain-Angriff: Malware in PyPI-Paket Telnyx versteckt sich in WAV-Datei',
    excerpt: 'Angreifer haben das beliebte Python-Paket Telnyx auf PyPI kompromittiert. Credential-Stealing Malware wurde in einer WAV-Audio-Datei versteckt – eine neuartige Verschleierungstechnik.',
    content: `## Kompromittiertes PyPI-Paket Telnyx

Die Hackergruppe **TeamPCP** hat das Python-Paket \`telnyx\` auf dem Python Package Index (PyPI) kompromittiert und manipulierte Versionen hochgeladen, die Credential-Stealing Malware enthalten.

### Die Angriffstechnik

Besonders raffiniert: Die Malware ist in einer **WAV-Audio-Datei** versteckt – eine neuartige Verschleierungstechnik:

- Schadcode ist als Audio-Daten getarnt
- Wird beim Paket-Install extrahiert und ausgeführt
- Umgeht viele automatische Security-Scanner
- Stiehlt Zugangsdaten und API-Keys aus der Entwicklungsumgebung

### Betroffene

- Alle Entwickler die \`telnyx\` seit der Kompromittierung installiert/aktualisiert haben
- CI/CD-Pipelines mit automatischem \`pip install\`
- Docker-Images die das Paket verwenden

### Empfohlene Maßnahmen

1. Prüfen ob \`telnyx\` in euren Projekten verwendet wird
2. Version gegen bekannte sichere Version abgleichen
3. **Zugangsdaten rotieren** die auf betroffenen Systemen verwendet wurden
4. API-Keys in CI/CD-Umgebungen erneuern
5. \`pip audit\` für alle Python-Projekte ausführen
6. Package-Pinning und Hash-Verification in \`requirements.txt\` einsetzen

### Lehren

Supply-Chain-Angriffe über Paket-Manager werden immer raffinierter. Die Verschleierung in Audio-Dateien zeigt, dass herkömmliche Erkennung nicht mehr ausreicht. Unternehmen sollten:

- **Software Composition Analysis (SCA)** Tools einsetzen
- Pakete vor Deployment in Sandbox prüfen
- Private PyPI-Mirrors mit Curation verwenden`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    published_at: '2026-03-30T11:00:00Z',
    reading_time: 5,
    views: 180,
    tags: ['Supply Chain', 'PyPI', 'Python', 'Malware', 'Credential Stealing'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '48',
    slug: 'fake-vscode-security-alerts-github-malware',
    title: 'Warnung: Gefälschte VS Code Security Alerts auf GitHub verbreiten Malware',
    excerpt: 'Großangelegte Kampagne nutzt GitHub Discussions um gefälschte Visual Studio Code Sicherheitswarnungen zu verbreiten. Entwickler werden zum Download von Malware verleitet.',
    content: `## Gefälschte VS Code Alerts auf GitHub

Eine großangelegte Kampagne nutzt die **GitHub Discussions**-Funktion, um Entwickler mit gefälschten Visual Studio Code Sicherheitswarnungen zum Download von Malware zu verleiten.

### So funktioniert der Angriff

1. Angreifer posten in **Discussions-Bereichen** beliebter GitHub-Repositories
2. Die Posts imitieren offizielle **VS Code Security Advisories**
3. Dringende Sprache: "Kritische Sicherheitslücke in VS Code entdeckt"
4. Link zu einem Fake-Update oder "Security Patch"
5. Download enthält **Infostealer-Malware**

### Warum ist das effektiv?

- GitHub Discussions haben das gleiche Trust-Level wie Issues
- Posts erscheinen unter dem Namen des Repository-Projekts
- Entwickler vertrauen GitHub als Plattform
- Die Warnungen sehen täuschend echt aus

### Betroffene Repositories

Die Kampagne zielt auf **populäre Open-Source-Projekte** ab – je mehr Stars, desto mehr potentielle Opfer. Betroffen sind Repositories aus:

- JavaScript/TypeScript Ökosystem
- Python-Frameworks
- DevOps-Tools
- KI/ML-Projekte

### Schutzmaßnahmen

1. **Nie** Software-Updates aus GitHub Discussions herunterladen
2. VS Code Updates nur über den integrierten Update-Mechanismus
3. Bei Security-Warnungen direkt auf die offizielle Seite des Herstellers gehen
4. GitHub Discussions in eigenen Repos moderieren
5. Verdächtige Posts an GitHub melden`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    published_at: '2026-03-30T13:00:00Z',
    reading_time: 4,
    views: 150,
    tags: ['GitHub', 'VS Code', 'Malware', 'Social Engineering', 'Entwickler'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '49',
    slug: 'eu-kommission-aws-cloud-breach-untersuchung',
    title: 'EU-Kommission untersucht Sicherheitsvorfall in eigener AWS-Cloud-Umgebung',
    excerpt: 'Die Europäische Kommission bestätigt einen Sicherheitsvorfall in ihrer Amazon Cloud-Umgebung. Ein Bedrohungsakteur hatte sich Zugang verschafft. Untersuchung läuft.',
    content: `## EU-Kommission: Breach in AWS-Cloud

Die Europäische Kommission untersucht einen Sicherheitsvorfall, nachdem ein Bedrohungsakteur Zugang zu ihrer **Amazon Cloud-Umgebung** erlangt hat.

### Was bekannt ist

- Ein Angreifer konnte in die AWS-Umgebung der EU-Kommission eindringen
- Der genaue Umfang der Kompromittierung wird noch untersucht
- Es ist unklar, welche Daten betroffen sind
- Die Kommission hat eine offizielle Untersuchung eingeleitet

### Mögliche Auswirkungen

Die EU-Kommission verarbeitet in ihren Cloud-Systemen:

- **Vertrauliche EU-Dokumente** und Gesetzesentwürfe
- Diplomatische Kommunikation
- Interne Strategiepapiere
- Daten von EU-Bürgern und -Unternehmen

### Bedeutung für DACH

- EU-Regulierungsdaten könnten kompromittiert sein
- Vertrauensverlust in Cloud-Sicherheit öffentlicher Einrichtungen
- Diskussion über **Datensouveränität** und europäische Cloud-Alternativen
- DACH-Behörden sollten eigene Cloud-Konfigurationen überprüfen

### Lehren

1. Auch große Organisationen sind vor Cloud-Breaches nicht sicher
2. **IAM-Konfigurationen** in AWS regelmäßig auditieren
3. Cloud Security Posture Management (CSPM) einsetzen
4. Prinzip der geringsten Berechtigung konsequent umsetzen
5. Logging und Monitoring für alle Cloud-Aktivitäten aktivieren`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2026-03-30T15:00:00Z',
    reading_time: 4,
    views: 120,
    tags: ['EU-Kommission', 'AWS', 'Cloud', 'Datenpanne', 'Datensouveränität'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '1',
    slug: 'windchill-flexplm-zero-day-polizei-warnt-unternehmen',
    title: 'CVSS 10.0: Polizei klingelt um 4 Uhr morgens bei Admins – Zero-Day in Windchill & FlexPLM',
    excerpt: 'Kritische Zero-Day-Lücken in PTC Windchill und FlexPLM mit CVSS 10.0. Landeskriminalämter aus Bayern und Niedersachsen warnten Unternehmen persönlich – teils mitten in der Nacht.',
    content: `## Zero-Day in PTC Windchill & FlexPLM – CVSS 10.0

In der Nacht vom 21. auf den 22. März 2026 kam es zu einer beispiellosen Aktion: Polizeibehörden und Landeskriminalämter aus mehreren Bundesländern rückten aus, um Unternehmensadministratoren persönlich vor kritischen Schwachstellen zu warnen – teilweise bereits um 4 Uhr morgens.

### Die Schwachstelle

- **Betroffene Software:** PTC Windchill und FlexPLM
- **Schweregrad:** CVSS 10.0 (Maximum)
- **Typ:** Remote Code Execution (RCE) durch Deserialisierung nicht vertrauenswürdiger Daten
- **Authentifizierung:** Nicht erforderlich

### Warum kam die Polizei?

Die Landeskriminalämter aus Bayern, Niedersachsen und weiteren Bundesländern erhielten vom Hersteller PTC Listen betroffener Unternehmen. Aufgrund der extremen Kritikalität (CVSS 10.0) entschied man sich für den unkonventionellen Weg der persönlichen Warnung.

### Was IT-Admins jetzt tun müssen

1. Windchill- und FlexPLM-Installationen sofort identifizieren
2. Verfügbare Patches umgehend einspielen
3. Systeme vom Internet isolieren, falls Patch nicht sofort möglich
4. Logs auf verdächtige Aktivitäten prüfen
5. Incident Response Team informieren

### Einordnung

Eine Polizei-Warnaktion dieses Ausmaßes ist extrem selten und unterstreicht die Schwere der Lücke. Unternehmen, die PTC-Produkte einsetzen, sollten **sofort** handeln.`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    published_at: '2026-03-23T06:00:00Z',
    reading_time: 4,
    views: 4780,
    tags: ['Zero-Day', 'CVSS 10.0', 'Windchill', 'FlexPLM', 'PTC', 'LKA'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '2',
    slug: 'cyberangriffe-deutschland-plus-11-prozent-februar-2026',
    title: '11% mehr Cyberangriffe auf deutsche Unternehmen – 1.345 Attacken pro Woche',
    excerpt: 'Alarmierende Zahlen: Deutsche Unternehmen waren im Februar 2026 durchschnittlich 1.345 Cyberangriffen pro Woche ausgesetzt. Energie, Bildung und Telekommunikation besonders betroffen.',
    content: `## Cyberangriffe auf Deutschland steigen weiter

Die Zahlen für Februar 2026 sind alarmierend: Deutsche Unternehmen verzeichneten einen Anstieg der Cyberangriffe um **11 Prozent** im Jahresvergleich. Durchschnittlich waren Organisationen **1.345 Angriffen pro Woche** ausgesetzt.

### DACH-Vergleich

| Land | Angriffe/Woche | Trend |
|------|---------------|-------|
| Deutschland | 1.345 | +11% |
| Österreich | ~1.400 | +8% |
| Schweiz | ~1.200 | -7% |
| Europa gesamt | 1.764 | steigend |
| Weltweit | 2.086 | steigend |

### Am stärksten betroffene Branchen in Deutschland

1. **Energie & Versorgungsunternehmen** – KRITIS-Sektor im Visier
2. **Bildung** – Schulen und Universitäten oft unzureichend geschützt
3. **Bauwesen & Ingenieurwesen** – Zunehmend digitalisiert, aber Sicherheit hinkt hinterher
4. **Telekommunikation** – Kritische Infrastruktur
5. **Medien & Unterhaltung** – Hohe Sichtbarkeit, attraktive Ziele

### GenAI als neues Risiko

Besonders besorgniserregend: **Jede 31. GenAI-Prompt** birgt ein hohes Risiko der Preisgabe sensibler Daten. 88% der Organisationen, die regelmäßig KI-Tools nutzen, sind davon betroffen.

### Empfehlungen

- Security Awareness für GenAI-Nutzung etablieren
- DLP-Lösungen (Data Loss Prevention) für KI-Tools implementieren
- Netzwerksegmentierung verstärken
- SOC-Kapazitäten aufstocken`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    published_at: '2026-03-15T09:00:00Z',
    reading_time: 5,
    views: 2340,
    tags: ['Statistik', 'DACH', 'KRITIS', 'GenAI', 'Cyberangriffe'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '3',
    slug: 'nis2-registrierungsfrist-abgelaufen-was-jetzt',
    title: 'NIS2-Registrierungsfrist abgelaufen: 29.500 Unternehmen betroffen – Was jetzt droht',
    excerpt: 'Die BSI-Registrierungsfrist für NIS2 ist am 6. März 2026 abgelaufen. Das Gesetz gilt seit Dezember 2025 ohne Übergangsfrist. Wer jetzt nicht handelt, riskiert Bußgelder.',
    content: `## NIS2 in Deutschland: Registrierungsfrist verstrichen

Das NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG) ist seit dem **6. Dezember 2025** in Kraft. Die **BSI-Registrierungsfrist** ist am **6. März 2026** abgelaufen.

### Zeitstrahl

- **13. November 2025:** Bundestag verabschiedet NIS2UmsuCG
- **20. November 2025:** Bundesrat bestätigt
- **6. Dezember 2025:** Inkrafttreten – **ohne Übergangsfrist**
- **6. März 2026:** Registrierungsfrist beim BSI abgelaufen

### Wer ist betroffen?

Rund **29.500 Unternehmen** in Deutschland müssen die neuen Pflichten erfüllen. Die Registrierung erfolgt über das BSI-Portal MUK (muk.bsi.bund.de).

### Kernpflichten

1. **Registrierung beim BSI** über das MUK-Portal
2. **Meldepflichten:** 24h-Frühwarnung, 72h-Bericht, 1-Monats-Abschlussbericht
3. **Risikomanagement** in 10 Bereichen implementieren
4. **Supply Chain Security** sicherstellen
5. **MFA** und Verschlüsselung einsetzen
6. **Backup-Management** etablieren

### Was droht bei Nichteinhaltung?

- Bußgelder bis zu **10 Mio. Euro** oder **2% des weltweiten Jahresumsatzes**
- **Persönliche Haftung** der Geschäftsführung
- Mögliche Betriebsuntersagung in schweren Fällen

### Jetzt handeln

Unternehmen die noch nicht registriert sind, sollten dies **sofort nachholen**. Die fehlende Übergangsfrist bedeutet: Die Pflichten gelten bereits seit Tag 1.`,
    category: 'nis2',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2026-03-07T08:00:00Z',
    reading_time: 6,
    views: 3410,
    tags: ['NIS2', 'BSI', 'Compliance', 'Registrierung', 'Bußgeld'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '4',
    slug: 'fortinet-kritische-schwachstellen-aktiv-ausgenutzt',
    title: 'Fortinet: Mehrere kritische Schwachstellen aktiv ausgenutzt – CVSS bis 9.8',
    excerpt: 'Fortinet bestätigt aktive Ausnutzung kritischer Schwachstellen in FortiOS, FortiWeb und FortiSIEM. CVSS-Scores bis 9.8. Sofortiges Patchen erforderlich.',
    content: `## Kritische Fortinet-Schwachstellen werden aktiv ausgenutzt

Fortinet hat mehrere kritische Sicherheitslücken bestätigt, die aktiv von Angreifern ausgenutzt werden. Betroffen sind zentrale Produkte wie FortiOS, FortiWeb, FortiProxy und FortiSIEM.

### Die kritischsten Schwachstellen

#### CVE-2025-59718 & CVE-2025-59719 (CVSS 9.8)
- **Typ:** Improper Verification of Cryptographic Signature
- **Betroffen:** FortiOS, FortiWeb, FortiProxy, FortiSwitchManager
- **Risiko:** Unauthentifizierte Remote Code Execution

#### CVE-2025-64446 (CVSS 9.1) – Aktiv ausgenutzt!
- **Typ:** Relative Path Traversal
- **Betroffen:** FortiWeb
- **Risiko:** Administrative Kommandos über manipulierte HTTP/HTTPS-Anfragen
- **Status:** Fortinet bestätigt Ausnutzung in freier Wildbahn

#### CVE-2025-64155 (CVSS 9.4)
- **Typ:** OS Command Injection
- **Betroffen:** FortiSIEM
- **Risiko:** Unauthentifizierte Code- und Befehlsausführung

### Sofortmaßnahmen

1. **Alle Fortinet-Produkte** auf neueste Firmware aktualisieren
2. **FortiWeb** besonders priorisieren (aktive Ausnutzung!)
3. Management-Interfaces **nicht** aus dem Internet erreichbar machen
4. Logs auf Indicators of Compromise prüfen
5. WAF-Regeln und IPS-Signaturen aktualisieren

### Warum das für den DACH-Raum besonders relevant ist

Fortinet ist einer der meistgenutzten Firewall- und VPN-Hersteller in der DACH-Region. Tausende Unternehmen setzen FortiGate-Firewalls als Perimeter-Schutz ein.`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-03-25T14:00:00Z',
    reading_time: 5,
    views: 2890,
    tags: ['Fortinet', 'CVE', 'FortiOS', 'FortiWeb', 'Zero-Day'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '5',
    slug: 'cisa-sieben-aktiv-ausgenutzte-schwachstellen',
    title: 'CISA warnt: 7 neue aktiv ausgenutzte Schwachstellen – Apple und CMS betroffen',
    excerpt: 'Die US-Cybersicherheitsbehörde CISA hat 7 neue Schwachstellen in den KEV-Katalog aufgenommen. Fünf betreffen Apple-Produkte, zwei die CMS-Systeme Craft CMS und Laravel.',
    content: `## CISA erweitert KEV-Katalog um 7 kritische Schwachstellen

Die US-Cybersicherheitsbehörde CISA hat ihren Katalog bekannter, aktiv ausgenutzter Schwachstellen (Known Exploited Vulnerabilities, KEV) um sieben neue Einträge erweitert.

### Betroffene Produkte

#### Apple (5 Schwachstellen)
Fünf der sieben neuen Einträge betreffen Apple-Produkte:
- iOS und iPadOS
- macOS
- Safari WebKit
- Betroffen sind sowohl aktuelle als auch ältere Versionen

#### Content Management Systeme (2 Schwachstellen)
- **Craft CMS** – Kritische Schwachstelle ermöglicht Remote Code Execution
- **Laravel Livewire** – Schwachstelle in weit verbreitetem PHP-Framework

### Was bedeutet der KEV-Katalog?

Der KEV-Katalog der CISA listet Schwachstellen, die **nachweislich aktiv ausgenutzt** werden. US-Bundesbehörden sind verpflichtet, diese innerhalb definierter Fristen zu patchen. Auch für DACH-Unternehmen ist der Katalog ein wichtiger Indikator.

### Handlungsempfehlungen

1. **Apple-Geräte** sofort auf die neuesten Versionen aktualisieren
2. **Craft CMS** und **Laravel**-Installationen prüfen und patchen
3. Asset-Inventar auf betroffene Software überprüfen
4. Automatisches Patch-Management für Endgeräte sicherstellen

### Relevanz für DACH

Apple-Geräte sind in DACH-Unternehmen weit verbreitet, besonders im Management. Craft CMS wird von vielen Agenturen und Mittelständlern eingesetzt.`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-03-26T11:00:00Z',
    reading_time: 4,
    views: 1560,
    tags: ['CISA', 'Apple', 'Craft CMS', 'Laravel', 'KEV'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '6',
    slug: 'sap-kritische-schwachstellen-s4hana-cvss-9-9',
    title: 'SAP Notfall-Patch: SQL Injection in S/4HANA mit CVSS 9.9',
    excerpt: 'SAP hat kritische Sicherheitsupdates veröffentlicht. Eine SQL-Injection in S/4HANA erreicht CVSS 9.9. Tausende DACH-Unternehmen müssen sofort patchen.',
    content: `## Kritische SAP-Schwachstellen – Sofort patchen

SAP hat mehrere kritische Sicherheitsupdates veröffentlicht, darunter Schwachstellen mit CVSS-Scores nahe dem Maximum.

### Die kritischsten Schwachstellen

#### CVE-2026-0501 – CVSS 9.9
- **Produkt:** SAP S/4HANA
- **Typ:** SQL Injection
- **Risiko:** Vollständige Kompromittierung der Datenbank
- **Authentifizierung:** Niedrig privilegierter Zugang reicht aus

#### CVE-2026-0500 – CVSS 9.6
- **Produkt:** SAP Wily Introscope Enterprise Manager
- **Typ:** Remote Code Execution
- **Risiko:** Serverübernahme

#### CVE-2025-42880 – CVSS 9.9
- **Produkt:** SAP Solution Manager
- **Typ:** Code Injection
- **Risiko:** Vollständige Systemkontrolle

### Warum DACH besonders betroffen ist

SAP ist das Rückgrat der deutschen Wirtschaft. Nahezu alle DAX-Unternehmen und ein Großteil des Mittelstands setzen SAP-Systeme ein. Eine Kompromittierung kann bedeuten:

- Zugriff auf Finanzdaten und Geschäftsgeheimnisse
- Manipulation von Geschäftsprozessen
- Datenexfiltration im großen Stil

### Sofortmaßnahmen

1. SAP Security Notes **sofort** prüfen und Patches einspielen
2. SAP-Systeme mit Internetzugang besonders priorisieren
3. Datenbankzugriffe auf verdächtige SQL-Muster überwachen
4. SAP Solution Manager Zugriffe einschränken
5. Notfall-Change-Prozess für kritische Patches aktivieren`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    published_at: '2026-03-20T10:00:00Z',
    reading_time: 5,
    views: 3120,
    tags: ['SAP', 'S/4HANA', 'SQL Injection', 'Patch', 'CVE'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '7',
    slug: 'datev-datenpanne-gehaltsdaten-2026',
    title: 'DATEV-Datenpanne: Gehaltsdaten an falsche Empfänger übermittelt',
    excerpt: 'Eine Datenpanne im DATEV-LODAS System führte dazu, dass sensible Gehalts- und Lohndaten an unbefugte Empfänger übermittelt wurden. DSGVO-Meldung erfolgt.',
    content: `## DATEV-Datenpanne betrifft Gehaltsdaten

Anfang 2026 wurde eine schwerwiegende Datenpanne im DATEV-LODAS System bekannt. Sensible Lohn- und Gehaltsdaten wurden versehentlich an unbefugte Empfänger übermittelt.

### Was ist passiert?

Im DATEV-LODAS System, das von tausenden Steuerberatern und Unternehmen für die Lohn- und Gehaltsabrechnung genutzt wird, kam es zu einer fehlerhaften Datenübermittlung. Vertrauliche Gehaltsinformationen wurden an nicht autorisierte Empfänger versendet.

### Betroffene Daten

- Bruttogehälter und Nettogehälter
- Steuer- und Sozialversicherungsdaten
- Personalnummern und Namen
- Bankverbindungen für Gehaltszahlungen

### DSGVO-Relevanz

- Meldung an zuständige Datenschutzbehörde erfolgt
- Betroffene Personen müssen informiert werden
- Art. 33 & 34 DSGVO greifen
- Mögliche Bußgelder bei unzureichenden technischen Maßnahmen

### Was Unternehmen tun sollten

1. Prüfen, ob eigene Daten betroffen sind
2. Bei DATEV/Steuerberater nachfragen
3. Betroffene Mitarbeiter informieren
4. Vorfall im Verarbeitungsverzeichnis dokumentieren
5. Eigene Meldepflicht an Aufsichtsbehörde prüfen

### Lehren für alle

- Auch vertrauenswürdige Dienstleister können Datenpannen haben
- Supply Chain Risk Assessment muss auch Datenverarbeiter umfassen
- Auftragsverarbeitungsverträge (AVV) regelmäßig prüfen`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    published_at: '2026-03-10T11:00:00Z',
    reading_time: 4,
    views: 1940,
    tags: ['DATEV', 'Datenpanne', 'DSGVO', 'Gehaltsdaten', 'LODAS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '8',
    slug: 'bsi-158000-neue-malware-varianten-pro-tag',
    title: 'BSI-Lagebericht: 158.000 neue Malware-Varianten pro Tag im Februar 2026',
    excerpt: 'Das BSI meldet 4,43 Millionen neue Schadprogramm-Varianten im Februar 2026 – ein Plus von 7% zum Vormonat. Ransomware bleibt die größte Bedrohung.',
    content: `## BSI: Malware-Flut nimmt weiter zu

Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat in seinem aktuellen Monatsbericht alarmierende Zahlen veröffentlicht.

### Die Zahlen im Detail

- **4,43 Millionen** neue Schadprogramm-Varianten im Februar 2026
- **158.000** neue Malware-Varianten **pro Tag**
- **+7%** im Vergleich zum Januar 2026
- Trend: Steigend seit Q3/2025

### KRITIS-Störungen

Die Meldungen von Störungen bei KRITIS-Betreibern zeigen ein gemischtes Bild:

- **Q3/2025:** 187 gemeldete Störungen
- **Q4/2025:** 159 gemeldete Störungen (-15%)
- **Spitzenreiter:** Transport & Verkehr mit 47 Störungen
- Ransomware bleibt Hauptursache

### Bedrohungslage

Das BSI bewertet die aktuelle Bedrohungslage als **hoch**. Besondere Gefährdungen:

1. **Ransomware-as-a-Service:** Professionalisierung der Angreifer
2. **Spear-Phishing:** Gezielte Angriffe auf KRITIS-Personal
3. **Scanning-Aktivitäten:** Massives Abtasten von OT-Systemen
4. **Staatliche Akteure:** Verdacht auf geopolitisch motivierte Angriffe

### Empfehlungen des BSI

- Aktuelle Bedrohungsindikatoren über BSI-Feeds beziehen
- KRITIS-Betreiber: Registrierung für BSI-IT-Sicherheitsmitteilungen (BITS)
- Regelmäßige Überprüfung der Sicherheitsarchitektur
- Incident Response Pläne testen`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    published_at: '2026-03-18T08:00:00Z',
    reading_time: 5,
    views: 1680,
    tags: ['BSI', 'Malware', 'KRITIS', 'Lagebericht', 'Ransomware'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '9',
    slug: 'genai-datenleck-risiko-unternehmen',
    title: 'Jede 31. KI-Prompt leakt sensible Daten – 88% der Unternehmen betroffen',
    excerpt: 'Neue Studie zeigt: Generative KI wird zum Datenschutzrisiko. Jede 31. Prompt enthält sensible Unternehmensdaten. Security-Teams müssen reagieren.',
    content: `## GenAI als Datenschutzrisiko

Eine aktuelle Studie zeigt ein alarmierendes Bild: **Jede 31. GenAI-Prompt** birgt ein hohes Risiko der Preisgabe sensibler Unternehmensdaten. **88 Prozent** der Organisationen, die regelmäßig KI-Tools nutzen, sind betroffen.

### Das Problem

Mitarbeiter geben in KI-Tools wie ChatGPT, Copilot und anderen GenAI-Diensten regelmäßig ein:

- Quellcode mit Zugangsdaten und API-Keys
- Interne Dokumente und Strategiepapiere
- Kundendaten und personenbezogene Informationen
- Finanzberichte und Geschäftszahlen

### Warum ist das gefährlich?

- Eingegebene Daten können in Trainingsmodelle einfließen
- Keine Kontrolle über Datenspeicherung beim Anbieter
- DSGVO-Verstoß bei personenbezogenen Daten
- Geschäftsgeheimnisse verlieren ihren Schutz

### Empfohlene Maßnahmen

1. **GenAI-Policy** im Unternehmen etablieren
2. **DLP-Lösungen** (Data Loss Prevention) für KI-Tools implementieren
3. **Schulungen** zu sicherem Umgang mit GenAI durchführen
4. **Interne KI-Lösungen** evaluieren (z.B. lokale LLMs)
5. Sensible Daten-Klassifizierung einführen
6. KI-Nutzung monitoren und auditieren

### DSGVO-Aspekt

Wer personenbezogene Daten in GenAI-Tools eingibt, verstößt in den meisten Fällen gegen die DSGVO:
- Fehlende Rechtsgrundlage (Art. 6 DSGVO)
- Drittlandtransfer ohne angemessene Garantien
- Keine Auftragsverarbeitung vereinbart`,
    category: 'ki-security',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2026-03-22T14:00:00Z',
    reading_time: 5,
    views: 2130,
    tags: ['GenAI', 'Datenschutz', 'DSGVO', 'DLP', 'KI-Sicherheit'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '10',
    slug: 'stryker-cyberangriff-iran-hacktivisten-handala',
    title: 'Medizintechnik-Riese Stryker von Iran-naher Hackergruppe Handala angegriffen',
    excerpt: 'Die iranische Hacktivistengruppe Handala hat ein Administratorkonto in der Microsoft-Umgebung von Stryker Corporation kompromittiert. Auswirkungen auf DACH-Kunden unklar.',
    content: `## Cyberangriff auf Stryker Corporation

Mitte März 2026 wurde der US-amerikanische Medizintechnik-Konzern Stryker Corporation Opfer eines schwerwiegenden Cyberangriffs. Die Iran-nahe Hacktivistengruppe **Handala** hat die Verantwortung übernommen.

### Was ist passiert?

- Kompromittierung eines **Administratorkontos** in Strykers Microsoft-Umgebung
- Zugriff auf interne Systeme und potenziell sensible Daten
- Handala-Gruppe reklamiert den Angriff für sich

### Wer ist Handala?

Handala ist eine Iran-nahe Hacktivistengruppe, die seit 2024 verstärkt westliche Unternehmen und Organisationen angreift. Die Gruppe ist bekannt für:

- Geopolitisch motivierte Angriffe
- Fokus auf Gesundheits- und Technologiesektor
- Veröffentlichung erbeuteter Daten

### Relevanz für den DACH-Raum

Stryker ist einer der weltweit größten Medizintechnik-Hersteller. Im DACH-Raum:

- Zahlreiche Kliniken und Krankenhäuser nutzen Stryker-Produkte
- Mögliche Auswirkungen auf Lieferketten
- Patientendaten könnten indirekt betroffen sein
- KRITIS-Sektor Gesundheit ist besonders sensibel

### Empfehlungen für DACH-Kunden

1. Kommunikation mit Stryker aufnehmen – Status klären
2. Eigene Systeme mit Stryker-Schnittstellen überprüfen
3. Zugangsdaten für Stryker-Portale ändern
4. Monitoring auf verdächtige Aktivitäten verstärken`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    published_at: '2026-03-17T09:00:00Z',
    reading_time: 4,
    views: 1270,
    tags: ['Stryker', 'Handala', 'Iran', 'Medizintechnik', 'KRITIS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '11',
    slug: 'microsoft-patch-tuesday-maerz-2026-zwei-zero-days',
    title: 'Microsoft Patch Tuesday März 2026: 79 Schwachstellen, 2 Zero-Days, 3 kritische Lücken',
    excerpt: 'Microsofts März-Patchday behebt 79 Schwachstellen, darunter 2 Zero-Days und eine Excel-Lücke, die Copilot-Datenabfluss ermöglicht. Office-Updates besonders dringend.',
    content: `## Microsoft Patch Tuesday – März 2026

Microsoft hat am 10. März 2026 insgesamt **79 Sicherheitslücken** behoben, darunter 2 öffentlich bekannte Zero-Day-Schwachstellen und 3 als kritisch eingestufte Lücken.

### Zero-Days

#### CVE-2026-21262 – SQL Server Elevation of Privilege
- Unzureichende Zugriffskontrolle in SQL Server
- Ermöglicht Rechteausweitung über das Netzwerk
- Öffentlich bekannt, bisher keine aktive Ausnutzung

#### CVE-2026-26127 – .NET Denial of Service
- Out-of-Bounds Read in .NET
- Ermöglicht Denial-of-Service über das Netzwerk
- Öffentlich bekannt

### Besonders kritisch: Excel + Copilot

**CVE-2026-26144** – Eine Information-Disclosure-Lücke in Excel, die dazu führen kann, dass der **Copilot Agent Mode Daten über unbeabsichtigte Netzwerkwege exfiltriert**. Dies ermöglicht potenziell Zero-Click-Angriffe.

### Office: Preview Pane reicht aus

Zwei Remote-Code-Execution-Lücken in Office (CVE-2026-26110 und CVE-2026-26113) können bereits über die **Vorschauansicht** im Explorer ausgenutzt werden – kein Öffnen der Datei nötig.

### Aufschlüsselung

- 46 Elevation of Privilege
- 18 Remote Code Execution
- 10 Information Disclosure
- 4 Denial of Service
- 4 Spoofing
- 2 Security Feature Bypass

### Empfehlung

Office- und SQL-Server-Updates sofort einspielen. Die Excel/Copilot-Lücke ist besonders für Unternehmen mit Microsoft 365 Copilot relevant.`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-03-10T18:00:00Z',
    reading_time: 5,
    views: 3850,
    tags: ['Microsoft', 'Patch Tuesday', 'Zero-Day', 'Office', 'Copilot'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '12',
    slug: 'ki-phishing-maerz-2026-neuer-hoehepunkt',
    title: 'KI-Phishing erreicht neuen Höhepunkt: IHK-Betrugswelle und Starbucks-Datenleck',
    excerpt: 'KI-generierte Phishing-Angriffe erreichen im März 2026 ein neues Level. Gefälschte IHK-Mails fordern IBAN-Änderungen, Starbucks verliert Daten von 900 Mitarbeitern.',
    content: `## KI-Phishing-Angriffe im März 2026

Der März 2026 markiert einen neuen Höhepunkt bei KI-gestützten Phishing-Angriffen. Zwei Vorfälle zeigen, wie raffiniert die Angreifer geworden sind.

### Starbucks-Datenleck

Zwischen Januar und Februar 2026 verschafften sich Angreifer unbemerkt Zugang zum internen Personalverwaltungssystem von Starbucks. Der Angriff lief **ohne Schadsoftware** ab:

- Täter nutzten gefälschte Login-Portale
- Mitarbeiter gaben Zugangsdaten preis
- **900 Angestellte** betroffen
- Abgeflossene Daten: Sozialversicherungsnummern, Bankverbindungen

### IHK-Betrugswelle in Deutschland

Seit dem 20. März 2026 verbreiten sich massenhaft gefälschte E-Mails:

- Betrüger geben sich als Vertreter der **Bergischen IHK** aus
- Aufforderung zur Aktualisierung von IBAN-Daten
- Perfektes Deutsch, korrekte Logos und Formatierung
- Ziel: Umleitung von Zahlungen

### Warum klassische Erkennung versagt

Laut KnowBe4 erkennen nur **34%** der Mitarbeiter künstlichen Zeitdruck als Warnsignal. KI-Sprachmodelle generieren:

- Fehlerfreie, personalisierte Texte
- Korrekte Absenderformatierung
- Branchenspezifische Fachbegriffe
- Kontextbezogene Dringlichkeit

Klassische Erkennungszeichen wie Rechtschreibfehler sind damit obsolet.

### Empfohlene Gegenmaßnahmen

1. **Zero-Trust-Prinzip** konsequent umsetzen
2. **Phishing-resistente MFA** (FIDO2/WebAuthn) einführen
3. **Regelmäßige Phishing-Simulationen** mit realistischen Szenarien
4. IBAN-Änderungen nur nach telefonischer Rückbestätigung
5. KI-basierte E-Mail-Security-Lösungen evaluieren`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    published_at: '2026-03-24T10:00:00Z',
    reading_time: 5,
    views: 2740,
    tags: ['Phishing', 'KI', 'Starbucks', 'IHK', 'Social Engineering'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '13',
    slug: 'belgisches-krankenhaus-ransomware-patienten-verlegt',
    title: 'Ransomware legt belgisches Krankenhaus lahm – Patienten müssen verlegt werden',
    excerpt: 'AZ Monica in Antwerpen: Ransomware-Angriff zwingt zur Verlegung von Intensivpatienten. Alle Server heruntergefahren, OPs abgesagt. Warnung für DACH-Kliniken.',
    content: `## Ransomware-Angriff auf AZ Monica Krankenhaus

Am 13. Januar 2026 wurde das AZ Monica Krankenhaus in Antwerpen (Belgien) Opfer eines schweren Ransomware-Angriffs. Die Auswirkungen waren dramatisch und zeigen die lebensbedrohliche Dimension von Cyberangriffen auf Gesundheitseinrichtungen.

### Was passiert ist

- Schwere Störung der gesamten IT-Systeme entdeckt
- **Alle Server** für beide Standorte (Deurne und Antwerpen) präventiv heruntergefahren
- **7 Intensivpatienten** mussten vom Roten Kreuz in andere Krankenhäuser verlegt werden
- Operationen abgesagt
- Massiver Einbruch in der Patientenversorgung

### Auswirkungen

- Kein Zugriff auf elektronische Patientenakten
- Bildgebung (CT, MRT) nicht verfügbar
- Laborsysteme offline
- Notaufnahme auf Papierbetrieb umgestellt
- Wochenlange Wiederherstellung erwartet

### Lehren für DACH-Kliniken

Dieser Vorfall unterstreicht die Dringlichkeit von IT-Sicherheit im Gesundheitswesen:

1. **Netzwerksegmentierung** zwischen IT und Medizintechnik
2. **Offline-Backups** für kritische Patientendaten
3. **Incident Response Pläne** mit medizinischen Notfallszenarien
4. **NIS2-Compliance** für Gesundheitseinrichtungen priorisieren
5. **Regelmäßige Übungen** für den Notbetrieb ohne IT

### EU-Aktionsplan

Die EU-Kommission hat einen Aktionsplan zur Cybersicherheit von Krankenhäusern veröffentlicht. DACH-Kliniken sollten diesen als Leitfaden nutzen.`,
    category: 'ransomware',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    published_at: '2026-01-14T07:00:00Z',
    reading_time: 5,
    views: 4120,
    tags: ['Ransomware', 'Krankenhaus', 'Belgien', 'KRITIS', 'Gesundheitswesen'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '14',
    slug: 'bfv-warnt-signal-phishing-regierungsbeamte',
    title: 'BfV und BSI warnen: Staatliche Phishing-Kampagne zielt auf Signal-Konten von Politikern',
    excerpt: 'Deutschlands Verfassungsschutz warnt vor gezielten Angriffen auf Signal-Messenger-Konten von Journalisten und Regierungsbeamten. Staatliche Akteure im Verdacht.',
    content: `## Staatliche Phishing-Kampagne gegen Signal-Nutzer

Das Bundesamt für Verfassungsschutz (BfV) und das BSI warnen gemeinsam vor einer gezielten Phishing-Kampagne, die auf Signal-Messenger-Konten von Journalisten und Regierungsbeamten abzielt.

### Die Angriffsmethode

- Angreifer geben sich als **offizieller Support** oder automatisierte Chatbots aus
- Kontaktaufnahme direkt über Messenger-Apps
- Nachrichten beginnen mit **dringender Sicherheitswarnung**
- Behauptung: Private Daten könnten ohne sofortiges Handeln verloren gehen
- Opfer werden aufgefordert, **Sicherheits-PINs** oder SMS-Codes zu teilen

### Wer ist betroffen?

- Journalisten (insbesondere investigative Berichterstatter)
- Regierungsbeamte und Politiker
- Mitarbeiter von Behörden und Ministerien
- Aktivisten und NGO-Mitarbeiter

### Einschätzung der Behörden

> "Angesichts der hochrangigen Zielgruppe sind die aktuell bekannten Fälle wahrscheinlich einem **staatlich kontrollierten Cyber-Akteur** zuzurechnen."

Ähnliche Methoden könnten auch gegen **WhatsApp**, Telegram und andere Messenger eingesetzt werden.

### Schutzmaßnahmen

1. **Registrierungssperre** in Signal aktivieren
2. Niemals Sicherheits-PINs oder Codes teilen
3. **Verknüpfte Geräte** regelmäßig prüfen
4. Verdächtige Kontaktanfragen an IT-Sicherheit melden
5. Signal-Desktop nur auf verwalteten Geräten nutzen`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2026-03-19T12:00:00Z',
    reading_time: 4,
    views: 3560,
    tags: ['BfV', 'BSI', 'Signal', 'Phishing', 'Staatliche Akteure'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '15',
    slug: 'android-qualcomm-zero-day-aktiv-ausgenutzt',
    title: 'Android Zero-Day: Qualcomm-Schwachstelle wird gezielt ausgenutzt',
    excerpt: 'Google patcht aktiv ausgenutzte Zero-Day-Lücke in Qualcomm-Display-Komponente. Gezielte Angriffe auf Android-Geräte bestätigt.',
    content: `## Android Sicherheitsupdate – März 2026

Google hat im März-Sicherheitsbulletin für Android eine aktiv ausgenutzte Zero-Day-Schwachstelle in einer Qualcomm-Komponente gepatcht.

### Die Schwachstelle

- **CVE-2026-21385** – Zero-Day in Qualcomm Display-Komponente
- **Status:** Wird unter "begrenzter, gezielter Ausnutzung" beobachtet
- **Betroffen:** Android-Geräte mit Qualcomm Snapdragon Prozessoren
- **Angriffsvektor:** Lokale Rechteausweitung

### Wer ist betroffen?

Nahezu alle Android-Smartphones mit Qualcomm-Chips, darunter:

- Samsung Galaxy S-Serie
- Google Pixel
- OnePlus, Xiaomi, Oppo
- Zahlreiche Mittelklasse-Geräte

### Maßnahmen

1. **Android-Sicherheitsupdate März 2026** sofort installieren
2. Automatische Updates aktivieren
3. MDM-Systeme: Patch-Compliance für mobile Geräte erzwingen
4. Ungemanagte Geräte (BYOD) überprüfen

### Für IT-Admins

Im Unternehmenskontext sollten Mobile Device Management (MDM) Lösungen genutzt werden, um sicherzustellen, dass alle Firmengeräte das aktuelle Sicherheitsupdate erhalten. Besonders bei BYOD-Richtlinien ist die Patch-Kontrolle kritisch.`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    published_at: '2026-03-12T14:00:00Z',
    reading_time: 3,
    views: 1890,
    tags: ['Android', 'Qualcomm', 'Zero-Day', 'Google', 'Mobile Security'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '16',
    slug: 'zoll-deutschlandweite-it-stoerung-haefen-stau',
    title: 'Deutschlandweite IT-Störung beim Zoll: Häfen lahmgelegt, 7 km LKW-Stau',
    excerpt: 'Eine massive IT-Störung hat am 24. März das ATLAS-Zollsystem und weitere Bundesbehörden lahmgelegt. An Häfen bildeten sich kilometerlange LKW-Staus. Cyberangriff nicht ausgeschlossen.',
    content: `## IT-Störung beim deutschen Zoll

Am 24. März 2026 kam es beim deutschen Zoll zu einer deutschlandweiten IT-Störung, die den Logistikverkehr massiv beeinträchtigte.

### Betroffene Systeme

- **ATLAS** – Das zentrale Abfertigungsverfahren für die Zollabwicklung
- Interne Kommunikationssysteme des Zolls
- Weitere zollseitige Fachverfahren
- **Bundeszentralamt für Steuern** (BZSt) – ebenfalls betroffen
- **Elektronischer Zolltarif** (EZT) – ausgefallen

### Auswirkungen

Die Konsequenzen waren sofort spürbar:

- An mehreren Häfen bildeten sich **kilometerlange LKW-Staus**
- Am Hafen Bremerhaven: "Verkehr vorm Zolltor steht bis Wulsdorf = **7 km**, nichts geht mehr!"
- Ladungen konnten nicht abgefertigt werden
- Lieferketten massiv gestört

### Ursache unklar

Der Zoll lehnte es ab zu bestätigen, ob ein **Cyberangriff** die Ursache der Störung war. Die ITZBund (IT-Dienstleister des Bundes) arbeitete mit Hochdruck an der Behebung.

### Lehren

1. Bundesbehörden-IT ist ein Single Point of Failure für die Logistik
2. Backup-Prozesse für Zollabfertigung müssen existieren
3. Transparente Kommunikation bei IT-Vorfällen ist essenziell
4. KRITIS-Abhängigkeiten von Bundes-IT müssen bewertet werden`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    published_at: '2026-03-24T15:00:00Z',
    reading_time: 4,
    views: 3240,
    tags: ['Zoll', 'ATLAS', 'IT-Störung', 'KRITIS', 'Bundesbehörde'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '17',
    slug: 'chinesische-hacker-telekom-infrastruktur',
    title: 'Chinesische Hacker tief in Telekom-Backbone-Infrastruktur eingenistet',
    excerpt: 'Sicherheitsforscher haben chinesische Bedrohungsakteure entdeckt, die sich tief in die Backbone-Infrastruktur von Telekommunikationsanbietern eingenistet haben – mit Stealth-Tools für Langzeitzugriff.',
    content: `## Chinesische APT-Gruppe in Telekom-Infrastruktur

Sicherheitsforscher haben eine beunruhigende Entdeckung gemacht: Chinesisch-verknüpfte Bedrohungsakteure haben sich tief in die Backbone-Infrastruktur von Telekommunikationsanbietern eingenistet.

### Was entdeckt wurde

- **Stealth-Zugriffsmechanismen** tief in Telekom-Kerninfrastruktur platziert
- Zugang zu kritischen Netzwerkkomponenten
- Tools für **langfristigen, verdeckten Zugriff**
- Betrifft Backbone-Systeme, nicht nur Randinfrastruktur

### Betroffene Bereiche

- Telekommunikations-Backbone
- Kritische Netzwerk-Infrastruktur
- Potentiell auch angrenzende KRITIS-Sektoren

### Relevanz für DACH

Europäische Telekommunikationsanbieter sind ebenfalls potenzielle Ziele. Im DACH-Raum bedeutet das:

- Deutsche Telekom, Vodafone, Swisscom und A1 sollten ihre Backbone-Infrastruktur überprüfen
- BSI-Empfehlungen für Telekom-Sicherheit beachten
- Supply Chain der Netzwerkausrüster evaluieren (Huawei-Debatte bekommt neue Relevanz)

### Empfehlungen für Telekom-Betreiber

1. **Network Detection & Response** in Backbone-Segmenten verstärken
2. Firmware-Integrität von Core-Routern und Switches verifizieren
3. Anomalie-Erkennung für Management-Plane-Traffic implementieren
4. Incident Response Pläne für Backbone-Kompromittierung erstellen
5. Informationsaustausch mit nationalen CERTs intensivieren`,
    category: 'kritis',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-03-29T08:00:00Z',
    reading_time: 5,
    views: 890,
    tags: ['APT', 'China', 'Telekommunikation', 'Backbone', 'KRITIS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '18',
    slug: 'hpe-aoscx-kritische-schwachstelle-cvss-9-8',
    title: 'HPE AOS-CX: Kritische Schwachstelle erlaubt Admin-Passwort-Reset ohne Authentifizierung',
    excerpt: 'CVE-2026-23813 mit CVSS 9.8 betrifft HPE Aruba AOS-CX Switches. Angreifer können ohne Authentifizierung Admin-Passwörter zurücksetzen. Patch verfügbar.',
    content: `## Kritische HPE AOS-CX Schwachstelle

Eine kritische Schwachstelle im Web-Management-Interface von HPE Aruba AOS-CX Switches ermöglicht es Angreifern, ohne Authentifizierung administrative Kontrolle zu übernehmen.

### Details

- **CVE:** CVE-2026-23813
- **CVSS Score:** 9.8 (Kritisch)
- **Betroffen:** HPE Aruba AOS-CX Switches – Web-basiertes Management Interface
- **Angriffsvektor:** Remote, ohne Authentifizierung
- **Auswirkung:** Admin-Passwort-Reset, vollständige Geräteübernahme

### Risiko

Ein Angreifer kann über das Netzwerk die Authentifizierungskontrollen umgehen und das Administrator-Passwort zurücksetzen. Damit erhält er vollständige Kontrolle über den Switch und kann:

- Netzwerkkonfigurationen ändern
- Traffic umleiten oder mitlesen
- Weitere Netzwerksegmente kompromittieren
- Persistenten Zugang einrichten

### Sofortmaßnahmen

1. **Patch sofort einspielen** – HPE hat ein Update bereitgestellt
2. Management-Interface **nicht** aus dem Internet erreichbar machen
3. Management-Zugang auf dediziertes VLAN beschränken
4. ACLs für Management-Plane implementieren
5. Logs auf verdächtige Zugriffe prüfen

### DACH-Relevanz

HPE/Aruba Switches sind in vielen DACH-Unternehmen im Einsatz, besonders in Campus-Netzwerken und Rechenzentren.`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800',
    published_at: '2026-03-29T10:00:00Z',
    reading_time: 4,
    views: 620,
    tags: ['HPE', 'Aruba', 'AOS-CX', 'CVE', 'Switch', 'CVSS 9.8'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '19',
    slug: 'shadow-ai-223-datenschutz-verstoesse-pro-monat',
    title: 'Shadow AI: Unternehmen verzeichnen durchschnittlich 223 GenAI-Datenschutzverstöße pro Monat',
    excerpt: 'Neue Studie zeigt: Mitarbeiter nutzen GenAI-Tools unkontrolliert. Durchschnittlich 223 Datenschutz-Vorfälle pro Monat durch Shadow AI in Unternehmen.',
    content: `## Shadow AI als wachsendes Unternehmensrisiko

Eine aktuelle Analyse zeigt ein alarmierendes Ausmaß von unkontrollierter KI-Nutzung in Unternehmen: Durchschnittlich **223 GenAI-Datenschutzverstöße pro Monat** werden registriert.

### Das Problem

"Shadow AI" bezeichnet die Nutzung von KI-Tools durch Mitarbeiter ohne Wissen oder Genehmigung der IT-Abteilung:

- Mitarbeiter laden vertrauliche Dokumente in ChatGPT hoch
- Quellcode mit API-Keys wird in KI-Assistenten eingefügt
- Kundendaten werden für Analysen an externe KI-Dienste gesendet
- Personaldaten für HR-Aufgaben an GenAI-Tools weitergegeben

### Zahlen

- **223** durchschnittliche Datenschutz-Verstöße pro Monat und Unternehmen
- **88%** der Organisationen mit regelmäßiger GenAI-Nutzung betroffen
- Jede **31. Prompt** enthält potenziell sensible Daten
- Trend: Stark steigend seit Q4/2025

### DSGVO-Dimension

Jeder dieser Vorfälle kann einen DSGVO-Verstoß darstellen:

- **Art. 6 DSGVO** – Fehlende Rechtsgrundlage
- **Art. 28 DSGVO** – Keine Auftragsverarbeitung vereinbart
- **Art. 44 DSGVO** – Unzulässiger Drittlandtransfer
- **Art. 32 DSGVO** – Unzureichende technische Maßnahmen

### Gegenmaßnahmen

1. **GenAI-Richtlinie** verbindlich einführen
2. **DLP-Tools** für KI-Plattformen implementieren
3. **Genehmigte KI-Tools** bereitstellen (Enterprise-Versionen)
4. **Schulungen** zu Datenschutzrisiken bei KI-Nutzung
5. **Monitoring** der KI-Tool-Nutzung im Unternehmensnetzwerk`,
    category: 'ki-security',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    published_at: '2026-03-29T12:00:00Z',
    reading_time: 5,
    views: 450,
    tags: ['Shadow AI', 'GenAI', 'DSGVO', 'DLP', 'Datenschutz'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '20',
    slug: 'log4j-2x-neue-schwachstelle-entdeckt',
    title: 'Log4j 2.x: Neue kritische Schwachstelle entdeckt – Erinnerungen an Log4Shell',
    excerpt: 'Sicherheitsforscher haben eine neue Schwachstelle in Apache Log4j 2.x identifiziert. Unternehmen sollten umgehend prüfen, ob sie betroffen sind.',
    content: `## Neue Log4j-Schwachstelle sorgt für Unruhe

Knapp vier Jahre nach der verheerenden **Log4Shell-Schwachstelle** (CVE-2021-44228) sorgt eine neue Sicherheitslücke in Apache Log4j 2.x erneut für Alarm in der IT-Sicherheitscommunity.

## Technische Details

- **Betroffene Versionen:** Log4j 2.0 bis 2.23.0
- **Angriffsvektor:** Remote Code Execution über manipulierte Log-Nachrichten
- **CVSS-Score:** 8.1 (Hoch)
- **Patch verfügbar:** Ja, ab Version 2.23.1

Die Schwachstelle erlaubt es Angreifern, über speziell präparierte Eingaben beliebigen Code auf betroffenen Systemen auszuführen. Im Gegensatz zu Log4Shell erfordert die Ausnutzung jedoch bestimmte Konfigurationsvoraussetzungen.

## Betroffene Systeme

Besonders gefährdet sind:

1. **Java-basierte Webanwendungen** mit Log4j-Abhängigkeit
2. **Microservice-Architekturen** mit zentralem Logging
3. **Legacy-Systeme**, die seit Log4Shell nicht aktualisiert wurden

## Empfohlene Maßnahmen

- Sofortige Aktualisierung auf Log4j **2.23.1 oder höher**
- Überprüfung aller Anwendungen auf Log4j-Abhängigkeiten mittels **Software Bill of Materials (SBOM)**
- Netzwerk-Monitoring auf verdächtige JNDI-Lookups aktivieren
- **WAF-Regeln** für bekannte Exploit-Muster aktualisieren

Das BSI stuft die Bedrohungslage als **geschäftskritisch** ein und empfiehlt sofortiges Handeln.`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    published_at: '2025-11-05T09:00:00Z',
    reading_time: 4,
    views: 2870,
    tags: ['Log4j', 'Schwachstelle', 'RCE', 'Java', 'BSI'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '21',
    slug: 'blackcat-alphv-takedown-fbi',
    title: 'FBI gelingt Takedown der Ransomware-Gruppe BlackCat/ALPHV',
    excerpt: 'In einer koordinierten internationalen Operation hat das FBI die Infrastruktur der berüchtigten Ransomware-Gruppe BlackCat/ALPHV zerschlagen.',
    content: `## BlackCat/ALPHV: Ende einer Ära

Das **Federal Bureau of Investigation (FBI)** hat in einer koordinierten Aktion mit internationalen Strafverfolgungsbehörden die Infrastruktur der Ransomware-Gruppe **BlackCat/ALPHV** erfolgreich zerschlagen.

## Die Operation

- **Beteiligte Behörden:** FBI, Europol, BKA, NCA (UK)
- **Beschlagnahmte Server:** Über 40 Command-and-Control-Server
- **Entschlüsselungstools:** Für mehr als 500 Opfer bereitgestellt
- **Geschätzter Schaden:** Über 300 Millionen USD weltweit

## Wer war BlackCat/ALPHV?

BlackCat/ALPHV war eine der **gefährlichsten Ransomware-as-a-Service (RaaS)** Gruppen weltweit:

1. Aktiv seit Ende 2021
2. Erste Ransomware vollständig in **Rust** programmiert
3. Über 1.000 Opfer in mehr als 60 Ländern
4. Bekannt für **Triple Extortion** – Verschlüsselung, Datendiebstahl und DDoS-Drohungen

## Auswirkungen auf die Bedrohungslandschaft

Experten warnen jedoch vor voreiligem Optimismus:

- Ehemalige Affiliates werden sich **neuen Gruppen** anschließen
- Die Ransomware-Codebasis könnte **geleakt oder weiterverkauft** werden
- Historisch zeigt sich: Nach jedem Takedown entstehen **Nachfolger-Gruppen**

## Lehren für Unternehmen

Trotz des Erfolgs sollten Unternehmen ihre **Ransomware-Schutzmaßnahmen** nicht lockern. Regelmäßige Backups, Netzwerksegmentierung und Incident-Response-Pläne bleiben essenziell.`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800',
    published_at: '2025-11-12T14:00:00Z',
    reading_time: 5,
    views: 2650,
    tags: ['BlackCat', 'ALPHV', 'FBI', 'Ransomware', 'Takedown', 'Europol'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '22',
    slug: 'deutsche-stadtwerke-ransomware-betroffen',
    title: 'Deutsche Stadtwerke von Ransomware betroffen – Versorgung zeitweise gefährdet',
    excerpt: 'Mehrere Stadtwerke in Süddeutschland wurden Opfer eines koordinierten Ransomware-Angriffs. Die Strom- und Wasserversorgung war zeitweise beeinträchtigt.',
    content: `## Koordinierter Angriff auf kommunale Versorger

Ein **koordinierter Ransomware-Angriff** hat mehrere Stadtwerke in Süddeutschland getroffen und die Versorgungssicherheit zeitweise gefährdet. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat die Warnstufe **Rot** ausgerufen.

## Betroffene Infrastruktur

- **3 Stadtwerke** in Baden-Württemberg und Bayern betroffen
- **Strom-, Gas- und Wasserversorgung** zeitweise auf Notbetrieb
- **IT-Systeme** vollständig verschlüsselt
- **Abrechnungssysteme** über 2 Wochen nicht verfügbar

## Ablauf des Angriffs

1. **Initialer Zugang** über kompromittierte VPN-Zugangsdaten eines Dienstleisters
2. **Lateral Movement** über gemeinsam genutzte Verwaltungssoftware
3. **Verschlüsselung** aller erreichbaren Systeme am Wochenende
4. **Lösegeldforderung:** 2,5 Millionen Euro in Bitcoin

## Reaktion der Behörden

Das BSI hat ein **Krisenteam** vor Ort entsandt. Die betroffenen Stadtwerke konnten die Versorgung durch Umstellung auf **manuelle Steuerung** aufrechterhalten. Die Ermittlungen des BKA laufen.

## KRITIS-Dimension

Der Vorfall unterstreicht die **Verwundbarkeit kritischer Infrastrukturen** in Deutschland. Experten fordern seit langem eine bessere Absicherung kommunaler IT-Systeme und verpflichtende Sicherheitsaudits für KRITIS-Betreiber.`,
    category: 'kritis',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    published_at: '2025-11-19T07:30:00Z',
    reading_time: 5,
    views: 2980,
    tags: ['KRITIS', 'Stadtwerke', 'Ransomware', 'BSI', 'Versorgungssicherheit'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '23',
    slug: 'dsgvo-bussgeld-meta-1-2-milliarden',
    title: 'DSGVO-Rekordstrafe: Meta muss 1,2 Milliarden Euro zahlen',
    excerpt: 'Die irische Datenschutzbehörde DPC hat gegen Meta eine Rekordstrafe von 1,2 Milliarden Euro wegen illegaler Datenübertragungen in die USA verhängt.',
    content: `## Historische Strafe gegen Meta

Die irische **Data Protection Commission (DPC)** hat gegen Meta Platforms Ireland eine DSGVO-Strafe in Höhe von **1,2 Milliarden Euro** verhängt – die höchste Geldbuße in der Geschichte der Datenschutz-Grundverordnung.

## Hintergrund

- **Verstoß:** Illegale Übermittlung personenbezogener Daten von EU-Bürgern in die USA
- **Betroffene Nutzer:** Geschätzt 400 Millionen EU-Facebook-Nutzer
- **Zeitraum:** Seit Ungültigkeitserklärung des Privacy Shield (Schrems II)
- **Rechtsgrundlage:** Art. 46 Abs. 1 DSGVO – Übermittlung auf Grundlage geeigneter Garantien

## Bedeutung für Unternehmen

Das Urteil hat weitreichende Konsequenzen für alle Unternehmen, die Daten in Drittländer übertragen:

1. **Standardvertragsklauseln (SCCs)** allein reichen nicht aus
2. **Transfer Impact Assessments** sind zwingend erforderlich
3. Unternehmen müssen die **Rechtslage im Zielland** genau prüfen
4. Bei Zweifeln ist eine **Datenlokalisierung in der EU** zu bevorzugen

## Reaktion von Meta

Meta hat angekündigt, gegen die Entscheidung **Berufung einzulegen**. Das Unternehmen verweist auf das neue **EU-US Data Privacy Framework**, das zwischenzeitlich in Kraft getreten sei.

## Fazit

Die Strafe sendet ein **klares Signal**: Die DSGVO wird durchgesetzt, auch gegen die größten Tech-Konzerne der Welt.`,
    category: 'dsgvo',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800',
    published_at: '2025-12-03T10:00:00Z',
    reading_time: 4,
    views: 2340,
    tags: ['DSGVO', 'Meta', 'Bußgeld', 'Datentransfer', 'DPC'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '24',
    slug: 'bsi-lagebericht-2025-veroeffentlicht',
    title: 'BSI Lagebericht 2025: Bedrohungslage auf Rekordniveau',
    excerpt: 'Das BSI hat den Lagebericht zur IT-Sicherheit in Deutschland 2025 veröffentlicht. Die Bedrohungslage erreicht ein neues Allzeithoch.',
    content: `## BSI-Lagebericht 2025: Die wichtigsten Ergebnisse

Das **Bundesamt für Sicherheit in der Informationstechnik (BSI)** hat den jährlichen Lagebericht zur IT-Sicherheit in Deutschland veröffentlicht. Die Zahlen sind alarmierend.

## Zentrale Erkenntnisse

- **Täglich 553.000 neue Schadprogramm-Varianten** (plus 18% gegenüber 2024)
- **Ransomware** bleibt die größte Bedrohung für Unternehmen
- **KI-gestützte Angriffe** nehmen signifikant zu
- **Kritische Infrastrukturen** verstärkt im Visier staatlicher Akteure

## Ransomware-Statistiken

1. Durchschnittliche **Ausfallzeit** nach Ransomware-Angriff: 23 Tage
2. Durchschnittliches **Lösegeld**: 4,2 Millionen Euro
3. **72% der Opfer** zahlten kein Lösegeld (Verbesserung gegenüber Vorjahr)
4. **Mittelstand** weiterhin bevorzugtes Ziel

## Neue Bedrohungen

Das BSI hebt besonders hervor:

- **Deepfake-basierte Angriffe** auf Führungskräfte
- **Supply-Chain-Kompromittierungen** über Open-Source-Pakete
- **Shadow AI** als neuer Risikofaktor in Unternehmen
- Zunehmende **Professionalisierung** der Cyberkriminalität

## Empfehlungen des BSI

Das BSI empfiehlt Unternehmen unter anderem **Zero-Trust-Architekturen**, regelmäßige **Penetrationstests** und die Umsetzung des **IT-Grundschutzes**. Besonders betont wird die Notwendigkeit der **NIS2-Compliance** für betroffene Unternehmen.`,
    category: 'kritis',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    published_at: '2025-12-10T08:00:00Z',
    reading_time: 5,
    views: 2560,
    tags: ['BSI', 'Lagebericht', 'Ransomware', 'KRITIS', 'Bedrohungslage'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '25',
    slug: 'deepfake-ceo-betrug-schweizer-firma',
    title: 'Deepfake CEO-Betrug: Schweizer Firma verliert 3 Millionen CHF',
    excerpt: 'Cyberkriminelle nutzten KI-generierte Deepfake-Videos des CEOs, um einen Finanzmitarbeiter einer Schweizer Firma zu einer Überweisung von 3 Mio. CHF zu bewegen.',
    content: `## KI-gestützter Betrug auf neuem Niveau

Eine **Schweizer Industriefirma** ist Opfer eines ausgeklügelten Deepfake-Betrugs geworden. Kriminelle nutzten KI-generierte Videos und Stimmen des CEOs, um einen Finanzmitarbeiter zu einer Überweisung von **3 Millionen Schweizer Franken** zu veranlassen.

## Ablauf des Angriffs

1. Angreifer sammelten **öffentlich verfügbare Videos** und Audiomaterial des CEOs
2. Mittels KI wurde ein **täuschend echtes Deepfake-Video** erstellt
3. In einem vermeintlichen **Videocall** wies der „CEO" eine dringende Überweisung an
4. Der Mitarbeiter führte die Transaktion aus – das Geld war innerhalb von **Minuten** auf ausländischen Konten

## Warum der Betrug funktionierte

- **Videoqualität** war überzeugend – Mimik und Lippenbewegungen stimmten
- Die **Stimme** war nahezu identisch mit der des echten CEOs
- Der Anruf kam zu einem **plausiblen Zeitpunkt** (CEO war auf Geschäftsreise)
- Es wurde **Zeitdruck** aufgebaut: „vertrauliche Übernahme"

## Schutzmaßnahmen

Unternehmen sollten folgende Maßnahmen implementieren:

- **Vier-Augen-Prinzip** für alle Überweisungen über einem Schwellenwert
- **Codewort-System** für telefonische Freigaben
- **Schulungen** zu Deepfake-Erkennung für Finanzabteilungen
- **Verifizierung** über einen zweiten, unabhängigen Kommunikationskanal

Die Schweizer Bundespolizei ermittelt. Experten rechnen mit einer **starken Zunahme** solcher Angriffe durch immer bessere KI-Modelle.`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800',
    published_at: '2025-12-15T11:00:00Z',
    reading_time: 5,
    views: 2180,
    tags: ['Deepfake', 'CEO-Fraud', 'KI', 'Social Engineering', 'Schweiz'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '26',
    slug: 'nis2-umsetzungsgesetz-bundestag-verabschiedet',
    title: 'NIS2-Umsetzungsgesetz im Bundestag verabschiedet',
    excerpt: 'Der Deutsche Bundestag hat das NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG) verabschiedet. Rund 29.500 Unternehmen sind betroffen.',
    content: `## NIS2UmsuCG: Deutschland setzt EU-Richtlinie um

Der **Deutsche Bundestag** hat das NIS2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG) verabschiedet. Damit wird die EU-Richtlinie NIS2 in nationales Recht überführt.

## Was ändert sich?

- **29.500 Unternehmen** in Deutschland neu von Cybersicherheitspflichten betroffen
- **Meldepflichten** für Sicherheitsvorfälle innerhalb von 24 Stunden
- **Bußgelder** bis zu 10 Millionen Euro oder 2% des Jahresumsatzes
- **Persönliche Haftung** der Geschäftsleitung für Cybersicherheit

## Betroffene Sektoren

Das Gesetz unterscheidet zwischen **besonders wichtigen** und **wichtigen Einrichtungen**:

1. Energie, Transport, Bankwesen, Gesundheit
2. Digitale Infrastruktur und IT-Dienste
3. Lebensmittelproduktion und -verteilung
4. Abfallwirtschaft, Post- und Kurierdienste
5. Chemie, Forschung und Herstellung

## Zeitplan

- **Registrierungspflicht:** Innerhalb von 3 Monaten nach Inkrafttreten
- **Umsetzung der Sicherheitsmaßnahmen:** 12 Monate nach Inkrafttreten
- **Erste Audits:** Ab 18 Monaten nach Inkrafttreten

## Was Unternehmen jetzt tun sollten

- Prüfen, ob das eigene Unternehmen **unter NIS2 fällt**
- **Risikoanalyse** der aktuellen IT-Sicherheitsmaßnahmen durchführen
- **Incident-Response-Prozesse** etablieren oder überarbeiten
- **Budget** für Cybersicherheit erhöhen`,
    category: 'nis2',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    published_at: '2025-11-28T10:00:00Z',
    reading_time: 5,
    views: 2750,
    tags: ['NIS2', 'NIS2UmsuCG', 'Bundestag', 'Compliance', 'KRITIS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '27',
    slug: 'microsoft-copilot-security-risiken',
    title: 'Microsoft Copilot: Sicherheitsforscher warnen vor Datenabfluss-Risiken',
    excerpt: 'Sicherheitsforscher haben mehrere Wege identifiziert, über die Microsoft Copilot sensible Unternehmensdaten preisgeben kann.',
    content: `## Copilot als Sicherheitsrisiko?

Sicherheitsforscher haben mehrere **kritische Schwachstellen** in der Art und Weise identifiziert, wie **Microsoft Copilot** auf Unternehmensdaten zugreift und diese verarbeitet. Die Ergebnisse werfen Fragen zur Sicherheit KI-gestützter Assistenten auf.

## Identifizierte Risiken

- **Übermäßige Datenexposition:** Copilot kann auf alle Daten zugreifen, auf die der Nutzer Zugriff hat – auch auf solche, die er nicht kennt
- **Prompt Injection:** Angreifer können über manipulierte Dokumente Copilot-Antworten beeinflussen
- **Datenlecks in Chats:** Copilot kann vertrauliche Informationen in geteilten Chatverläufen preisgeben
- **Fehlende Granularität:** Keine feingranulare Kontrolle, welche Daten Copilot nutzen darf

## Demonstrierte Angriffsszenarien

1. **Versteckte Anweisungen** in SharePoint-Dokumenten steuern Copilot-Ausgaben
2. Copilot fasst **vertrauliche E-Mails** zusammen, auf die der Nutzer eigentlich keinen Zugriff haben sollte
3. **Prompt-Exfiltration** – Sensible Daten werden über Copilot-Antworten nach außen geleitet

## Microsofts Reaktion

Microsoft hat die Berichte **bestätigt** und arbeitet an Verbesserungen:

- **Sensitivity Labels** werden stärker in Copilot integriert
- Neue **Admin-Kontrollen** zur Einschränkung des Datenzugriffs
- Verbesserte **Audit-Logs** für Copilot-Aktivitäten

## Empfehlungen

Unternehmen sollten vor dem Copilot-Rollout ihre **Berechtigungsstrukturen** grundlegend überprüfen und das **Prinzip der minimalen Berechtigung** konsequent umsetzen.`,
    category: 'ki-security',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800',
    published_at: '2025-12-20T09:30:00Z',
    reading_time: 5,
    views: 1980,
    tags: ['Microsoft', 'Copilot', 'KI', 'Datenschutz', 'Prompt Injection'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '28',
    slug: 'kritische-cisco-ios-xe-schwachstelle',
    title: 'Kritische Cisco IOS XE Schwachstelle: Über 50.000 Geräte kompromittiert',
    excerpt: 'Eine kritische Schwachstelle in Cisco IOS XE wird aktiv ausgenutzt. Weltweit sind über 50.000 Netzwerkgeräte betroffen.',
    content: `## Massive Ausnutzung der Cisco IOS XE Schwachstelle

Eine **kritische Schwachstelle** in Cisco IOS XE (CVSS 10.0) wird weltweit aktiv und massiv ausgenutzt. Sicherheitsforscher haben bereits über **50.000 kompromittierte Geräte** identifiziert.

## Technische Details

- **CVE:** CVE-2026-1001
- **CVSS-Score:** 10.0 (Kritisch)
- **Angriffsvektor:** Unauthentifizierter Zugriff über Web UI
- **Betroffene Systeme:** Alle Cisco-Geräte mit IOS XE und aktiviertem Web UI

Die Schwachstelle ermöglicht Angreifern, ohne Authentifizierung ein **privilegiertes Benutzerkonto** auf betroffenen Geräten anzulegen und so vollständige Kontrolle zu erlangen.

## Ausmaß der Kompromittierung

1. **50.000+** Geräte weltweit bereits kompromittiert
2. **Deutschland:** Geschätzt 3.500 betroffene Systeme
3. Betroffen sind **Router, Switches und Firewalls** in Unternehmensnetzwerken
4. Angreifer installieren **Backdoors** für persistenten Zugang

## Sofortmaßnahmen

Cisco empfiehlt dringend:

- **Web UI sofort deaktivieren** auf allen betroffenen Geräten
- Prüfung auf **unbekannte Benutzerkonten** (insbesondere mit Privilege Level 15)
- **Forensische Analyse** der Geräte-Logs
- Patchen auf die **neueste IOS XE Version**

## BSI-Warnung

Das BSI hat eine **dringende Warnung** herausgegeben und stuft die Bedrohung als **geschäftskritisch** ein. Unternehmen sollten umgehend prüfen, ob ihre Cisco-Infrastruktur betroffen ist.`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    published_at: '2026-01-08T07:00:00Z',
    reading_time: 4,
    views: 1850,
    tags: ['Cisco', 'IOS XE', 'Schwachstelle', 'CVSS 10.0', 'BSI'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '29',
    slug: 'quishing-qr-code-phishing-nimmt-zu',
    title: 'Quishing: QR-Code-Phishing nimmt um 300% zu',
    excerpt: 'QR-Code-basiertes Phishing (Quishing) hat sich im letzten Quartal verdreifacht. Besonders betroffen: Parkautomaten, Restaurants und gefälschte Behördenpost.',
    content: `## Quishing: Die neue Phishing-Welle

**QR-Code-Phishing**, auch bekannt als „Quishing", verzeichnet einen alarmierenden Anstieg von **300 Prozent** im Vergleich zum Vorquartal. Die Methode ist besonders tückisch, da QR-Codes von herkömmlichen E-Mail-Filtern nicht erkannt werden.

## Häufige Angriffsvektoren

- **Gefälschte Strafzettel** mit QR-Code zur „Online-Bezahlung"
- **Manipulierte Parkautomaten** – QR-Code-Aufkleber über echtem Code
- **Phishing-E-Mails** mit QR-Code statt Link (umgeht URL-Scanner)
- **Gefälschte Behördenpost** mit QR-Code für angebliche Steuerrückerstattung

## Warum Quishing so effektiv ist

1. QR-Codes werden von **E-Mail-Sicherheitslösungen** oft nicht gescannt
2. Nutzer prüfen **QR-Code-Ziele** selten vor dem Scannen
3. Mobile Geräte haben oft **weniger Sicherheitssoftware** als PCs
4. QR-Codes wirken **vertrauenswürdig** – man kennt sie vom Restaurant oder Amt

## Aktuelle Fälle in der DACH-Region

- **München:** Gefälschte Parkautomaten-QR-Codes in der Innenstadt
- **Wien:** Phishing-Briefe im Design der Finanzamts
- **Zürich:** Manipulierte QR-Codes in Restaurant-Speisekarten

## Schutzmaßnahmen

- **URL immer prüfen**, bevor Daten eingegeben werden
- QR-Code-Scanner nutzen, die die **Ziel-URL anzeigen** vor dem Öffnen
- **Multi-Faktor-Authentifizierung** für alle Online-Konten aktivieren
- Mitarbeiter in **Security-Awareness-Schulungen** über Quishing informieren`,
    category: 'phishing',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800',
    published_at: '2026-01-14T10:30:00Z',
    reading_time: 4,
    views: 1720,
    tags: ['Quishing', 'QR-Code', 'Phishing', 'Social Engineering', 'DACH'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '30',
    slug: 'datenpanne-deutsches-gesundheitsportal',
    title: 'Datenpanne bei deutschem Gesundheitsportal: 800.000 Patientendaten betroffen',
    excerpt: 'Ein großes deutsches Gesundheitsportal meldet eine schwerwiegende Datenpanne. Sensible Patientendaten von 800.000 Nutzern waren über Wochen frei zugänglich.',
    content: `## Massive Datenpanne im Gesundheitswesen

Ein führendes deutsches **Gesundheitsportal** hat eine schwerwiegende Datenpanne gemeldet. Über einen Zeitraum von mehreren Wochen waren sensible **Patientendaten von 800.000 Nutzern** ohne Authentifizierung über eine offene API abrufbar.

## Betroffene Daten

- **Vollständige Namen** und Geburtsdaten
- **Krankenversicherungsnummern**
- **Diagnosen und Behandlungsverläufe**
- **Medikationspläne**
- Teilweise **Laborergebnisse** und Arztbriefe

## Ursache

Die Datenpanne wurde durch eine **fehlerhafte API-Konfiguration** nach einem Software-Update verursacht:

1. Ein neuer API-Endpunkt wurde **ohne Authentifizierung** deployt
2. Die **Autorisierungsprüfung** wurde versehentlich deaktiviert
3. Automatisierte Sicherheitstests hatten den Fehler **nicht erkannt**
4. Ein Sicherheitsforscher meldete die Lücke nach **3 Wochen**

## Rechtliche Konsequenzen

- **Meldung an die Datenschutzbehörde** innerhalb von 72 Stunden erfolgt
- Alle betroffenen Nutzer wurden **individuell informiert**
- Die Datenschutzbehörde hat ein **Bußgeldverfahren** eingeleitet
- Es drohen Strafen von bis zu **20 Millionen Euro** oder 4% des Jahresumsatzes

## Lehren

Der Vorfall zeigt die Notwendigkeit von **automatisierten API-Sicherheitstests**, regelmäßigen **Penetrationstests** und konsequentem **Security-by-Design** bei Software-Updates.`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    published_at: '2026-01-20T08:00:00Z',
    reading_time: 5,
    views: 1640,
    tags: ['Datenpanne', 'Gesundheitswesen', 'API', 'DSGVO', 'Patientendaten'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '31',
    slug: 'ransomware-angriff-oesterreichische-gemeinde',
    title: 'Ransomware-Angriff auf österreichische Gemeinde: Bürgerservices wochenlang lahmgelegt',
    excerpt: 'Eine Gemeinde in Oberösterreich wurde Opfer eines schweren Ransomware-Angriffs. Sämtliche digitalen Bürgerservices sind seit zwei Wochen nicht verfügbar.',
    content: `## Gemeinde in Oberösterreich lahmgelegt

Eine **mittelgroße Gemeinde in Oberösterreich** mit rund 25.000 Einwohnern wurde Opfer eines Ransomware-Angriffs. Seit zwei Wochen sind nahezu alle **digitalen Verwaltungsdienste** nicht verfügbar.

## Auswirkungen

- **Meldewesen** komplett offline – keine An- und Abmeldungen möglich
- **Baugenehmigungen** können nicht bearbeitet werden
- **Standesamt** arbeitet wieder mit Papierformularen
- **E-Mail-Kommunikation** der gesamten Verwaltung ausgefallen
- **Finanzabteilung** kann keine Zahlungen verarbeiten

## Angriffsdetails

- **Ransomware-Gruppe:** Vermutlich LockBit-Nachfolger
- **Lösegeldforderung:** 500.000 Euro in Monero
- **Verschlüsselte Systeme:** Server, Backup-Systeme, Arbeitsplatzrechner
- **Einfallstor:** Phishing-E-Mail an einen Verwaltungsmitarbeiter

## Reaktion

Die Gemeinde hat mit Unterstützung des **österreichischen CERT** und externer IT-Forensiker reagiert:

1. Sofortige **Trennung** aller Systeme vom Netzwerk
2. **Krisenstab** unter Leitung des Bürgermeisters eingerichtet
3. Kommunikation über **private Mobiltelefone** der Mitarbeiter
4. **Wiederherstellung** aus älteren, nicht kompromittierten Backups

## Kosten

Die geschätzten Gesamtkosten für Wiederherstellung, Forensik und entgangene Produktivität belaufen sich auf **über 2 Millionen Euro** – ein Vielfaches der Lösegeldforderung. Die Gemeinde hat das Lösegeld **nicht bezahlt**.`,
    category: 'ransomware',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800',
    published_at: '2026-01-25T09:00:00Z',
    reading_time: 5,
    views: 1530,
    tags: ['Ransomware', 'Österreich', 'Gemeinde', 'Verwaltung', 'LockBit'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '32',
    slug: 'eu-ai-act-auswirkungen-cybersecurity',
    title: 'EU AI Act tritt in Kraft: Was bedeutet das für die Cybersicherheit?',
    excerpt: 'Mit dem Inkrafttreten des EU AI Acts ergeben sich neue Anforderungen an die Sicherheit von KI-Systemen. Ein Überblick über die wichtigsten Cybersecurity-Aspekte.',
    content: `## EU AI Act und Cybersicherheit

Der **EU AI Act** ist offiziell in Kraft getreten und bringt weitreichende Regulierungen für KI-Systeme mit sich. Besonders relevant sind die **Cybersecurity-Anforderungen** für Hochrisiko-KI-Systeme.

## Neue Sicherheitsanforderungen

- **Robustheit:** KI-Systeme müssen gegen Adversarial Attacks geschützt sein
- **Datenintegrität:** Trainingsdaten müssen vor Manipulation geschützt werden
- **Logging:** Alle KI-Entscheidungen müssen nachvollziehbar protokolliert werden
- **Zugangskontrolle:** Strenge Authentifizierung für KI-Management-Interfaces

## Klassifizierung der Risikogruppen

1. **Inakzeptables Risiko:** Verboten (z.B. Social Scoring, biometrische Massenüberwachung)
2. **Hohes Risiko:** Strenge Auflagen (z.B. KI in Medizin, Justiz, Personalwesen)
3. **Begrenztes Risiko:** Transparenzpflichten (z.B. Chatbots, Deepfakes)
4. **Minimales Risiko:** Keine besonderen Auflagen

## Auswirkungen auf IT-Sicherheitsteams

Security-Teams müssen sich auf neue Aufgaben einstellen:

- **KI-spezifische Penetrationstests** (Adversarial Testing)
- **Model Security** – Schutz von KI-Modellen vor Diebstahl und Manipulation
- **Data Poisoning Detection** – Erkennung von Trainingsdaten-Manipulation
- **AI Supply Chain Security** – Überprüfung von vortrainierten Modellen

## Fristen

Unternehmen haben je nach Risikokategorie **6 bis 24 Monate** Zeit, die Anforderungen umzusetzen. Verstöße können mit Bußgeldern von bis zu **35 Millionen Euro** oder 7% des Jahresumsatzes geahndet werden.`,
    category: 'ki-security',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    published_at: '2026-02-03T10:00:00Z',
    reading_time: 5,
    views: 1380,
    tags: ['EU AI Act', 'KI', 'Regulierung', 'Compliance', 'Cybersecurity'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '33',
    slug: 'supply-chain-angriff-npm-pakete',
    title: 'Supply-Chain-Angriff über NPM-Pakete: Tausende Entwickler betroffen',
    excerpt: 'Angreifer haben populäre NPM-Pakete kompromittiert und Backdoors eingeschleust. Über 15.000 Entwicklungsprojekte sind potenziell betroffen.',
    content: `## Massive Supply-Chain-Attacke über NPM

Ein **koordinierter Supply-Chain-Angriff** über kompromittierte NPM-Pakete hat die JavaScript-Entwicklergemeinde erschüttert. Mindestens **12 populäre Pakete** wurden mit Schadcode versehen.

## Betroffene Pakete

- Pakete mit insgesamt **über 45 Millionen wöchentlichen Downloads**
- Betroffen sind sowohl **direkte Abhängigkeiten** als auch **transitive Dependencies**
- Der Schadcode war in **minifizierten Dateien** versteckt
- **15.000+** Projekte potenziell kompromittiert

## Angriffsvektor

Die Angreifer nutzten eine Kombination aus Methoden:

1. **Account Takeover** – Übernahme von Maintainer-Konten ohne MFA
2. **Typosquatting** – Pakete mit ähnlichen Namen wie populäre Libraries
3. **Dependency Confusion** – Ausnutzung privater vs. öffentlicher Registry-Konflikte

## Schadfunktionen

Der eingeschleuste Code hatte folgende Funktionen:

- **Exfiltration** von Umgebungsvariablen (API-Keys, Tokens)
- **Cryptocurrency-Mining** auf Build-Servern
- **Backdoor-Installation** für persistenten Zugang
- **Credential Harvesting** aus .env-Dateien und SSH-Keys

## Gegenmaßnahmen

- **npm audit** auf allen Projekten ausführen
- **Lockfiles** auf unerwartete Änderungen prüfen
- **SBOM** (Software Bill of Materials) erstellen und pflegen
- **Sigstore/npm Provenance** für vertrauenswürdige Pakete nutzen
- **Private NPM Registry** mit Sicherheitsscanning einsetzen`,
    category: 'schwachstellen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    published_at: '2026-02-07T11:00:00Z',
    reading_time: 5,
    views: 1290,
    tags: ['Supply Chain', 'NPM', 'JavaScript', 'Backdoor', 'SBOM'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '34',
    slug: 'kritis-wasserwerk-norddeutschland-angegriffen',
    title: 'KRITIS-Alarm: Wasserwerk in Norddeutschland Ziel eines Cyberangriffs',
    excerpt: 'Ein Wasserwerk in Norddeutschland wurde Ziel eines gezielten Cyberangriffs auf die Steuerungstechnik. Das BSI spricht von einem "ernsten Vorfall".',
    content: `## Angriff auf Wasserversorgung

Ein **Wasserwerk in Norddeutschland** wurde Ziel eines gezielten Cyberangriffs auf die **industrielle Steuerungstechnik (ICS/SCADA)**. Das BSI stuft den Vorfall als einen der **schwersten Angriffe auf deutsche KRITIS** ein.

## Was passierte?

- Angreifer erlangten Zugriff auf die **SCADA-Steuerung** des Wasserwerks
- **Chlordosierung** und **Pumpsteuerung** wurden manipuliert
- Die Manipulation wurde durch das **Alarmsystem** rechtzeitig erkannt
- **Keine Gefährdung** der Trinkwasserversorgung dank manueller Überbrückung

## Attribution

Erste Analysen deuten auf einen **staatlich unterstützten Akteur** hin:

1. Verwendete Tools stimmen mit **bekannten APT-Gruppen** überein
2. Angriff erfolgte über **kompromittierte Fernwartungszugänge**
3. Die eingesetzte **Malware** war speziell für ICS-Systeme entwickelt
4. **Mehrmonatige Vorbereitungsphase** wurde nachgewiesen

## BSI-Reaktion

Das BSI hat sofort reagiert:

- **Krisenteam** vor Ort zur forensischen Analyse
- **Warnmeldung** an alle Wasserversorger in Deutschland
- Empfehlung zur **sofortigen Überprüfung** aller Fernwartungszugänge
- **Sonderlagebericht** an die Bundesregierung

## Konsequenzen

Der Vorfall hat die Debatte um die **Cybersicherheit kritischer Infrastrukturen** neu entfacht. Experten fordern verpflichtende **OT-Security-Audits** und eine Trennung von IT- und OT-Netzwerken bei allen KRITIS-Betreibern.`,
    category: 'kritis',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1504972997617-48207f7a3cce?w=800',
    published_at: '2026-02-12T06:30:00Z',
    reading_time: 5,
    views: 1450,
    tags: ['KRITIS', 'Wasserwerk', 'ICS', 'SCADA', 'BSI', 'APT'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '35',
    slug: 'dsgvo-neue-standardvertragsklauseln-2026',
    title: 'DSGVO: Neue Standardvertragsklauseln 2026 – Was Unternehmen wissen müssen',
    excerpt: 'Die EU-Kommission hat aktualisierte Standardvertragsklauseln (SCCs) für internationale Datentransfers veröffentlicht. Die Übergangsfrist beträgt 12 Monate.',
    content: `## Neue SCCs für internationalen Datentransfer

Die **EU-Kommission** hat aktualisierte **Standardvertragsklauseln (SCCs)** für die Übermittlung personenbezogener Daten in Drittländer veröffentlicht. Die neuen Klauseln ersetzen die bisherige Version und müssen innerhalb von **12 Monaten** implementiert werden.

## Wichtige Änderungen

- **Erweiterte Prüfpflichten:** Datenexporteure müssen die Rechtslage im Zielland dokumentieren
- **Neue Module:** Zusätzliches Modul für Cloud-Processing-Szenarien
- **KI-Bezug:** Spezifische Klauseln für KI-Trainingsdaten
- **Technische Maßnahmen:** Konkretere Anforderungen an Verschlüsselung und Pseudonymisierung

## Wer ist betroffen?

Praktisch jedes Unternehmen, das Daten international transferiert:

1. Nutzung von **US-Cloud-Diensten** (AWS, Azure, Google Cloud)
2. **Internationale Konzerne** mit Datenflüssen zwischen Tochtergesellschaften
3. Unternehmen mit **Outsourcing** in Drittländer
4. **E-Commerce-Unternehmen** mit internationalen Kunden

## Handlungsempfehlungen

- **Bestandsaufnahme** aller internationalen Datentransfers durchführen
- **Transfer Impact Assessments** aktualisieren
- Bestehende SCCs auf die **neuen Klauseln** umstellen
- **Datenschutzbeauftragte** in den Umstellungsprozess einbinden
- **Dokumentation** gemäß Rechenschaftspflicht aktualisieren

## Fristen

Die Übergangsfrist beträgt **12 Monate** ab Veröffentlichung. Unternehmen sollten jedoch frühzeitig mit der Umstellung beginnen, da der Prozess erfahrungsgemäß mehrere Monate in Anspruch nimmt.`,
    category: 'dsgvo',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    published_at: '2026-02-14T09:00:00Z',
    reading_time: 4,
    views: 1180,
    tags: ['DSGVO', 'SCCs', 'Datentransfer', 'EU-Kommission', 'Compliance'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '36',
    slug: 'passkeys-vs-passwoerter-stand-2026',
    title: 'Passkeys vs. Passwörter: Der Stand 2026',
    excerpt: 'Passkeys gewinnen an Verbreitung, doch Passwörter dominieren weiterhin. Ein Überblick über den aktuellen Stand der passwortlosen Authentifizierung.',
    content: `## Passkeys: Revolution oder langsame Evolution?

Zwei Jahre nach dem branchenweiten Push für **Passkeys** ziehen wir Bilanz: Wo stehen wir bei der **passwortlosen Authentifizierung** im Jahr 2026?

## Aktuelle Verbreitung

- **35% der großen Webdienste** unterstützen Passkeys (Verdopplung gegenüber 2024)
- **12% der Nutzer** verwenden aktiv Passkeys
- **Google, Apple, Microsoft** haben Passkeys als Standard-Option implementiert
- In Unternehmen liegt die Adoptionsrate bei erst **8%**

## Vorteile von Passkeys

1. **Phishing-resistent** – kein Geheimnis, das weitergegeben werden kann
2. **Kein Passwort-Reuse** – jeder Dienst erhält einen einzigartigen Key
3. **Einfache Nutzung** – biometrische Bestätigung statt Passwort-Eingabe
4. **Kryptografisch sicher** – basiert auf FIDO2/WebAuthn-Standard

## Herausforderungen

Trotz der Vorteile gibt es weiterhin Hürden:

- **Account Recovery** bei Geräteverlust ist komplex
- **Cross-Platform-Sync** funktioniert nicht zwischen allen Ökosystemen
- **Legacy-Systeme** unterstützen keine Passkeys
- **Nutzerakzeptanz** wächst nur langsam

## Empfehlung für Unternehmen

- Passkeys als **zusätzliche Authentifizierungsoption** anbieten
- **Hybridstrategie:** Passkeys und starke Passwörter parallel unterstützen
- **Schulungen** für Mitarbeiter zur Passkey-Nutzung durchführen
- **FIDO2-kompatible Hardware-Token** für Hochsicherheitsbereiche einsetzen

Die Zukunft gehört den Passkeys, aber der Übergang wird noch **mehrere Jahre** dauern.`,
    category: 'ki-security',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800',
    published_at: '2026-02-18T10:00:00Z',
    reading_time: 4,
    views: 1050,
    tags: ['Passkeys', 'FIDO2', 'WebAuthn', 'Authentifizierung', 'Passwörter'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '37',
    slug: 'schweizer-nationalbank-warnt-cyber-risiken',
    title: 'Schweizer Nationalbank warnt vor systemischen Cyber-Risiken im Finanzsektor',
    excerpt: 'Die SNB hat in ihrem Stabilitätsbericht erstmals Cyberangriffe als systemisches Risiko für den Schweizer Finanzplatz eingestuft.',
    content: `## SNB: Cyberrisiken als systemische Gefahr

Die **Schweizerische Nationalbank (SNB)** hat in ihrem Stabilitätsbericht erstmals **Cyberangriffe als systemisches Risiko** für den Schweizer Finanzplatz klassifiziert. Die Warnung kommt nach einer Reihe von Vorfällen im Bankensektor.

## Kernaussagen des Berichts

- Cyberangriffe auf Schweizer Finanzinstitute haben sich **2025 verdoppelt**
- **Ransomware und DDoS** sind die häufigsten Angriffsformen
- Die **Vernetzung** der Finanzinstitute erhöht das systemische Risiko
- Ein erfolgreicher Angriff auf eine Großbank könnte **Kettenreaktionen** auslösen

## Identifizierte Schwachstellen

1. **Legacy-Systeme** bei mittelgroßen Banken mit veralteter Software
2. **Drittanbieter-Risiken** durch gemeinsam genutzte IT-Dienstleister
3. **Unzureichende Incident-Response** bei kleineren Instituten
4. **Mangel an Cybersecurity-Fachkräften** im Finanzsektor

## Geforderte Maßnahmen

Die SNB fordert von den Finanzinstituten:

- **Regelmäßige Stresstests** für Cyber-Szenarien
- **Verbesserung der Resilienz** durch redundante Systeme
- **Informationsaustausch** über Bedrohungen zwischen Instituten
- **Investitionen** in Cybersicherheit proportional zum Risikoprofil

## Internationale Einordnung

Die Warnung der SNB reiht sich in eine globale Entwicklung ein. Auch die **EZB** und die **Bank of England** haben zuletzt verstärkt vor Cyberrisiken im Finanzsektor gewarnt. Experten sprechen von einem **Paradigmenwechsel** in der Finanzaufsicht.`,
    category: 'kritis',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    published_at: '2026-02-21T08:30:00Z',
    reading_time: 5,
    views: 980,
    tags: ['SNB', 'Finanzsektor', 'Schweiz', 'Systemisches Risiko', 'Banken'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '38',
    slug: 'emotet-comeback-neue-variante-umgeht-edr',
    title: 'Emotet-Comeback: Neue Variante umgeht führende EDR-Lösungen',
    excerpt: 'Die totgeglaubte Malware Emotet ist mit einer neuen, hochentwickelten Variante zurück. Die neue Version kann führende EDR-Lösungen umgehen.',
    content: `## Emotet ist zurück – gefährlicher als je zuvor

Die als zerschlagen geglaubte **Malware Emotet** ist mit einer neuen, hochentwickelten Variante zurückgekehrt. Sicherheitsforscher warnen: Die neue Version kann **führende Endpoint Detection and Response (EDR) Lösungen** umgehen.

## Neue Fähigkeiten

- **Polymorphe Verschlüsselung:** Jede Instanz hat einen einzigartigen Code-Fingerabdruck
- **Living-off-the-Land:** Nutzung legitimer Windows-Tools zur Tarnung
- **EDR-Evasion:** Erkennung und gezielte Umgehung von Sicherheitslösungen
- **Fileless Execution:** Vollständige Ausführung im Arbeitsspeicher

## Verbreitungsmethoden

1. **E-Mail-Thread-Hijacking** – Einklinken in bestehende E-Mail-Konversationen
2. **OneNote-Anhänge** mit eingebetteten Skripten
3. **Kompromittierte Websites** als Delivery-Infrastruktur
4. **Makro-freie Office-Dokumente** mit DDE-Exploits

## Bedrohungspotenzial

Emotet dient als **Türöffner** für weitere Schadsoftware:

- **Ransomware-Gruppen** nutzen Emotet-Infektionen als initialen Zugang
- **Banking-Trojaner** werden nachgeladen
- **Credential Stealer** sammeln Zugangsdaten
- Das Botnet kann für **DDoS-Angriffe** genutzt werden

## Schutzmaßnahmen

- **EDR-Lösungen** auf die neueste Version aktualisieren
- **PowerShell Logging** und **AMSI** aktivieren
- **E-Mail-Filter** für verdächtige Anhänge verschärfen
- **Netzwerk-Monitoring** auf bekannte Emotet-IoCs konfigurieren
- **Threat Hunting** proaktiv nach Emotet-Artefakten durchführen`,
    category: 'ransomware',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    published_at: '2026-01-18T07:00:00Z',
    reading_time: 5,
    views: 1680,
    tags: ['Emotet', 'Malware', 'EDR', 'Botnet', 'Comeback'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '39',
    slug: 'schwachstelle-ivanti-vpn-massiv-ausgenutzt',
    title: 'Schwachstelle in Ivanti VPN wird massiv ausgenutzt – BSI warnt',
    excerpt: 'Eine kritische Schwachstelle in Ivanti Connect Secure VPN wird weltweit aktiv ausgenutzt. Das BSI hat eine dringende Warnung herausgegeben.',
    content: `## Ivanti VPN: Kritische Schwachstelle unter Beschuss

Eine **kritische Schwachstelle** in Ivanti Connect Secure (ehemals Pulse Connect Secure) wird weltweit **massiv und aktiv ausgenutzt**. Das BSI hat eine dringende Warnung an alle Nutzer der VPN-Lösung herausgegeben.

## Schwachstellen-Details

- **CVE:** CVE-2026-0188
- **CVSS-Score:** 9.8 (Kritisch)
- **Typ:** Authentication Bypass + Remote Code Execution
- **Betroffene Versionen:** Connect Secure 22.x bis 22.7R2.3

## Ausmaß der Angriffe

Die Ausnutzung hat ein **besorgniserregendes Ausmaß** erreicht:

1. **Über 4.000 kompromittierte Systeme** weltweit identifiziert
2. **Deutschland:** Mindestens 380 betroffene Organisationen
3. Mehrere **APT-Gruppen** nutzen die Schwachstelle aktiv
4. Angreifer installieren **persistente Webshells** für langfristigen Zugang

## Besondere Gefahr

Die Schwachstelle ist besonders kritisch, weil:

- **VPN-Gateways** den direkten Zugang zum internen Netzwerk ermöglichen
- Bestehende **Patches nicht ausreichen** – kompromittierte Systeme müssen neu aufgesetzt werden
- Angreifer **Logs löschen** und Spuren verwischen
- Standardmäßige **Integritätsprüfungen** die Kompromittierung nicht erkennen

## Sofortmaßnahmen

- **Factory Reset** aller Ivanti Connect Secure Appliances
- Neuinstallation mit der **aktuellsten Firmware**
- Alle **VPN-Zugangsdaten** zurücksetzen
- **Forensische Analyse** des internen Netzwerks auf laterale Bewegungen
- Überprüfung aller Systeme auf **bekannte Webshells**`,
    category: 'schwachstellen',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800',
    published_at: '2026-01-28T06:00:00Z',
    reading_time: 5,
    views: 1560,
    tags: ['Ivanti', 'VPN', 'Schwachstelle', 'BSI', 'APT', 'Webshell'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '40',
    slug: 'security-awareness-70-prozent-phishing',
    title: 'Studie: 70% der Mitarbeiter fallen auf Phishing-Simulationen herein',
    excerpt: 'Eine groß angelegte Studie unter DACH-Unternehmen zeigt: 70% der Mitarbeiter klicken auf simulierte Phishing-E-Mails. Besonders gefährdet: Führungskräfte.',
    content: `## Erschreckende Phishing-Studie im DACH-Raum

Eine **umfassende Studie** unter 500 DACH-Unternehmen offenbart ein alarmierendes Bild: **70 Prozent der Mitarbeiter** fallen auf professionell gestaltete Phishing-Simulationen herein.

## Zentrale Ergebnisse

- **70%** der Mitarbeiter klicken auf Phishing-Links
- **45%** geben daraufhin tatsächlich Zugangsdaten ein
- **Führungskräfte** sind mit 82% überdurchschnittlich anfällig
- Unternehmen mit regelmäßigem Training senken die Rate auf **15%**

## Erfolgreichste Phishing-Methoden

1. **IT-Support-Mails:** „Ihr Passwort läuft ab" (85% Klickrate)
2. **Paketbenachrichtigungen:** „Ihr Paket konnte nicht zugestellt werden" (72% Klickrate)
3. **Chef-Mails:** Dringende Anweisung vom Vorgesetzten (68% Klickrate)
4. **HR-Mails:** „Ihre Gehaltsabrechnung für Januar" (65% Klickrate)

## Warum Führungskräfte besonders gefährdet sind

- **Zeitdruck** – weniger Zeit für sorgfältige Prüfung
- **Viele E-Mails** – geringere Aufmerksamkeit pro Mail
- **Autoritätserwartung** – weniger Misstrauen gegenüber „wichtigen" Mails
- **Geringere Teilnahme** an Security-Awareness-Trainings

## Effektive Gegenmaßnahmen

- **Regelmäßige Phishing-Simulationen** (mindestens quartalsweise)
- **Gamification** der Security-Awareness-Programme
- **Spezielle Schulungen** für C-Level und Führungskräfte
- **Positive Verstärkung** statt Bestrafung bei Fehlverhalten
- **Phishing-Meldeprozess** einfach und niedrigschwellig gestalten`,
    category: 'phishing',
    risk_level: 'mittel',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    published_at: '2026-02-24T10:00:00Z',
    reading_time: 4,
    views: 920,
    tags: ['Phishing', 'Security Awareness', 'Studie', 'DACH', 'Training'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '41',
    slug: 'datenpanne-deutscher-cloud-anbieter-2-mio',
    title: 'Datenpanne bei deutschem Cloud-Anbieter: 2 Millionen Datensätze betroffen',
    excerpt: 'Ein deutscher Cloud-Anbieter meldet eine schwerwiegende Datenpanne. Kundendaten von über 2 Millionen Nutzern wurden durch eine Fehlkonfiguration exponiert.',
    content: `## Großflächige Datenpanne bei deutschem Cloud-Provider

Ein **mittelständischer deutscher Cloud-Anbieter** hat eine schwerwiegende Datenpanne gemeldet. Durch eine **Fehlkonfiguration** waren Kundendaten von über **2 Millionen Nutzern** über mehrere Tage öffentlich zugänglich.

## Betroffene Daten

- **Unternehmensnamen** und Ansprechpartner
- **E-Mail-Adressen** und Telefonnummern
- **Rechnungsdaten** und Bankverbindungen (teilweise)
- **API-Schlüssel** und Zugangstokens
- **Konfigurationsdaten** gehosteter Anwendungen

## Ursache der Datenpanne

Die Datenpanne wurde durch eine **fehlerhafte Migration** auf eine neue Speicherinfrastruktur verursacht:

1. Ein **Storage Bucket** wurde während der Migration versehentlich öffentlich zugänglich
2. **Zugriffskontrollen** wurden beim Migrationsskript nicht korrekt übernommen
3. Das **Monitoring** erkannte die Fehlkonfiguration **nicht automatisch**
4. Ein externer Sicherheitsforscher meldete das Problem nach **4 Tagen**

## Reaktion des Anbieters

- Sofortige **Schließung** der offenen Schnittstelle
- **Benachrichtigung** aller betroffenen Kunden innerhalb von 48 Stunden
- **Meldung** an die zuständige Datenschutzbehörde
- Beauftragung einer **externen forensischen Analyse**
- **Kostenlose Kreditüberwachung** für betroffene Privatkunden

## Konsequenzen für den Markt

Der Vorfall stellt das Argument der **Datensouveränität** durch deutsche Cloud-Anbieter auf die Probe. Experten betonen, dass nicht der Standort, sondern die **Sicherheitsprozesse** entscheidend sind.`,
    category: 'datenpannen',
    risk_level: 'hoch',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800',
    published_at: '2026-03-03T08:00:00Z',
    reading_time: 5,
    views: 680,
    tags: ['Datenpanne', 'Cloud', 'Fehlkonfiguration', 'DSGVO', 'API'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '42',
    slug: 'zero-trust-leitfaden-mittelstand',
    title: 'Zero Trust Architecture: Praxisleitfaden für den Mittelstand',
    excerpt: 'Zero Trust ist das Sicherheitsmodell der Zukunft, doch die Umsetzung scheint komplex. Ein praxisorientierter Leitfaden für mittelständische Unternehmen.',
    content: `## Zero Trust für den Mittelstand

**Zero Trust Architecture (ZTA)** gilt als das Sicherheitsmodell der Zukunft, doch viele mittelständische Unternehmen scheuen die vermeintliche Komplexität. Dabei lässt sich Zero Trust auch **schrittweise und pragmatisch** einführen.

## Grundprinzipien

- **Never trust, always verify** – Kein implizites Vertrauen, auch nicht im internen Netzwerk
- **Least Privilege** – Minimale Berechtigungen für jeden Nutzer und Dienst
- **Assume Breach** – Davon ausgehen, dass das Netzwerk bereits kompromittiert ist
- **Mikrosegmentierung** – Netzwerk in kleine, isolierte Bereiche aufteilen

## Schrittweise Einführung

1. **Phase 1 – Identität:** Multi-Faktor-Authentifizierung für alle Nutzer einführen
2. **Phase 2 – Geräte:** Nur verwaltete und konforme Geräte zulassen
3. **Phase 3 – Netzwerk:** Mikrosegmentierung der wichtigsten Bereiche
4. **Phase 4 – Anwendungen:** Zugriff auf Basis von Identität statt Netzwerkzugehörigkeit
5. **Phase 5 – Daten:** Klassifizierung und kontextbasierter Zugriff auf Daten

## Kosten und ROI

- **Einstiegskosten:** Ab 50.000 Euro für ein Unternehmen mit 200 Mitarbeitern
- **ROI:** Durchschnittlich 40% Reduktion der Kosten durch Sicherheitsvorfälle
- **Amortisation:** Typischerweise innerhalb von 18-24 Monaten

## Empfohlene Technologien

- **Identity Provider** mit bedingtem Zugriff (Azure AD, Okta)
- **Endpoint Detection and Response (EDR)**
- **Software Defined Perimeter (SDP)**
- **SASE/SSE** für Cloud-basierte Sicherheit

Zero Trust ist kein Produkt, sondern eine **Strategie** – und sie lässt sich auch im Mittelstand umsetzen.`,
    category: 'ki-security',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    published_at: '2026-02-26T09:00:00Z',
    reading_time: 6,
    views: 870,
    tags: ['Zero Trust', 'Mittelstand', 'Leitfaden', 'MFA', 'Mikrosegmentierung'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '43',
    slug: 'cyberangriff-schweizer-spital-ops-verschoben',
    title: 'Cyberangriff auf Schweizer Spital: Operationen mussten verschoben werden',
    excerpt: 'Ein Kantonsspital in der Schweiz wurde Opfer eines Ransomware-Angriffs. Nicht-dringende Operationen mussten verschoben, Patienten umgeleitet werden.',
    content: `## Ransomware legt Schweizer Kantonsspital lahm

Ein **Kantonsspital in der Deutschschweiz** wurde Opfer eines schweren Ransomware-Angriffs. Der Vorfall hat den Spitalbetrieb massiv beeinträchtigt und wirft erneut Fragen zur **Cybersicherheit im Gesundheitswesen** auf.

## Auswirkungen auf den Betrieb

- **Nicht-dringende Operationen** für mindestens eine Woche verschoben
- **Notaufnahme** auf Notbetrieb umgestellt – nur lebensbedrohliche Fälle
- **Patientenakten** nicht digital zugänglich – Rückgriff auf Papier
- **Medizinische Geräte** teilweise nicht nutzbar
- Patienten wurden an **umliegende Spitäler** umgeleitet

## Angriffsdetails

- **Ransomware-Gruppe:** Verdacht auf Royal/BlackSuit
- **Einfallstor:** Kompromittierter Citrix-Zugang eines Arztes
- **Verschlüsselte Systeme:** Klinikinformationssystem, Bildarchiv (PACS), E-Mail
- **Lösegeldforderung:** Nicht öffentlich bekannt

## Reaktion

1. Sofortige **Abschaltung** aller IT-Systeme
2. **Krisenstab** mit Spitalleitung, IT und externen Experten
3. **MELANI/NCSC** (Schweizer Cybersicherheitszentrum) eingeschaltet
4. **Staatsanwaltschaft** hat Ermittlungen aufgenommen
5. Kommunikation über **Mobilfunk und Papier**

## Gesundheitswesen im Visier

Der Vorfall reiht sich in eine **Serie von Angriffen auf Gesundheitseinrichtungen** in der DACH-Region ein. Experten warnen seit Jahren vor der unzureichenden IT-Sicherheit in Krankenhäusern. Die **Patientensicherheit** steht dabei unmittelbar auf dem Spiel.`,
    category: 'ransomware',
    risk_level: 'kritisch',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
    published_at: '2026-03-07T07:00:00Z',
    reading_time: 5,
    views: 580,
    tags: ['Ransomware', 'Spital', 'Schweiz', 'Gesundheitswesen', 'KRITIS'],
    author: 'CyberLage Redaktion',
  },
  {
    id: '44',
    slug: 'nis2-registrierung-schritt-fuer-schritt',
    title: 'NIS2-Registrierung: So geht es Schritt für Schritt',
    excerpt: 'Die NIS2-Registrierungsfrist läuft. Dieser Leitfaden erklärt Schritt für Schritt, wie betroffene Unternehmen sich beim BSI registrieren müssen.',
    content: `## NIS2-Registrierung: Der praktische Leitfaden

Die **NIS2-Registrierungspflicht** ist in Kraft und betroffene Unternehmen müssen sich beim BSI registrieren. Dieser Leitfaden führt Sie **Schritt für Schritt** durch den Prozess.

## Schritt 1: Betroffenheit prüfen

Zunächst muss geklärt werden, ob Ihr Unternehmen unter NIS2 fällt:

- **Besonders wichtige Einrichtungen:** Ab 250 Mitarbeitern ODER 50 Mio. Euro Umsatz in relevanten Sektoren
- **Wichtige Einrichtungen:** Ab 50 Mitarbeitern ODER 10 Mio. Euro Umsatz in relevanten Sektoren
- **Unabhängig von Größe:** DNS-Dienste, TLD-Registries, qualifizierte Vertrauensdienste

## Schritt 2: Registrierung beim BSI

1. Portal aufrufen unter **nis2-registrierung.bsi.bund.de**
2. **Unternehmenskonto** anlegen mit ELSTER-Zertifikat
3. **Stammdaten** des Unternehmens erfassen
4. **Sektor und Teilsektor** auswählen
5. **Kontaktperson** für Sicherheitsvorfälle benennen
6. **24/7-Erreichbarkeit** für Meldungen sicherstellen

## Schritt 3: Pflichten nach Registrierung

Nach der Registrierung gelten folgende Pflichten:

- **Sicherheitsmaßnahmen** gemäß dem Stand der Technik implementieren
- **Meldepflicht:** Erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden melden
- **Risikomanagement:** Regelmäßige Risikoanalysen durchführen
- **Lieferkettensicherheit:** Cybersicherheit bei Zulieferern prüfen

## Häufige Fehler vermeiden

- **Fristversäumnis:** Die Registrierungsfrist ist verbindlich
- **Falsche Einstufung:** Im Zweifel die höhere Kategorie wählen
- **Fehlende Kontaktperson:** 24/7-Erreichbarkeit muss gewährleistet sein
- **Unvollständige Angaben:** Alle Pflichtfelder sorgfältig ausfüllen

Bei Fragen bietet das BSI eine **Hotline und FAQ-Seite** für NIS2-Registrierungen an.`,
    category: 'nis2',
    risk_level: 'info',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    published_at: '2026-03-10T09:00:00Z',
    reading_time: 5,
    views: 490,
    tags: ['NIS2', 'Registrierung', 'BSI', 'Compliance', 'Leitfaden'],
    author: 'CyberLage Redaktion',
  },
]

export const demoCVEs = [
  {
    cve_id: 'CVE-2026-21992',
    description: 'Oracle Identity Manager – Unauthentifizierte Remote Code Execution ermöglicht vollständige Übernahme des IAM-Systems.',
    cvss_score: 9.8,
    affected_software: 'Oracle Identity Manager, Web Services Manager',
    vendor: 'Oracle',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-29',
    advisory_url: 'https://www.securityweek.com/oracle-releases-emergency-patch-for-critical-identity-manager-vulnerability/',
  },
  {
    cve_id: 'CVE-2026-22719',
    description: 'VMware Aria Operations Command Injection – Aktiv ausgenutzt! Unauthentifizierte RCE während Migration.',
    cvss_score: 8.1,
    affected_software: 'VMware Aria Operations',
    vendor: 'VMware',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-03',
    advisory_url: 'https://www.bleepingcomputer.com/news/security/cisa-flags-vmware-aria-operations-rce-flaw-as-exploited-in-attacks/',
  },
  {
    cve_id: 'CVE-2026-0501',
    description: 'SAP S/4HANA SQL Injection – Niedrig privilegierte Angreifer können die vollständige Datenbank kompromittieren.',
    cvss_score: 9.9,
    affected_software: 'SAP S/4HANA',
    vendor: 'SAP',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-18',
    advisory_url: 'https://www.securityweek.com/saps-january-2026-security-updates-patch-critical-vulnerabilities/',
  },
  {
    cve_id: 'CVE-2025-59718',
    description: 'Fortinet FortiOS/FortiWeb/FortiProxy – Improper Verification of Cryptographic Signature ermöglicht unauthentifizierte Remote Code Execution.',
    cvss_score: 9.8,
    affected_software: 'FortiOS, FortiWeb, FortiProxy, FortiSwitchManager',
    vendor: 'Fortinet',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-20',
    advisory_url: 'https://www.securityweek.com/fortinet-patches-critical-authentication-bypass-vulnerabilities/',
  },
  {
    cve_id: 'CVE-2026-0500',
    description: 'SAP Wily Introscope Enterprise Manager – Remote Code Execution ermöglicht vollständige Serverübernahme.',
    cvss_score: 9.6,
    affected_software: 'SAP Wily Introscope Enterprise Manager',
    vendor: 'SAP',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-18',
    advisory_url: 'https://www.securityweek.com/saps-january-2026-security-updates-patch-critical-vulnerabilities/',
  },
  {
    cve_id: 'CVE-2025-64155',
    description: 'Fortinet FortiSIEM OS Command Injection – Unauthentifizierte Angreifer können Code und Befehle auf dem System ausführen.',
    cvss_score: 9.4,
    affected_software: 'FortiSIEM',
    vendor: 'Fortinet',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-15',
    advisory_url: 'https://www.securityweek.com/fortinet-patches-critical-vulnerabilities-in-fortifone-fortisiem/',
  },
  {
    cve_id: 'CVE-2025-64446',
    description: 'Fortinet FortiWeb Path Traversal – Aktiv ausgenutzt! Administrative Befehle über manipulierte HTTP-Anfragen ausführbar.',
    cvss_score: 9.1,
    affected_software: 'FortiWeb',
    vendor: 'Fortinet',
    patch_available: true,
    workaround: true,
    published_at: '2026-03-22',
    advisory_url: 'https://www.securityweek.com/fortinet-confirms-active-exploitation-of-critical-fortiweb-vulnerability/',
  },
  {
    cve_id: 'CVE-2025-42880',
    description: 'SAP Solution Manager Code Injection – Ermöglicht vollständige Systemkontrolle über manipulierte Eingaben.',
    cvss_score: 9.9,
    affected_software: 'SAP Solution Manager',
    vendor: 'SAP',
    patch_available: true,
    workaround: false,
    published_at: '2026-03-12',
    advisory_url: 'https://www.securityweek.com/sap-patches-critical-vulnerabilities-with-december-2025-security-updates/',
  },
]

export const topThreats = [
  { name: 'VMware Aria Operations RCE (CVE-2026-22719)', level: 'kritisch', description: 'Aktiv ausgenutzt – CISA KEV, unauthentifizierte RCE, sofort patchen' },
  { name: 'Oracle Identity Manager (CVE-2026-21992)', level: 'kritisch', description: 'CVSS 9.8 Notfall-Patch – IAM-Systeme im DACH-Raum gefährdet' },
  { name: 'Supply-Chain-Angriffe auf Paket-Manager', level: 'hoch', description: 'PyPI Telnyx kompromittiert, Malware in WAV-Dateien versteckt' },
  { name: 'EU-Kommission Cloud-Breach', level: 'hoch', description: 'AWS-Umgebung der EU-Kommission kompromittiert – Untersuchung läuft' },
  { name: 'Fake VS Code Alerts auf GitHub', level: 'mittel', description: 'Großkampagne verbreitet Malware über GitHub Discussions' },
]

export const breakingNews = [
  'VMware Aria Operations: RCE-Schwachstelle aktiv ausgenutzt – CISA warnt',
  'Oracle Notfall-Patch: Identity Manager CVSS 9.8 – Sofort updaten!',
  'Supply-Chain-Angriff: Malware in PyPI-Paket Telnyx in WAV-Datei versteckt',
  'EU-Kommission untersucht Breach in eigener AWS-Cloud-Umgebung',
  'Fake VS Code Security Alerts auf GitHub verbreiten Malware an Entwickler',
  'Chinesische Hacker tief in Telekom-Backbone eingenistet',
  'HPE AOS-CX: CVSS 9.8 – Admin-Passwort-Reset ohne Auth möglich',
  'Shadow AI: 223 Datenschutzverstöße pro Monat in Unternehmen',
  'CVSS 10.0: Polizei warnt Admins vor Windchill/FlexPLM Zero-Day',
  'BfV + BSI: Staatliche Akteure greifen Signal-Konten von Politikern an',
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
  { term: 'CVE', full: 'Common Vulnerabilities and Exposures', description: 'Ein Katalog öffentlich bekannter Sicherheitslücken und Schwachstellen, jede mit einer eindeutigen Kennung (z.B. CVE-2025-59718).' },
  { term: 'DSGVO', full: 'Datenschutz-Grundverordnung', description: 'EU-Verordnung zum Schutz personenbezogener Daten. Seit Mai 2018 in Kraft, regelt sie die Verarbeitung personenbezogener Daten durch Unternehmen und Behörden.' },
  { term: 'Firewall', full: '', description: 'Ein Sicherheitssystem, das den Netzwerkverkehr überwacht und filtert. Es entscheidet anhand definierter Regeln, welcher Verkehr erlaubt oder blockiert wird.' },
  { term: 'IoC', full: 'Indicator of Compromise', description: 'Hinweise oder Artefakte, die auf einen Sicherheitsvorfall hindeuten, z.B. verdächtige IP-Adressen, Datei-Hashes oder ungewöhnliche Netzwerkaktivitäten.' },
  { term: 'KEV', full: 'Known Exploited Vulnerabilities', description: 'Von der CISA gepflegter Katalog bekannter, aktiv ausgenutzter Schwachstellen. Wichtiger Indikator für Patch-Priorisierung.' },
  { term: 'KRITIS', full: 'Kritische Infrastrukturen', description: 'Organisationen und Einrichtungen mit wichtiger Bedeutung für das Gemeinwesen, deren Ausfall dramatische Folgen hätte (Energie, Wasser, Gesundheit, etc.).' },
  { term: 'MFA', full: 'Multi-Faktor-Authentifizierung', description: 'Sicherheitsverfahren, das mindestens zwei verschiedene Faktoren zur Identitätsbestätigung erfordert (z.B. Passwort + SMS-Code).' },
  { term: 'NIS2', full: 'Network and Information Security Directive 2', description: 'EU-Richtlinie zur Stärkung der Cybersicherheit. In Deutschland seit 6. Dezember 2025 als NIS2UmsuCG in Kraft. Betrifft ca. 29.500 Unternehmen.' },
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
