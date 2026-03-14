"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Contact from ${email}`);
    const body = encodeURIComponent(message);
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_self"
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <FadeInOnScroll>
            <SectionLabel label="Contact Me" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s have a talk?
              <br />
              Say Hello
            </h2>
          </FadeInOnScroll>

          {/* Right column - Form */}
          <FadeInOnScroll delay={0.2}>
            <div className="flex flex-col gap-6 md:mt-10">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-border pb-3 text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <div>
                <Button variant="secondary" onClick={handleSubmit}>
                  Say Hello
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
