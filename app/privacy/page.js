export const metadata = {
  title: "Privacy Policy & Data Security | SignPNG",
  description:
    "Your privacy is our priority. SignPNG is designed for zero data collection—all signature processing happens locally in your browser. No images are ever uploaded.",
  keywords: [
    "signpng privacy",
    "signature security",
    "data protection",
    "private signature converter",
    "local image processing",
  ],
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-xl text-text-dim">
          Transparency and security are at our core. Last updated: April 15,
          2026
        </p>
      </div>

      <div
        className="glass p-10 md:p-14 flex flex-col gap-14 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            1. Data Sovereignty & Processing
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            At SignPNG, we believe your data belongs to you. Our tool is
            engineered to process images entirely within your web browser using
            modern Web APIs.
            <strong className="text-primary">
              {" "}
              We do not upload, store, or transmit your signature images to any
              server.
            </strong>{" "}
            All processing occurs locally on your hardware.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            2. Information Collection
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-6">
            Because all core processing happens client-side, we do not collect:
          </p>
          <ul className="list-none space-y-4">
            <li className="flex items-center gap-3 text-text-dim text-lg">
              <span className="text-primary font-bold">✓</span> The images you
              upload for background removal
            </li>
            <li className="flex items-center gap-3 text-text-dim text-lg">
              <span className="text-primary font-bold">✓</span> The final
              transparent signatures you generate
            </li>
            <li className="flex items-center gap-3 text-text-dim text-lg">
              <span className="text-primary font-bold">✓</span> Any personal
              identifying information from your files
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            3. Cookies and Log Files
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            SignPNG follows a standard procedure of using log files. These files
            log visitors when they visit websites. The information collected by
            log files include internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            4. Google DoubleClick DART Cookie
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to our site and other sites on the internet.
            However, visitors may choose to decline the use of DART cookies by
            visiting the Google ad and content network Privacy Policy at the
            following URL –{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            5. Advertising Partners Privacy Policies
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-4">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on SignPNG, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            Note that SignPNG has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            6. Third Party Privacy Policies
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-4">
            SignPNG's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            7. CCPA & GDPR Privacy Rights
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-4">
            Under the CCPA, among other rights, California consumers have the
            right to request that a business that collects a consumer's personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            Under the GDPR, every user is entitled to the following: The right
            to access, the right to rectification, the right to erasure, the
            right to restrict processing, the right to object to processing, and
            the right to data portability.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            8. Children's Information
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            Another part of our priority is adding protection for children while
            using the internet. SignPNG does not knowingly collect any Personal
            Identifiable Information from children under the age of 13.
          </p>
        </section>
      </div>
    </div>
  );
}
