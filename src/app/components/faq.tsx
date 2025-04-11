"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/langContext";
import { useInView } from "react-intersection-observer";

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id); // Открыть или закрыть вопрос
  };
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const faqData = [
    {
      id: 1,
      question: t.faq1,
      answer: t.faqAns1,
    },
    {
      id: 2,
      question: t.faq2,
      answer: t.faqAns2,
    },
    {
      id: 3,
      question: t.faq3,
      answer: t.faqAns3,
    },
    {
      id: 4,
      question: t.faq4,
      answer: t.faqAns4,
    },
    {
      id: 5,
      question: t.faq5,
      answer: t.faqAns5,
    },
    {
      id: 6,
      question: t.faq6,
      answer: t.faqAns6,
    },
  ];

  return (
    <section  id="faq" className="faq">
      <h2 className="pb-5">
        {t.quest1}
        <br></br>
        <span className="primaryColor">{t.quest2}</span>
      </h2>

      <div ref={ref} className={`accordion ${ inView ? "fade-in" : "fade-out"}`}>
        {faqData.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(item.id)}
            >
              <span>{item.question}</span>
              <span className="icon">{activeId === item.id ? "-" : "+"}</span>
            </div>
            {activeId === item.id && (
              <div className="accordion-body">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
