"use client";

import React, { useState } from "react";
import InteractiveButton from "./InteractiveBtn";
import Image from "next/image";
import { useLanguage } from "../context/langContext";

export default function Footer() {
  const { t } = useLanguage();
  const btnText = {
    downloadBtn: t.sendBtn,
  };
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Ваш email успешно отправлен!");
        setEmail(""); // Очистить поле ввода
      } else {
        setMessage("Произошла ошибка. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("Произошла ошибка. Попробуйте снова.");
    }
  };

  return (
    <footer  id="contacts" className="footer">
      <div className="footer-top">
        <h2 className="pb-lg-5 pb-md-3 pb-sm-3 pb-3 text-start">
          {t.footerTitle1}
          <br></br>
          <span className="primaryColor">{t.footerTitle2}</span>
        </h2>
        <div className="contact-cards gap-lg-5 gap-md-2 gap-sm-3 gap-3">
          <div className="contact-card d-flex flex-column justify-content-between">
            <Image src="/mail.svg" alt="Logo" height={30} width={30} />
            <div>
              <h4>Email</h4>
              <p>{t.workTime}</p>
            </div>
            <a href="mailto:support@gmail.com">info@titaniumtradelimited.com</a>
          </div>
          <div className="contact-card d-flex flex-column justify-content-between">
            <Image src="/call.svg" alt="Logo" width={30} height={30} />
            <div>
              <h4>{t.card2title}</h4>
              <p>{t.workTime}</p>
            </div>
            <a href="tel:+1694638956">+1 694 638 956</a>
          </div>
          <div className="contact-card d-flex flex-column justify-content-between">
            <Image src="/map.svg" alt="Logo" width={30} height={30} />
            <div>
              <h4>{t.card3title}</h4>
              <p>{t.workTime}</p>
            </div>
            <p className="m-0">{t.adress}</p>
          </div>
        </div>
      </div>
      <div className="footerBottom d-flex flex-column justify-content-between gap-lg-5 gap-md-5 gap-sm-5 gap-2">
        <div className="footer-top d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-content-between text-start">
          <Image
            src="/ttFav-black.svg"
            className="my-3 d-lg-none d-md-none d-sm-none d-block"
            alt="Logo"
            width={50}
            height={50}
          />
          <div className="col-lg-4 col-md-10 col-sm-6 col-12">
            <h5>{t.footer2title}</h5>
          </div>
          <div className="d-flex flex-column text-start col-lg-6 col-md-12 col-sm-12 col-12">
            <p>{t.footer2desc}</p>
            <form
              className="email-form d-flex flex-lg-row flex-md-row flex-sm-column flex-column"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InteractiveButton className="primary col-lg-4 col-md-4 col-sm-6 col-12 py-3">
                {btnText.downloadBtn}
              </InteractiveButton>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
        <div className="footer-bottom d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between">
          <Image
            src="/ttFav-black.svg"
            className="d-lg-block d-md-block d-sm-block d-none"
            alt="Logo"
            width={50}
            height={50}
          />
          <nav className="footer-nav d-flex flex-lg-row flex-md-row flex-sm-wrap flex-wrap align-items-center">
            <a href="#about">{t.about}</a>
            <a href="#services">{t.services}</a>
            <a href="#catalog">{t.catalogue}г</a>
            <a href="#faq">{t.faq}</a>
            <a href="#contacts">{t.contact}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
