"use client";

import React from "react";
import {
  ArrowRightIcon,
  EyeIcon,
  BookOpenIcon,
  UsersIcon,
  CurrencyCircleDollarIcon,
} from "@phosphor-icons/react";

const publications = [
  {
    image:
      "https://pixabay.com/get/g13c7ea64f3d9d617114a7c09037d8a3f0a07a526c7aa6317d05740c7786558d13be94345e5eaddc8cfa2fb9098be65d6.jpg",
    badge: "JOURNAL",
    badgeColor: "bg-primary",
    title: "Neural-Quantum Hybrid Cryptography",
    description:
      "Exploring the integration of machine learning models with quantum key distribution to enhance network security.",
    meta: [
      { icon: EyeIcon, text: "1.2k Views" },
      { icon: BookOpenIcon, text: "IEEE 2023" },
    ],
  },
  {
    image:
      "https://pixabay.com/get/g7b75f323a651d7418271e114772f73f985990b49f181042e0a71f948191944b6d19b0e03b8ef6d21cbef4e5f375bbbd3.jpg",
    badge: "RESEARCH PROJECT",
    badgeColor: "bg-navy",
    title: "Project Q-Shield",
    description:
      "A national-level initiative for securing industrial control systems against post-quantum adversarial attacks.",
    meta: [
      { icon: UsersIcon, text: "12 Contributors" },
      { icon: CurrencyCircleDollarIcon, text: "$2.5M Budget" },
    ],
  },
];

export default function PublicationsSection() {
  return (
    <section className="bg-white/70 backdrop-blur-sm py-14" id="publications">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-primary" />
            <h2 className="font-heading text-2xl font-bold text-text-dark">
              Key Publications & Projects
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View All
            <ArrowRightIcon size={14} weight="bold" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <div
              key={pub.title}
              className="group overflow-hidden rounded-xl border border-border-light transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute right-3 top-3 rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${pub.badgeColor}`}
                >
                  {pub.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-dark">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {pub.description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {pub.meta.map((m) => (
                    <span
                      key={m.text}
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted"
                    >
                      <m.icon size={14} />
                      {m.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
