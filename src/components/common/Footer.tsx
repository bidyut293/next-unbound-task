"use client"

import Image from "next/image"
import { Mail, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react'
// import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <main className="mt-20 bg-[rgb(0_10_31)] text-[#ffffff]">
      <FooterRecreated />
    </main>
  )
}

function FooterRecreated() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pt-16 md:pt-20 pb-10">
      {/* Top grid */}
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Logo + Social */}
        <div className="lg:col-span-3">
          {/* Placeholder logo block — swap with your logo if available */}
          <div className="mb-0">
            <div className="flex-shrink-0">
                      <Image
                        src="/images/img_logo_lift_2022_b_png.png"
                        alt="ATSU Business Solutions"
                        width={124}
                        height={48}
                        className="w-20 h-8 sm:w-28 sm:h-10 lg:w-[124px] lg:h-[48px]"
                      />
                    </div>
            {/* <p className="mt-2 text-xs opacity-80">Information Technology</p> */}
          </div>

          <h3 className="mb-4 text-lg font-semibold">Follow</h3>
          <div className="flex items-center gap-4">
            <SocialIcon href="#" label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h3 className="mb-6 text-xl font-semibold">Services</h3>
          <ul className="space-y-4 text-sm leading-6">
            <li>Product Design</li>
            <li>Business Consulting</li>
            <li>Customer Service</li>
            <li>Brand Identity</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="mb-6 text-xl font-semibold">Contact</h3>
          <div className="space-y-4 text-sm leading-7">
            <p>
              785 Main Street, 2nd Block
              <br />
              melbourne, australia
            </p>
            <p>support@gmail.com</p>
            <p>+00 (123) 456 88</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <h3 className="mb-6 text-xl font-semibold">Newsletter</h3>
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold leading-snug md:text-3xl">
              Get Every Single Update to
              <br />
              Join Our Newsletter
            </h4>

            <form
              className="group relative"
              onSubmit={(e) => {
                e.preventDefault()
                // no-op; wire up later
              }}
            >
              <div className="flex items-center gap-3 border-b border-white/50 pb-3 transition-colors group-focus-within:border-white">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className={
                    "w-full bg-transparent placeholder-white/70 text-sm outline-none py-1"
                  }
                />
                <button
                  type="submit"
                  className="ml-2 inline-flex items-center gap-1 text-sm font-semibold"
                  aria-label="Sign Up"
                >
                  <span className="whitespace-nowrap">Sign Up</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-sm opacity-90 md:flex-row">
        <p>Copy@ 2023 Atsu, All Rights reserved</p>
        <nav aria-label="Footer links" className="flex items-center gap-8">
          <a className="hover:opacity-100 opacity-90" href="#">
            Setting &amp; Privacy
          </a>
          <a className="hover:opacity-100 opacity-90" href="#">
            Faqs
          </a>
          <a className="hover:opacity-100 opacity-90" href="#">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-full border border-white/60 hover:border-white transition-colors"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  )
}
