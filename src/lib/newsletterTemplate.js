/**
 * Generates an HTML email template for the CyberLage weekly threat report.
 * Uses only inline CSS and table-based layout for maximum email client compatibility.
 */
export function generateNewsletterHTML({ date, threatLevel, threats = [], patches = [], dachNews = '', unsubscribeUrl = '#' }) {
  const threatLevelColors = {
    HOCH: '#D97B5A',
    MITTEL: '#C8A96E',
    NIEDRIG: '#5A9A6B',
  };

  const riskColors = {
    Kritisch: '#D97B5A',
    Hoch: '#D97B5A',
    Mittel: '#C8A96E',
    Niedrig: '#5A9A6B',
  };

  const badgeColor = threatLevelColors[threatLevel] || '#C8A96E';

  const threatsHTML = threats
    .map(
      (t, i) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #7A7D83; font-family: monospace; font-size: 14px; width: 30px; vertical-align: top;">${i + 1}.</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; vertical-align: top;">
          <span style="color: #E8E6E0; font-size: 14px;">${t.title}</span><br/>
          <span style="color: ${riskColors[t.level] || '#C8A96E'}; font-family: monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">${t.level}</span>
        </td>
      </tr>`
    )
    .join('');

  const patchesHTML = patches
    .map(
      (p) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #E8E6E0; font-size: 13px; font-family: monospace;">${p.software}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #D97B5A; font-size: 13px; font-family: monospace;">${p.cve}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #7A7D83; font-size: 13px;">${p.description}</td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CyberLage Threat Report – ${date}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0C0F; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0A0C0F;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; width: 100%;">

          <!-- Header -->
          <tr>
            <td style="background-color: #0F1215; border: 1px solid #1E2228; padding: 32px 24px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <span style="font-size: 28px; color: #C8A96E; font-family: Georgia, 'Times New Roman', serif; letter-spacing: 1px;">&#128737; CyberLage</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <span style="color: #7A7D83; font-family: monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">W&ouml;chentlicher Threat Report</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <span style="color: #3E4148; font-family: monospace; font-size: 12px;">${date}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: ${badgeColor}; padding: 6px 20px;">
                          <span style="color: #0A0C0F; font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">Bedrohungslage: ${threatLevel}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height: 16px;"></td></tr>

          <!-- Top 5 Threats -->
          <tr>
            <td style="background-color: #0F1215; border: 1px solid #1E2228; padding: 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-bottom: 16px; border-bottom: 1px solid #1E2228;">
                    <span style="color: #C8A96E; font-family: Georgia, 'Times New Roman', serif; font-size: 18px;">Top 5 Bedrohungen</span>
                  </td>
                </tr>
                ${threatsHTML}
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height: 16px;"></td></tr>

          <!-- Critical Patches -->
          <tr>
            <td style="background-color: #0F1215; border: 1px solid #1E2228; padding: 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td colspan="3" style="padding-bottom: 16px; border-bottom: 1px solid #1E2228;">
                    <span style="color: #C8A96E; font-family: Georgia, 'Times New Roman', serif; font-size: 18px;">Kritische Patches</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #7A7D83; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Software</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #7A7D83; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">CVE</td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #1E2228; color: #7A7D83; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Beschreibung</td>
                </tr>
                ${patchesHTML}
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height: 16px;"></td></tr>

          <!-- DACH Region -->
          <tr>
            <td style="background-color: #0F1215; border: 1px solid #1E2228; padding: 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-bottom: 16px; border-bottom: 1px solid #1E2228;">
                    <span style="color: #C8A96E; font-family: Georgia, 'Times New Roman', serif; font-size: 18px;">DACH-Region</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 16px; color: #E8E6E0; font-size: 14px; line-height: 1.6;">
                    ${dachNews}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height: 16px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0F1215; border: 1px solid #1E2228; padding: 24px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 12px;">
                    <a href="${unsubscribeUrl}" style="color: #7A7D83; font-family: monospace; font-size: 12px; text-decoration: underline;">Newsletter abmelden</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <span style="color: #3E4148; font-family: monospace; font-size: 11px;">CyberLage.de &middot; Corelead Solutions &middot; M&uuml;nchen</span>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="https://cyberlage.de/datenschutz" style="color: #3E4148; font-family: monospace; font-size: 11px; text-decoration: underline;">Datenschutzerkl&auml;rung</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default generateNewsletterHTML;
