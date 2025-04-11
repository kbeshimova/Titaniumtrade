"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/langContext";

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { t } = useLanguage(); // Получаем переводы из контекста

  // Проверяем, есть ли данныеf
  if (!t.servicesItems || !Array.isArray(t.servicesItems)) {
    return null; // Или можно вернуть индикатор загрузки
  }

  return (
    <section
      ref={ref}
      id="services"
      className="services w-100 d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-1 gap-sm-2 gap-3"
    >
      {t.servicesItems.map((service: { servicesTitle: string; servicesDesc: string; serviceImg: string }, index: number) => (
        <div
          key={index}
          className={`cardService d-flex flex-column justify-content-end ${
            inView ? "fade-in" : "hidden"
          }`}
          style={{
            backgroundImage: `url(${service.serviceImg})`,// Замените на путь к вашим изображениям
            animationDelay: `${index * 0.3}s`, // Задержка для появления каждой карточки
          }}
        >
          <h3 className="text-light">{service.servicesTitle}</h3>
          <p className="text-light">{service.servicesDesc}</p>
        </div>
      ))}
    </section>
  );
}