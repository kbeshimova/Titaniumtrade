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
      className="services w-100 d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-lg-3 gap-md-1 gap-sm-2 gap-3"
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
          <ul className="list-group list-unstyled z-2">
            <li className=" text-light">{service.country}</li>
            <li className="text-light">{service.sort}</li>
            <li className="text-light">{service.terms}</li>
            <li className="text-light">{service.order}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}