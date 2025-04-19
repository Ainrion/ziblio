import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-3xl px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Refund Policy</h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">Last updated: April 19, 2025</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Digital Product Refunds</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Due to the nature of digital products, all sales are generally final. Once you have downloaded a digital
              product, we cannot accept returns or issue refunds unless the product is defective or not as described.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Defective Products</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you believe a product is defective or not functioning as described, please contact our support team
              within 7 days of purchase. We will work to resolve the issue or provide a refund at our discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Refund Process</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              If a refund is approved, it will be processed using the original payment method. Refunds may take 5-10
              business days to appear on your statement, depending on your payment provider.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Exceptions</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              In exceptional circumstances, we may consider refund requests outside of our standard policy. These will
              be evaluated on a case-by-case basis at our sole discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              For any questions regarding our refund policy, please contact us at{" "}
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
