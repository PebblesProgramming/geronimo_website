// components/FAQList.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const faqData = [
  {
    question: 'What are the system requirements for [PROJECT NAME]?',
    answer:
      'Minimum requirements: Windows 10, i5 Processor, 8GB RAM, GTX 1060. Recommended requirements: i7 Processor, 16GB RAM, RTX 3070 or higher.',
  },
  {
    question: 'When is the next BETA test scheduled?',
    answer:
      'The next BETA phase is currently scheduled for Q3 2025. Keep an eye on our [UPDATES] section for exact coordinates.',
  },
  {
    question: 'Is [PROJECT NAME] a multiplayer or single-player experience?',
    answer:
      'The primary focus is on a cooperative multiplayer experience, but solo missions are available for training.',
  },
];

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const TERMINAL_GREEN = '#00ff00';

  return (
    <div className={`border-b border-gray-800 last:border-b-0`}>
      <button
        className={`flex w-full items-center justify-between py-4 text-left font-mono text-lg transition-colors ${isOpen ? `text-[${TERMINAL_GREEN}]` : 'hover:text-gray-100'} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          {isOpen ? (
            <ChevronDownIcon className={`h-5 w-5 text-[${TERMINAL_GREEN}]`} />
          ) : (
            <ChevronRightIcon className={`h-5 w-5 text-gray-500 hover:text-[${TERMINAL_GREEN}]`} />
          )}
          {question}
        </span>
      </button>

      {/* GEANIMEERD ANTWOORD VELD */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[999px]' : 'max-h-0'} `}
      >
        <div
          className={`border-t p-4 pt-0 font-sans text-gray-400 border-[${TERMINAL_GREEN}]/30 bg-gray-900/50`}
        >
          <p className="pb-4 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQList = () => {
  return (
    <div
      className={`border-white-500 mx-auto w-full border-2 border-dashed bg-gray-900/60 p-4 shadow-[0_0_15px_rgba(0,255,0,0.5)]`}
    >
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQList;
