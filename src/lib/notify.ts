// Emails form submissions to contact@court-side.ai via FormSubmit (free form-to-email relay).
// The first submission sends a one-time activation email to that inbox; after it's confirmed, every submission is delivered.
const INBOX = "contact@court-side.ai";

export async function emailLead(subject: string, fields: Record<string, string | null | undefined>) {
  const data = Object.fromEntries(Object.entries(fields).filter(([, v]) => v));
  const res = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ ...data, _subject: subject, _template: "table", _captcha: "false", _replyto: fields.email ?? undefined }),
  }).catch(() => null);
  return !!res?.ok;
}
