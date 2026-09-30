import { LegalPage, LegalSection, MailLink, APP_URL } from "@/components/LegalPage";

const ext = "text-primary underline hover:text-primary/80 transition-smooth";

const faqs: [string, string][] = [
  ["I can't sign in.", "Use the email you booked with. If you don't remember your password, use the reset link on the sign-in screen. Your email is your sign-in, and only your facility can change it."],
  ["I need to change or cancel a booking.", "Open My Bookings, select the booking and choose cancel or change. Cancellation windows and fees are set by each facility, so contact the facility if the option isn't available."],
  ["I was charged and don't see a booking.", "Check My Bookings and your email for the confirmation. If it isn't there, email us with the amount and date and we'll sort it out."],
  ["How do I find my door code?", "Door codes are shared by your facility in your booking confirmation and reminders."],
  ["How do I update my details or saved cards?", "Go to Account to edit your profile, contact preferences and payment methods."],
  ["How do I delete my account?", "Go to Account, scroll down and select Delete your account, or see the account deletion page."],
];

const Support = () => (
  <LegalPage title="Support">
    <p>
      Need help with Courtside? Most answers are below. If not, email <MailLink subject="Courtside support" /> and we'll
      reply within one business day.
    </p>

    <LegalSection title="Quick help">
      <div className="space-y-5">
        {faqs.map(([q, a]) => (
          <div key={q}>
            <h3 className="text-lg font-semibold text-foreground">{q}</h3>
            <p>
              {a}
              {q.startsWith("How do I delete") && (
                <>
                  {" "}
                  <a className={ext} href="/delete-account">Account deletion</a>.
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </LegalSection>

    <LegalSection title="Facility owners and staff">
      <p>
        For setup, billing, the AI receptionist or integrations, email <MailLink subject="Facility support" /> or{" "}
        <a className={ext} href="/#contact">book a demo</a>.
      </p>
    </LegalSection>

    <LegalSection title="Contact">
      <p>
        Email: <MailLink />
        <br />
        Booking portal:{" "}
        <a className={ext} href={APP_URL}>
          {APP_URL.replace("https://", "")}
        </a>
        <br />
        Legal: <a className={ext} href="/privacy">Privacy Policy</a> · <a className={ext} href="/terms">Terms of Service</a>
      </p>
    </LegalSection>
  </LegalPage>
);

export default Support;
