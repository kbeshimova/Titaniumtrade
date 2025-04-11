"use client";

import React, { useEffect, useRef } from "react";
import Header from "./header";
import InteractiveButton from "./InteractiveBtn";
import Link from "next/link";
import { useLanguage } from "../context/langContext";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (heroRef.current) {
        observer.observe(heroRef.current);
      }
  
      return () => {
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
      };
    }
  }, []);

  return (
    <section className="border-primary vh-100 position-relative overflow-hidden">
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-0"></div>

      <div
        className="hero d-flex flex-column justify-content-between position-relative z-1"
        ref={heroRef}
      >
        <Header />
        <div className="heroContent">
          <h1 className="text-white">{t.heroTitle}</h1>
          <p className="text-white">{t.herodescription}</p>
          <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-2">
            <InteractiveButton className="primary col-lg-4 col-md-6 col-sm-6 col-12 py-3">
              {t.downloadBtn}
            </InteractiveButton>
            <InteractiveButton className="secondary col-lg-4 col-md-6 col-sm-6 col-12 py-3">
              <Link href="#contacts" scroll={true}>
              {t.contactBtn}
              </Link>
            </InteractiveButton>
          </div>
        </div>
      </div>
    </section>
  );
}
