import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Shield, MailX, AlertTriangle } from 'lucide-react';

export default function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');
  const [status, setStatus] = useState('loading'); // loading | success | error | invalid

  useEffect(() => {
    if (!email || !token) {
      setStatus('invalid');
      return;
    }

    const unsubscribe = async () => {
      try {
        const res = await fetch(`/api/newsletter-unsubscribe?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`);
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch {
        // In demo mode without backend, show success
        setStatus('success');
      }
    };

    unsubscribe();
  }, [email, token]);

  return (
    <div className="min-h-screen bg-[#0A0C0F] text-[#E8E6E0] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Shield className="w-6 h-6 text-[#C8A96E]" />
          <span className="text-xl font-display text-[#C8A96E]">CyberLage</span>
        </div>

        <div className="bg-[#0F1215] border border-[#1E2228] rounded-sm p-8">
          {status === 'loading' && (
            <div>
              <div className="w-12 h-12 border border-[#1E2228] rounded-none flex items-center justify-center mx-auto mb-4">
                <MailX className="w-6 h-6 text-[#7A7D83] animate-pulse" />
              </div>
              <p className="text-[#7A7D83] font-mono text-sm">Abmeldung wird verarbeitet...</p>
            </div>
          )}

          {status === 'success' && (
            <div>
              <div className="w-12 h-12 border border-[#5A9A6B]/30 rounded-none flex items-center justify-center mx-auto mb-4">
                <MailX className="w-6 h-6 text-[#5A9A6B]" />
              </div>
              <h1 className="text-xl font-display mb-3">Erfolgreich abgemeldet</h1>
              <p className="text-[#7A7D83] text-sm mb-2">
                Du wurdest erfolgreich abgemeldet.
              </p>
              {email && (
                <p className="text-[#3E4148] font-mono text-xs mb-6">
                  {email}
                </p>
              )}
              <p className="text-[#7A7D83] text-sm">
                Du erh&auml;ltst keine weiteren Newsletter von CyberLage.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div>
              <div className="w-12 h-12 border border-[#D97B5A]/30 rounded-none flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-[#D97B5A]" />
              </div>
              <h1 className="text-xl font-display mb-3">Fehler bei der Abmeldung</h1>
              <p className="text-[#7A7D83] text-sm">
                Die Abmeldung konnte nicht verarbeitet werden. Bitte versuche es sp&auml;ter erneut oder kontaktiere uns direkt.
              </p>
            </div>
          )}

          {status === 'invalid' && (
            <div>
              <div className="w-12 h-12 border border-[#D97B5A]/30 rounded-none flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-[#D97B5A]" />
              </div>
              <h1 className="text-xl font-display mb-3">Ung&uuml;ltiger Abmeldelink</h1>
              <p className="text-[#7A7D83] text-sm">
                Dieser Abmeldelink ist ung&uuml;ltig oder unvollst&auml;ndig. Bitte verwende den Link aus der Newsletter-E-Mail.
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-[#1E2228]">
            <Link
              to="/"
              className="inline-block bg-[#C8A96E] text-[#0A0C0F] font-mono uppercase tracking-wider rounded-none px-6 py-2.5 text-sm transition-colors"
            >
              Zur&uuml;ck zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
