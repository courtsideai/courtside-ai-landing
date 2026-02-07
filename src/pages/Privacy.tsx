import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground mb-6">
              Last Updated: January 28, 2026
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Courtside AI ("we", "us", or "our") operates the calendar availability and appointment booking service. This Privacy Policy explains how we collect, use, and protect your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Google Account Data</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">
              When you connect your Google account, we access:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Calendar data: Your calendar events (start/end times only) to check availability</li>
              <li>Email address: To identify your account</li>
              <li>Basic profile info: Your name for display purposes</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4 mb-2">We do not access:</p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Email content</li>
              <li>Contacts</li>
              <li>Files or documents</li>
              <li>Calendar event details beyond scheduling information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">OAuth Tokens</h3>
            <p className="text-foreground/90 leading-relaxed">
              We store encrypted OAuth tokens to maintain your Google Calendar connection. These tokens allow us to check availability and create appointments on your behalf.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Appointment Data</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">When appointments are booked, we store:</p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Appointment date and time</li>
              <li>Lead contact information (name, phone, email)</li>
              <li>Calendar event ID for reference</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              We use your Google Calendar data exclusively to:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Check availability: Determine which time slots are open for appointments</li>
              <li>Book appointments: Create calendar events when leads confirm a time</li>
              <li>Send invitations: Add leads as attendees so they receive calendar invites</li>
              <li>Prevent double-booking: Ensure appointments don't overlap</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4 mb-2">We do not:</p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Sell your data to third parties</li>
              <li>Use your data for advertising</li>
              <li>Access your calendar for any purpose other than appointment scheduling</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Storage and Security</h2>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li><strong>Encryption:</strong> OAuth tokens are encrypted before storage</li>
              <li><strong>Database:</strong> Data is stored securely in Supabase (cloud database with SOC 2 compliance)</li>
              <li><strong>Access:</strong> Only authorized systems access your calendar data</li>
              <li><strong>Retention:</strong> Data is retained while your account is active; you may request deletion at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">Our service integrates with:</p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Google Calendar API</h3>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Used to check availability and create events</li>
              <li>Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Google's Privacy Policy</a></li>
              <li>You can revoke access anytime at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Google Account Permissions</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Retell AI</h3>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Voice AI service that initiates appointment booking</li>
              <li>Processes voice conversations to extract scheduling requests</li>
              <li>Subject to <a href="https://www.retellai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Retell's Privacy Policy</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Supabase</h3>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Database hosting provider</li>
              <li>Subject to <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Supabase's Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your stored data</li>
              <li><strong>Disconnect:</strong> Revoke Google Calendar access at any time</li>
              <li><strong>Delete:</strong> Request deletion of your data</li>
              <li><strong>Opt-out:</strong> Stop using the service at any time</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">To Disconnect Google Calendar</h3>
            <ol className="list-decimal list-inside text-foreground/90 space-y-2 ml-4">
              <li>Go to <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Google Account Permissions</a></li>
              <li>Find "Courtside AI" (or our app name)</li>
              <li>Click "Remove Access"</li>
            </ol>
            <p className="text-foreground/90 leading-relaxed mt-4">
              <strong>To Request Data Deletion:</strong> Contact us at the email below to request deletion of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Sharing</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              We do not share your personal data with third parties except:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li><strong>Service providers:</strong> As needed to operate our service (listed above)</li>
              <li><strong>Legal requirements:</strong> If required by law or legal process</li>
              <li><strong>Business transfers:</strong> In the event of a merger or acquisition (with notice)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our service is not intended for children under 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you have questions about this Privacy Policy or your data, contact us at:
            </p>
            <p className="text-foreground/90 leading-relaxed mt-2">
              Email: <a href="mailto:contact@court-side.ai" className="text-primary underline hover:text-primary/80 transition-smooth">contact@court-side.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Google API Services User Data Policy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our use of Google API Services complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-smooth">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-3">
              We only use Google Calendar data for providing and improving our appointment scheduling service. We do not use this data for advertising or any unrelated purposes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
