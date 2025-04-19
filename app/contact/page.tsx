"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400">
            Have a question or need assistance? We're here to help. Fill out the form below or use our contact
            information.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="mt-1 h-5 w-5 text-emerald-500" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-zinc-600 dark:text-zinc-300">support@ziblio.com</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="mt-1 h-5 w-5 text-emerald-500" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-zinc-600 dark:text-zinc-300">+1 (555) 123-4567</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Monday-Friday, 9am-5pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 h-5 w-5 text-emerald-500" />
              <div>
                <h3 className="text-lg font-bold">Office</h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  123 Digital Avenue
                  <br />
                  Suite 456
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-6 dark:border-zinc-700">
              <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium">How do I download my purchase?</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    After completing your purchase, you'll receive an email with download instructions. You can also
                    access your purchases from your account dashboard.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Do you offer refunds?</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Due to the digital nature of our products, we generally don't offer refunds. Please see our Refund
                    Policy for more details.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Can I use your products for commercial projects?</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Yes, all our products come with a commercial license. You can use them in both personal and
                    commercial projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6 dark:border-zinc-700">
            <h2 className="text-xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                By submitting this form, you agree to our{" "}
                <a href="/privacy-policy" className="underline underline-offset-2">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
