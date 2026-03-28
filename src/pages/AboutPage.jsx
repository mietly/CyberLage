import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Shield,
  Mail,
  Building2,
  Scale,
  Lock,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

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
              CyberLage ist die deutschsprachige Plattform für aktuelle Cybersecurity-Nachrichten,
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
              mit Sitz in München, Deutschland.
            </p>
            <a
              href="https://corelead.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 text-sm mt-3 transition-colors"
            >
              corelead.org <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16" id="kontakt">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Kontakt</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-gray-100">E-Mail:</strong>{' '}
                <a href="mailto:kontakt@cyberlage.io" className="text-red-400 hover:underline">
                  kontakt@cyberlage.io
                </a>
              </p>
              <p>
                <strong className="text-gray-100">Web:</strong>{' '}
                <a
                  href="https://cyberlage.io"
                  className="text-red-400 hover:underline inline-flex items-center gap-1"
                >
                  cyberlage.io <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p>
                <strong className="text-gray-100">Betreiber:</strong> Corelead Solutions
              </p>
            </div>
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
                <p className="font-semibold text-gray-100">Informationspflicht laut § 5 ECG, § 14 UGB, § 25 MedienG:</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Medieninhaber und Herausgeber:</p>
                <p>Corelead Solutions</p>
                <p>München, Deutschland</p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Kontakt:</p>
                <p>E-Mail: kontakt@cyberlage.io</p>
                <p>
                  Web:{' '}
                  <a href="https://corelead.org" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    corelead.org
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-100">Unternehmensgegenstand:</p>
                <p>IT-Dienstleistungen, Online-Medien, Cybersecurity-Berichterstattung</p>
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
              <div>
                <p className="font-semibold text-gray-100">EU-Streitschlichtung:</p>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
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
                <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
                <p className="mt-2">
                  Corelead Solutions<br />
                  München, Deutschland<br />
                  E-Mail: kontakt@cyberlage.io
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
                <p className="mt-2">
                  Die genannten Daten werden zu folgenden Zwecken verarbeitet: Gewährleistung eines
                  reibungslosen Verbindungsaufbaus, Gewährleistung einer komfortablen Nutzung unserer
                  Website, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
                  administrativen Zwecken. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              {/* 3. Weitergabe von Daten */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  3. Weitergabe von Daten
                </h3>
                <p>
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im
                  Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen
                  Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                  <li>Sie Ihre nach Art. 6 Abs. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben</li>
                  <li>Die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
                  <li>Für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
                </ul>
              </div>

              {/* 4. Hosting */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  4. Hosting
                </h3>
                <p>
                  Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
                  gehostet. Die Server befinden sich teilweise in den USA. Vercel ist unter dem
                  EU-U.S. Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in
                  der{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    Datenschutzerklärung von Vercel
                  </a>.
                </p>
              </div>

              {/* 5. Supabase */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  5. Datenbank und Authentifizierung (Supabase)
                </h3>
                <p>
                  Für die Speicherung von Nutzerdaten (Newsletter-Anmeldungen, Kommentare) nutzen wir
                  Supabase Inc. (970 Toa Payoh North #07-04, Singapore 318992). Die Datenverarbeitung
                  erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)
                  bzw. Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>

              {/* 6. Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  6. Newsletter
                </h3>
                <p>
                  Wenn Sie unseren Newsletter abonnieren, wird Ihre E-Mail-Adresse und optional
                  Ihre berufliche Rolle für den Newsletterversand gespeichert. Die Anmeldung erfolgt
                  über ein Double-Opt-in-Verfahren. Der Versand erfolgt über Resend (Resend Inc.,
                  San Francisco, USA). Sie können den Newsletter jederzeit abbestellen. Die
                  Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt davon unberührt.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
              </div>

              {/* 7. KI-Assistent */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  7. KI-Assistent (CyberBot)
                </h3>
                <p>
                  Unser KI-Assistent nutzt die Claude API von Anthropic (Anthropic PBC, San Francisco,
                  USA). Bei Nutzung des CyberBot werden Ihre Eingaben an die Anthropic API übermittelt,
                  um eine Antwort zu generieren. Es werden keine personenbezogenen Daten gespeichert.
                  Die Nutzung erfolgt auf Grundlage Ihres berechtigten Interesses (Art. 6 Abs. 1 lit. f
                  DSGVO). Die Nutzung ist freiwillig.
                </p>
              </div>

              {/* 8. Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  8. Cookies
                </h3>
                <p>
                  Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den
                  Betrieb der Website erforderlich sind (z.B. Session-Cookies für die Authentifizierung).
                  Diese Cookies werden nach Schließen des Browsers gelöscht. Es werden keine
                  Tracking-Cookies oder Cookies zu Werbezwecken eingesetzt. Rechtsgrundlage ist
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                </p>
              </div>

              {/* 9. IP/Domain Checker */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  9. IP/Domain Checker Tool
                </h3>
                <p>
                  Bei Nutzung unseres IP/Domain Checker Tools werden die eingegebenen IP-Adressen
                  oder Domains an die Dienste AbuseIPDB und VirusTotal weitergeleitet, um eine
                  Reputationsanalyse durchzuführen. Es werden keine personenbezogenen Daten der
                  Nutzer übermittelt. Die Nutzung erfolgt freiwillig auf Grundlage von Art. 6 Abs. 1
                  lit. a DSGVO (Einwilligung durch aktive Nutzung).
                </p>
              </div>

              {/* 10. Ihre Rechte */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  10. Ihre Rechte als betroffene Person
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
                <p className="mt-2">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: kontakt@cyberlage.io
                </p>
              </div>

              {/* 11. Datensicherheit */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  11. Datensicherheit
                </h3>
                <p>
                  Wir verwenden SSL/TLS-Verschlüsselung für die gesamte Kommunikation mit unserer
                  Website. Dies erkennen Sie am Schloss-Symbol in der Adresszeile Ihres Browsers
                  sowie an der Verwendung des HTTPS-Protokolls.
                </p>
              </div>

              {/* 12. Auftragsverarbeitung */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  12. Auftragsverarbeitung
                </h3>
                <p>
                  Wir setzen folgende Auftragsverarbeiter ein:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                  <li>Vercel Inc. (Hosting)</li>
                  <li>Supabase Inc. (Datenbank, Authentifizierung)</li>
                  <li>Anthropic PBC (KI-Assistent)</li>
                  <li>Resend Inc. (Newsletter-Versand)</li>
                </ul>
                <p className="mt-2">
                  Mit allen Auftragsverarbeitern wurden entsprechende Verträge gemäß Art. 28 DSGVO
                  geschlossen bzw. es liegen Standardvertragsklauseln vor.
                </p>
              </div>

              {/* 13. Aufsichtsbehörde */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  13. Zuständige Aufsichtsbehörde
                </h3>
                <p>
                  Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
                  Promenade 18<br />
                  91522 Ansbach<br />
                  E-Mail: poststelle@lda.bayern.de<br />
                  Web:{' '}
                  <a
                    href="https://www.lda.bayern.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline"
                  >
                    www.lda.bayern.de
                  </a>
                </p>
              </div>

              {/* 14. Aktualität */}
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  14. Aktualität und Änderung dieser Datenschutzerklärung
                </h3>
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
                  Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                  Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die
                  jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen
                  werden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
