// app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function ContactPage() {
  const TERMINAL_GREEN = '#00ff00';
  // TERMINAL_GREEN kan niet direct in classNames gebruikt worden, tenzij je een safelist configureert of kiest voor een hardgecodeerde kleur (bv. #00ff00)
  const TERMINAL_GREEN_HEX = '#00ff00';
  const TERMINAL_GREEN_TAILWIND = 'text-green-400'; // Gebruik een standaard kleur voor de headers als alternatief voor direct gebruik van custom hex

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simuleer een API-oproep naar de server (vervang dit met een echte fetch/API-route!)
    try {
      // Wacht 2 seconden om de laadstatus te simuleren
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form data sent:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Formulier resetten
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Page Header */}
        <div className="w-full text-center">
          <h1
            className={`text-5xl font-bold ${TERMINAL_GREEN_TAILWIND} flex items-center justify-center gap-4 tracking-widest uppercase`}
            style={{ color: TERMINAL_GREEN_HEX, textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}
          >
            <EnvelopeIcon className="h-10 w-10" />
            [SECURE COMMS]
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            &gt; Transmitting data to Command Central. Your message is encrypted.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <section className="grid w-full max-w-5xl gap-12 md:grid-cols-3">
          {/* Contact Form (2/3 width on desktop) */}
          <div className="border-[${TERMINAL_GREEN}]/40 border-2 border-dashed bg-gray-900/60 p-6 shadow-[0_0_15px_rgba(0,255,0,0.5)] md:col-span-2">
            <h2 className={`mb-6 font-mono text-2xl text-[${TERMINAL_GREEN}]`}>
              :: MESSAGE ENCODING
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Naam */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-mono text-sm text-gray-500">
                  &gt; NAME_TAG:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`border-b bg-transparent border-[${TERMINAL_GREEN}]/70 p-2 font-mono text-gray-100 focus:border-b-2 focus:outline-none focus:border-[${TERMINAL_GREEN}] transition-colors`}
                  placeholder="CLASSIFIED NAME"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-mono text-sm text-gray-500">
                  &gt; RETURN_PATH:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`border-b bg-transparent border-[${TERMINAL_GREEN}]/70 p-2 font-mono text-gray-100 focus:border-b-2 focus:outline-none focus:border-[${TERMINAL_GREEN}] transition-colors`}
                  placeholder="OPERATIVE@DOMAIN.COM"
                />
              </div>

              {/* Bericht */}
              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-mono text-sm text-gray-500">
                  &gt; MESSAGE_CONTENT:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`border bg-transparent border-[${TERMINAL_GREEN}]/70 p-3 font-mono text-gray-100 focus:border-2 focus:outline-none focus:border-[${TERMINAL_GREEN}] transition-colors`}
                  placeholder="BEGIN TRANSMISSION HERE..."
                />
              </div>

              {/* Submit Button & Status */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`rounded-full px-6 py-2 font-semibold tracking-wider uppercase ${
                    status === 'submitting'
                      ? 'cursor-not-allowed bg-gray-700 text-gray-500'
                      : `bg-[${TERMINAL_GREEN}] text-black transition-all duration-200 hover:scale-[1.02] hover:bg-[#00e000] active:scale-95`
                  } `}
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : '[SEND MESSAGE]'}
                </button>

                {status === 'success' && (
                  <p className={`text-[${TERMINAL_GREEN}] font-mono`}>
                    &gt; TRANSMISSION COMPLETE.
                  </p>
                )}
                {status === 'error' && (
                  <p className="font-mono text-red-500">&gt; ERROR: TRANSMISSION FAILED.</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info (1/3 width on desktop) */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <h2 className={`font-mono text-2xl text-[${TERMINAL_GREEN}]`}>:: HQ DATA</h2>

            <div className="flex flex-col gap-4 text-sm">
              <ContactInfoItem
                icon={MapPinIcon}
                title="Location"
                detail="SECURE BASE OF OPERATIONS"
                terminalGreen={TERMINAL_GREEN}
              />
              <ContactInfoItem
                icon={PhoneIcon}
                title="Comms Line"
                detail="ENCRYPTED VOIP (24/7)"
                terminalGreen={TERMINAL_GREEN}
              />
              <ContactInfoItem
                icon={EnvelopeIcon}
                title="Support"
                detail="SUPPORT@DARKMATTER.COM"
                terminalGreen={TERMINAL_GREEN}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Hulppunt voor de Contactgegevens (om herhaling te vermijden)
interface ContactInfoItemProps {
  icon: React.ElementType;
  title: string;
  detail: string;
  terminalGreen: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: Icon,
  title,
  detail,
  terminalGreen,
}) => (
  <div className="flex flex-col border-l border-dashed border-gray-700/50 pl-3">
    <div className={`flex items-center gap-2 font-mono text-sm text-[${terminalGreen}] mb-1`}>
      <Icon className="h-5 w-5" />
      {title.toUpperCase()}
    </div>
    <p className="text-gray-400">{detail}</p>
  </div>
);
