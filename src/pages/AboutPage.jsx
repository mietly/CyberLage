import {
  Shield,
  User,
  Mail,
  Building2,
  Megaphone,
  Scale,
  Lock,
  Globe,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Über uns</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Über <span className="text-red-500">CyberLage</span>
          </h1>
        </div>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              CyberLage.de ist die deutschsprachige Plattform für aktuelle Cybersecurity-Nachrichten,
              Schwachstellen-Tracking und Security-Wissen. Unser Ziel ist es, IT-Verantwortliche und
              Security-Teams im DACH-Raum mit relevanten, verständlichen und handlungsorientierten
              Informationen zu versorgen.
            </p>
            <p className="text-gray-300 leading-relaxed">
              In einer Welt, in der Cyber-Bedrohungen immer komplexer werden, braucht es eine
              zuverlässige, deutschsprachige Quelle, die nicht nur informiert, sondern auch konkrete
              Handlungsempfehlungen gibt. Genau das ist CyberLage.
            </p>
          </div>
        </section>

        {/* Betreiber */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Betrieben von Corelead Solutions</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              CyberLage wird betrieben von <strong className="text-gray-100">Corelead Solutions</strong>.
              Wir sind ein auf IT-Sicherheit und digitale Transformation spezialisiertes Unternehmen
              mit Sitz in Österreich.
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">David Oberholzner</h2>
                <p className="text-red-400 font-medium mb-1">Autor & Herausgeber</p>
                <p className="text-gray-400 text-sm mb-4">IT Director | NIS2 Experte</p>
                <p className="text-gray-300 leading-relaxed">
                  David Oberholzner ist IT Director und NIS2-Experte mit langjähriger Erfahrung in
                  der IT-Sicherheit. Als Herausgeber von CyberLage.de bereitet er komplexe
                  Security-Themen verständlich auf und unterstützt Unternehmen im DACH-Raum bei der
                  Umsetzung von Sicherheitsmaßnahmen und Compliance-Anforderungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Kontakt</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-gray-100">E-Mail:</strong>{' '}
                <a
                  href="mailto:kontakt@cyberlage.de"
                  className="text-red-400 hover:underline"
                >
                  kontakt@cyberlage.de
                </a>
              </p>
              <p>
                <strong className="text-gray-100">Web:</strong>{' '}
                <a
                  href="https://cyberlage.de"
                  className="text-red-400 hover:underline inline-flex items-center gap-1"
                >
                  cyberlage.de <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p>
                <strong className="text-gray-100">Betreiber:</strong> Corelead Solutions
              </p>
            </div>
          </div>
        </section>

        {/* Werbung */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl font-bold">Werbung schalten?</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Du möchtest dein Security-Produkt oder deine Dienstleistung einer qualifizierten
              Zielgruppe präsentieren? CyberLage erreicht IT-Entscheider, CISOs und Security-Teams
              im gesamten DACH-Raum.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Wir bieten verschiedene Werbeformate an: Sponsored Articles, Newsletter-Sponsoring,
              Banner und Tool-Listings. Alle Werbeinhalte werden klar als solche gekennzeichnet.
            </p>
            <a
              href="mailto:werbung@cyberlage.de"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
            >
              <Mail className="w-4 h-4" />
              werbung@cyberlage.de kontaktieren
            </a>
          </div>
        </section>

        {/* Impressum */}
        <section className="mb-16" id="impressum">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Impressum</h2>
            </div>
            <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-gray-100">Angaben gemäß § 5 ECG / § 25 MedienG:</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Medieninhaber und Herausgeber:</p>
                <p>Corelead Solutions</p>
                <p>David Oberholzner</p>
                <p>[Adresse wird ergänzt]</p>
                <p>[PLZ Ort], Österreich</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Kontakt:</p>
                <p>E-Mail: kontakt@cyberlage.de</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Unternehmensgegenstand:</p>
                <p>IT-Dienstleistungen, Online-Medien, Cybersecurity-Berichterstattung</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">UID-Nummer:</p>
                <p>[wird ergänzt]</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Gewerbeordnung:</p>
                <p>
                  Die gewerberechtlichen Vorschriften finden sich unter{' '}
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    www.ris.bka.gv.at
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Aufsichtsbehörde:</p>
                <p>Bezirkshauptmannschaft [wird ergänzt]</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Blattlinie:</p>
                <p>
                  Unabhängige Berichterstattung über Cybersecurity-Themen im DACH-Raum.
                  Information und Aufklärung zu IT-Sicherheit, Datenschutz und Compliance.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Haftungsausschluss:</p>
                <p>
                  Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
                  übernommen werden. Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur
                  Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Urheberrecht:</p>
                <p>
                  Die durch den Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des Betreibers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Datenschutzerklärung */}
        <section id="datenschutz">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Datenschutzerklärung</h2>
            </div>
            <div className="text-gray-300 space-y-6 text-sm leading-relaxed">
              {/* 1. Verantwortlicher */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  1. Verantwortlicher
                </h3>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <p className="mt-2">
                  Corelead Solutions<br />
                  David Oberholzner<br />
                  [Adresse wird ergänzt]<br />
                  E-Mail: kontakt@cyberlage.de
                </p>
              </div>

              {/* 2. Erhebung und Speicherung */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  2. Erhebung und Speicherung personenbezogener Daten
                </h3>
                <p>
                  Beim Besuch unserer Website werden automatisch Informationen an den Server
                  übermittelt. Diese Informationen werden temporär in einem sog. Logfile gespeichert.
                  Folgende Informationen werden dabei ohne Ihr Zutun erfasst:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und Betriebssystem</li>
                </ul>
              </div>

              {/* 3. Rechtsgrundlage */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  3. Rechtsgrundlage der Datenverarbeitung
                </h3>
                <p>
                  Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage folgender
                  Rechtsgrundlagen:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                  <li>Art. 6 Abs. 1 lit. a DSGVO -- Einwilligung</li>
                  <li>Art. 6 Abs. 1 lit. b DSGVO -- Vertragserfüllung</li>
                  <li>Art. 6 Abs. 1 lit. f DSGVO -- Berechtigtes Interesse</li>
                </ul>
              </div>

              {/* 4. Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  4. Newsletter
                </h3>
                <p>
                  Wenn Sie unseren Newsletter abonnieren, wird Ihre E-Mail-Adresse für den
                  Newsletterversand gespeichert. Die Anmeldung erfolgt über ein Double-Opt-in-Verfahren.
                  Sie können den Newsletter jederzeit abbestellen. Die Rechtmäßigkeit der bereits
                  erfolgten Datenverarbeitung bleibt davon unberührt.
                </p>
              </div>

              {/* 5. Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  5. Cookies
                </h3>
                <p>
                  Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
                  die auf Ihrem Endgerät gespeichert werden. Einige Cookies sind technisch
                  notwendig, andere dienen der Analyse des Nutzerverhaltens. Sie können Ihre
                  Browser-Einstellungen so konfigurieren, dass Cookies abgelehnt werden.
                </p>
              </div>

              {/* 6. Analyse-Tools */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  6. Analyse-Tools
                </h3>
                <p>
                  Wir setzen auf unserer Website datenschutzfreundliche Analyse-Tools ein, die
                  keine personenbezogenen Daten an Dritte übermitteln. Die Auswertung erfolgt
                  anonymisiert und dient ausschließlich der Verbesserung unseres Angebots.
                </p>
              </div>

              {/* 7. Ihre Rechte */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  7. Ihre Rechte als betroffene Person
                </h3>
                <p>Sie haben gemäß DSGVO folgende Rechte:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  <li>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                </ul>
              </div>

              {/* 8. Datensicherheit */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  8. Datensicherheit
                </h3>
                <p>
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren
                  (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe,
                  die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres
                  Internetauftrittes verschlüsselt übertragen wird, erkennen Sie am Schloss-Symbol
                  in der Adresszeile Ihres Browsers.
                </p>
              </div>

              {/* 9. Auftragsverarbeitung */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  9. Auftragsverarbeitung
                </h3>
                <p>
                  Soweit wir Dienstleister einsetzen, die in unserem Auftrag personenbezogene
                  Daten verarbeiten, haben wir mit diesen Auftragsverarbeitungsverträge gemäß
                  Art. 28 DSGVO abgeschlossen.
                </p>
              </div>

              {/* 10. Aufsichtsbehörde */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  10. Zuständige Aufsichtsbehörde
                </h3>
                <p>
                  Österreichische Datenschutzbehörde<br />
                  Barichgasse 40-42<br />
                  1030 Wien<br />
                  E-Mail: dsb@dsb.gv.at<br />
                  Web:{' '}
                  <a
                    href="https://www.dsb.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    www.dsb.gv.at
                  </a>
                </p>
              </div>

              {/* 11. Aktualität */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  11. Aktualität und Änderung dieser Datenschutzerklärung
                </h3>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
                  Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                  Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
