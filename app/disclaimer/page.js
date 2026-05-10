export const metadata = {
  title: "Disclaimer | SignPNG",
  description:
    "Legal disclaimer regarding the use of SignPNG, document security, and the nature of our signature background removal tool.",
  keywords: [
    "disclaimer",
    "legal notice",
    "signpng terms",
    "document security disclaimer",
  ],
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="font-outfit text-5xl md:text-6xl font-extrabold text-white mb-4">
          Legal{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Disclaimer
          </span>
        </h1>
        <p className="text-xl text-text-dim">Last updated: April 15, 2026</p>
      </div>

      <div
        className="glass p-10 md:p-14 flex flex-col gap-14 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            1. General Information
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            The information provided by SignPNG ("we," "us," or "our") on this
            website is for general informational purposes only. All information
            on the site is provided in good faith, however, we make no
            representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the site.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            2. Professional Advice
          </h2>
          <p className="text-text-dim text-lg leading-relaxed mb-4">
            SignPNG is a technical tool designed for image processing. We are
            not a legal service provider, and the use of our tool does not
            constitute legal advice. While a transparent PNG of your signature
            can be used on many documents, the legal validity of a digital
            signature depends on the laws of your jurisdiction and the specific
            requirements of the document being signed.
          </p>
          <p className="text-text-dim text-lg leading-relaxed">
            We recommend consulting with a legal professional for advice
            regarding the legality of using digital signatures for specific
            contracts or government forms in your region.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            3. Security & Data
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            While SignPNG is designed to process data locally in your browser to
            maximize privacy, we cannot guarantee the security of your device or
            the environment in which the tool is used. It is the user's
            responsibility to ensure they are using a secure device, an
            up-to-date browser, and a private network when handling sensitive
            biometric data like handwriting.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            4. Limitation of Liability
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            Under no circumstance shall we have any liability to you for any
            loss or damage of any kind incurred as a result of the use of the
            site or reliance on any information provided on the site. Your use
            of the site and your reliance on any information on the site is
            solely at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-white text-2xl font-outfit font-bold mb-5">
            5. Third-Party Links
          </h2>
          <p className="text-text-dim text-lg leading-relaxed">
            The site may contain links to other websites or content belonging to
            or originating from third parties. Such external links are not
            investigated, monitored, or checked for accuracy, adequacy,
            validity, reliability, availability, or completeness by us.
          </p>
        </section>
      </div>
    </div>
  );
}
