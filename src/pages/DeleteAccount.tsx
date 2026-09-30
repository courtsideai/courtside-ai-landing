import { LegalPage, LegalSection, Bullets, MailLink, CONTACT_EMAIL } from "@/components/LegalPage";

const ext = "text-primary underline hover:text-primary/80 transition-smooth";
const DELETE_URL = "https://book.court-side.ai/portal/account/delete";

const DeleteAccount = () => (
  <LegalPage title="Delete Your Courtside Account" updated="September 30, 2026">
    <p>
      One Courtside account works at every facility that uses Courtside. You can delete it, and the personal information
      on it, at any time. Courtside AI Inc. operates the service.
    </p>

    <LegalSection title="Option 1: In the app">
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>Open the Courtside app and sign in</li>
        <li>Go to <strong>Account</strong></li>
        <li>Select <strong>Delete account</strong> and confirm</li>
      </ol>
    </LegalSection>

    <LegalSection title="Option 2: On the web">
      <p>
        Go to the{" "}
        <a className={ext} href={DELETE_URL}>
          account deletion page
        </a>
        , sign in, and follow the steps.
      </p>
    </LegalSection>

    <LegalSection title="Option 3: Email us">
      <p>
        Email <MailLink email={CONTACT_EMAIL} subject="Delete my account" /> from the address on your account. We may
        confirm your identity first and respond within 30 days.
      </p>
    </LegalSection>

    <LegalSection title="Before you delete">
      <Bullets
        items={[
          "Cancel any upcoming bookings, active memberships and active passes first, so no facility is left holding a court or subscription for an account that no longer exists.",
          "If you owe a balance to a facility, it is shown before you confirm. Deleting your account does not cancel what you owe.",
        ]}
      />
    </LegalSection>

    <LegalSection title="What happens next">
      <Bullets
        items={[
          "You are signed out everywhere and there is a 30-day grace period. Signing back in during that time cancels the deletion.",
          "After 30 days we remove your name, contact details, date of birth, addresses, emergency contact, notes, saved cards (including at Stripe) and your sign-in.",
        ]}
      />
    </LegalSection>

    <LegalSection title="What we keep, and for how long">
      <Bullets
        items={[
          "Bookings, payments, invoices and receipts: 7 years, for tax and accounting law. They no longer show your name or contact details.",
          "Signed waivers (signer's name, what was agreed, and when): 7 years after signing, in case they are needed for a legal claim. IP address and device details are removed.",
          "Call recordings: 90 days. Call transcripts and summaries: 12 months.",
          "Backups are overwritten within 30 days.",
        ]}
      />
    </LegalSection>

    <p>
      See the full <a className={ext} href="/privacy">Privacy Policy</a> or contact <a className={ext} href="/support">Support</a>.
    </p>
  </LegalPage>
);

export default DeleteAccount;
