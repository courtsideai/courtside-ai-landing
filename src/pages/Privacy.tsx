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
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/90 leading-relaxed">
              Courtside AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our services. 
              Please read this policy carefully to understand our practices regarding your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              We collect several types of information to provide and improve our services:
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Personal Information</h3>
            <p className="text-foreground/90 leading-relaxed mb-2">
              Information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Business information (company name, facility details)</li>
              <li>Account credentials and authentication data</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">Usage Information</h3>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Call recordings and transcripts (with appropriate consent)</li>
              <li>Service usage data and interaction logs</li>
              <li>Device information and IP addresses</li>
              <li>Browser type and operating system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Providing, maintaining, and improving our automated services</li>
              <li>Processing transactions and managing your account</li>
              <li>Communicating with you about services, updates, and support</li>
              <li>Training and improving our AI models and algorithms</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-foreground/90 leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, 
              access controls, and secure data storage. However, no method of transmission over the internet or 
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-foreground/90 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the 
              purposes outlined in this Privacy Policy. We will delete or anonymize your information when it is no 
              longer needed, unless we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-foreground/90 leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your browsing activities. 
              You can control cookie preferences through your browser settings. Note that disabling cookies may 
              affect the functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our services may contain links to third-party websites or integrate with third-party services. We are 
              not responsible for the privacy practices of these third parties. We encourage you to review their 
              privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child, we will 
              take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Data Transfers</h2>
            <p className="text-foreground/90 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that 
              such transfers comply with applicable data protection laws and implement appropriate safeguards to 
              protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by 
              posting the new policy on this page and updating the "Last Updated" date. Your continued use of our 
              services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us through the contact information provided on our website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
