"use client";

import React from "react";

export default function NewsletterSection() {
  return (
    <section className="bg-white/80 backdrop-blur-sm py-14" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-linear-to-b from-peach to-white px-6 py-14 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-dark md:text-3xl">
            Stay updated with my research
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted">
            Subscribe to my quarterly newsletter for updates on quantum
            breakthroughs, lab news, and upcoming conferences.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-dark outline-none transition-colors placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
