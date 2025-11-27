import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose max-w-none space-y-8">
          <section>
            <p className="text-muted-foreground mb-6">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              By accessing or using Courtside AI's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-foreground/90 leading-relaxed">
              Courtside AI provides intelligent automation services for venues and facilities, including but not 
              limited to automated phone answering, scheduling, and customer communication management. We reserve 
              the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Obligations</h2>
            <p className="text-foreground/90 leading-relaxed mb-3">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the services for any unlawful or prohibited purposes</li>
              <li>Not interfere with or disrupt the integrity or performance of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you subscribe to a paid service, you agree to pay all applicable fees as described at the time of 
              purchase. All fees are non-refundable unless otherwise stated. We reserve the right to modify our 
              pricing with reasonable notice to existing customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/90 leading-relaxed">
              All content, features, and functionality of Courtside AI services, including but not limited to 
              software, text, graphics, logos, and proprietary technology, are owned by Courtside AI and are 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Usage</h2>
            <p className="text-foreground/90 leading-relaxed">
              You retain all rights to the data you submit to our services. By using our services, you grant 
              Courtside AI a license to use, process, and store your data solely for the purpose of providing 
              and improving our services. We will handle your data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/90 leading-relaxed">
              To the maximum extent permitted by law, Courtside AI shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting 
              from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Warranty Disclaimer</h2>
            <p className="text-foreground/90 leading-relaxed">
              Our services are provided "as is" and "as available" without warranties of any kind, either express 
              or implied, including but not limited to warranties of merchantability, fitness for a particular 
              purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
            <p className="text-foreground/90 leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, with or without 
              cause, with or without notice. Upon termination, your right to use the services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-foreground/90 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in 
              which Courtside AI operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of 
              our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-foreground/90 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through the contact 
              information provided on our website.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
