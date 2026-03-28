export const demoArticles = [
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
]

export const demoCVEs = [
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
  { name: 'Ransomware-as-a-Service (RaaS)', level: 'kritisch', description: '1.345 Angriffe pro Woche auf deutsche Unternehmen – Tendenz steigend' },
  { name: 'Zero-Day Exploits (CVSS 10.0)', level: 'kritisch', description: 'PTC Windchill/FlexPLM CVSS 10.0 – Polizei warnt persönlich' },
  { name: 'GenAI-Datenabfluss', level: 'hoch', description: 'Jede 31. KI-Prompt leakt sensible Daten – 88% der Firmen betroffen' },
  { name: 'Fortinet-Schwachstellen (aktiv ausgenutzt)', level: 'hoch', description: 'CVE-2025-64446 wird in freier Wildbahn aktiv ausgenutzt' },
  { name: 'NIS2 Compliance-Risiko', level: 'mittel', description: 'Registrierungsfrist abgelaufen – 29.500 Unternehmen unter Druck' },
]

export const breakingNews = [
  'CVSS 10.0: Polizei warnt Admins persönlich vor Windchill/FlexPLM Zero-Day',
  'Microsoft Patch Tuesday März: 79 Lücken, 2 Zero-Days – Excel/Copilot-Lücke besonders kritisch',
  'BfV + BSI warnen: Staatliche Akteure greifen Signal-Konten von Politikern an',
  'IHK-Betrugswelle: KI-generierte Phishing-Mails fordern IBAN-Änderungen',
  'Fortinet bestätigt aktive Ausnutzung von FortiWeb-Schwachstelle CVE-2025-64446',
  'NIS2-Registrierungsfrist am 6. März abgelaufen – Bußgelder drohen',
  'Belgisches Krankenhaus: Ransomware zwingt zur Verlegung von Intensivpatienten',
  'Android Zero-Day: Qualcomm-Schwachstelle CVE-2026-21385 aktiv ausgenutzt',
  'SAP S/4HANA: SQL Injection mit CVSS 9.9 – Sofort patchen!',
  '11% mehr Cyberangriffe auf deutsche Unternehmen im Februar 2026',
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
