import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms & Conditions</h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">Last updated: April 19, 2025</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Welcome to Ziblio. These Terms & Conditions govern your use of our website and services. By accessing or
              using Ziblio, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Definitions</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              "Ziblio," "we," "us," and "our" refer to Ziblio Digital Products. "Products" refers to any digital goods
              available for purchase on our website. "User," "you," and "your" refer to the individual accessing or
              using our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Account Registration</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              To purchase products from Ziblio, you may need to create an account. You are responsible for maintaining
              the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Products and Purchases</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              All products are delivered digitally. Once a purchase is completed, you will receive access to download
              the product. Prices for products are subject to change without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              All content on Ziblio, including but not limited to text, graphics, logos, and software, is the property
              of Ziblio and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">6. User Conduct</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              You agree not to use Ziblio for any unlawful purpose or in any way that could damage, disable, or impair
              the site. You may not attempt to gain unauthorized access to any part of the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Ziblio shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">8. Changes to Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              We reserve the right to modify these Terms at any time. Your continued use of Ziblio after any changes
              indicates your acceptance of the modified Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">9. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you have any questions about these Terms, please contact us at{" "}
              <Link href="mailto:support@ziblio.com" className="text-emerald-600 hover:underline dark:text-emerald-400">
                support@ziblio.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
