"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import InteractiveButton from "./InteractiveBtn";
import { useLanguage } from "../context/langContext";

interface AboutProps {
  btnText: {
    downloadBtn: string;
  };
}

export default function About({ btnText }: AboutProps) {
  const { t } = useLanguage();

  // Оборачиваем aboutNumbers в useMemo, чтобы избежать лишних вычислений
  const aboutNumbers = useMemo(
    () => [
      { value: 1000, description: t.achive1 },
      { value: 15, description: t.achive2 },
      { value: 100, description: t.achive3 },
    ],
    [t]
  );

  const [animatedNumbers, setAnimatedNumbers] = useState(
    aboutNumbers.map(() => 0)
  );

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: numbersRef, inView: numbersInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (numbersInView) {
        aboutNumbers.forEach((item, index) => {
          let current = 0;
          const step = Math.ceil(item.value / 50);
          const interval = setInterval(() => {
            current += step;
            if (current >= item.value) {
              current = item.value;
              clearInterval(interval);
            }
            setAnimatedNumbers((prev) => {
              const newNumbers = [...prev];
              newNumbers[index] = current;
              return newNumbers;
            });
          }, 30);
        });
      } else {
        setAnimatedNumbers(aboutNumbers.map(() => 0));
      }
    }
  }, [numbersInView, aboutNumbers]);

  return (
    <section
      ref={contentRef}
      id="about"
      className={`about d-flex flex-lg-row flex-md-row flex-sm-column flex-column col-12 ${
        contentInView ? "slide-in-left" : "slide-in-left"
      }`}
    >
      <div className="aboutContent d-flex flex-column justify-content-center col-lg-9 col-md-6 col-sm-12 col-12">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutdesc}</p>
        <InteractiveButton className="primary col-lg-4 col-md-12 col-sm-6 col-12 py-3">
          {t.downloadBtn}
        </InteractiveButton>
      </div>
      <div
        ref={numbersRef}
        className={`aboutNumbers d-flex flex-column justify-content-center col-lg-3 col-md-6 col-sm-6 col-12 gap-2 ${
          numbersInView ? "slide-in-up" : "hidden"
        }`}
      >
        {aboutNumbers.map((item, index) => (
          <div key={index} className="d-flex flex-column">
            <div className="big-num-green">{animatedNumbers[index]}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}