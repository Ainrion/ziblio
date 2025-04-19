import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">Last updated: April 19, 2025</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              At Ziblio, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, and safeguard your information when you visit our website or make a
              purchase.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We may collect personal information such as your name, email address, billing information, and purchase
              history when you create an account or make a purchase. We also collect certain technical information
              automatically when you visit our website, including IP address, browser type, and pages visited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We use your information to process transactions, provide customer support, improve our products and
              services, send marketing communications (if you've opted in), and comply with legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Data Security</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Cookies</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We use cookies to enhance your experience on our website, analyze site usage, and assist in our marketing
              efforts. You can control cookies through your browser settings, but disabling them may affect your
              experience on our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. Third-Party Services</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We may use third-party services such as payment processors and analytics providers. These services have
              their own privacy policies, and we recommend reviewing them to understand how they handle your
              information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Your Rights</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Depending on your location, you may have rights regarding your personal data, including the right to
              access, correct, delete, or restrict processing of your data. To exercise these rights, please contact us
              using the information provided below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Changes to This Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <Link href="mailto:privacy@ziblio.com" className="text-emerald-600 hover:underline dark:text-emerald-400">
                privacy@ziblio.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
