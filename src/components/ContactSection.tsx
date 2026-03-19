"use client";

import React from "react";
import { PaperPlaneRight, MapPin, EnvelopeSimple } from "@phosphor-icons/react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Block */}
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-600"></span> Start a conversation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6">
              Let&apos;s build <br className="hidden md:block"/> something <span className="font-medium text-slate-800">together.</span>
            </h2>
            <p className="font-sans text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-md">
              Whether you are looking to collaborate on research, inquire about mentorship, or invite for a speaking engagement, I&apos;d love to hear from you.
            </p>

            <div className="space-y-6 flex flex-col mt-auto">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 group-hover:bg-indigo-50 transition-colors duration-300">
                  <MapPin size={22} weight="duotone" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Campus Location</p>
                  <p className="font-sans text-sm font-medium text-slate-700">ICFAI University Tripura, Kamalghat, 799210</p>
                </div>
              </div>

              <a href="mailto:tsmahapatra@iutripura.edu.in" className="flex items-center gap-4 group cursor-pointer transition-colors pt-2">
                <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:border-emerald-100 group-hover:bg-emerald-50 transition-colors duration-300">
                  <EnvelopeSimple size={22} weight="duotone" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Direct Email</p>
                  <p className="font-sans text-sm font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">tsmahapatra@iutripura.edu.in</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form Block */}
          <div className="relative w-full">
            {/* Soft decorative background box behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-50 rounded-3xl translate-x-4 translate-y-4 -z-10" />
            
            <form 
              className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] w-full relative z-10 flex flex-col gap-6"
              onSubmit={(e) => { e.preventDefault(); alert("Form is ready to be connected to a backend!"); }}
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block font-mono text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 px-4 py-3 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 focus:border-indigo-500 focus:bg-white transition-all font-sans text-sm rounded-t-lg" 
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block font-mono text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 px-4 py-3 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 focus:border-indigo-500 focus:bg-white transition-all font-sans text-sm rounded-t-lg" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="query_subject" className="block font-mono text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="query_subject"
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 px-4 py-3 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 focus:border-indigo-500 focus:bg-white transition-all font-sans text-sm rounded-t-lg" 
                />
              </div>

              <div>
                <label htmlFor="query_message" className="block font-mono text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2 ml-1">Message</label>
                <textarea 
                  id="query_message"
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 px-4 py-3 text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 focus:border-indigo-500 focus:bg-white transition-all font-sans text-sm resize-none rounded-t-lg" 
                />
              </div>

              <div className="mt-4">
                <button 
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-slate-900 hover:bg-indigo-600 text-white font-mono text-[11px] uppercase font-bold tracking-[0.2em] px-8 py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/20"
                >
                  Confirm & Send
                  <PaperPlaneRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
