"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/langContext";
import { useTab } from "../context/tabsContext";

export default function Services() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { setActiveTab } = useTab();

  if (!t.servicesItems || !Array.isArray(t.servicesItems)) {
    return null;
  }

  const handleCardClick = (tabId: number) => {
    setActiveTab(tabId);
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="services"
      className="services w-100 d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-1 gap-sm-2 gap-3"
    >
      {t.servicesItems.map((service, index) => (
        <div
          key={index}
          className={`cardService d-flex flex-column justify-content-end ${
            inView ? "fade-in" : "hidden"
          }`}
          style={{
            backgroundImage: `url(${service.serviceImg})`,
            animationDelay: `${index * 0.3}s`,
          }}
          onClick={() => handleCardClick(service.tabId)}
        >
          <h3 className="text-light">{service.servicesTitle}</h3>
          <p className="text-light">{service.servicesDesc}</p>
        </div>
      ))}
    </section>
  );
}