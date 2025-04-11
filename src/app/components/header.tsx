"use client";

import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useLanguage } from "../context/langContext";

export default function Header() {
  const {lang, setLang, t} = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header d-flex flex-row justify-content-between align-items-center py-3">
      <div className="headerLogo me-3 col-2">
        <Image src="/ttFavWh.svg" alt="Logo" width={40} height={40} />
      </div>
      <button
        className={`burger-icon d-lg-none ${menuOpen ? "d-none" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div className={`burger-menu ${menuOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Image src="/ttFav-black.svg" alt="Logo" width={50} height={50} />
          </div>
          <div>
            <button className="close-icon" onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          </div>
        </div>
        <nav>
          <ol className="list-unstyled">
            <li><a href="#about">{t.about}</a></li>
            <li><a href="#services">{t.services}</a></li>
            <li><a href="#catalog">{t.catalogue}</a></li>
            <li><a href="#faq">{t.faq}</a></li>
            <li><a href="#contacts">{t.contact}</a></li>
          </ol>
        </nav>
        <div className="language-switcher">
          <h4>Выберите язык:</h4>
          <button onClick={() => setLang("tkm")}>TKM</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ru")}>RU</button>
          <button onClick={() => setLang("ch")}>CH</button>
        </div>
      </div>

      <div className="d-none d-lg-flex col-10 justify-content-end align-items-center">
        <div className="col-10">
          <nav>
            <ul className="list-unstyled d-flex  text-white justify-content-end">
            <li><a href="#about">{t.about}</a></li>
            <li><a href="#services">{t.services}</a></li>
            <li><a href="#catalog">{t.catalogue}</a></li>
            <li><a href="#faq">{t.faq}</a></li>
            <li><a href="#contacts">{t.contact}</a></li>
            </ul>
          </nav>
        </div>
        <div className="ms-auto col-1">
          <div className="dropdown">
            <button
              className="btn text-light dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang === "tkm"
                ? "TKM"
                : lang === "en"
                ? "🇬🇧 EN"
                : lang === "ru"
                ? "🇷🇺 RU"
                : lang === "ch"
                ? "🇨🇳 CH"
                : ""}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button className="dropdown-item" onClick={() => setLang("en")}>
                  {t.eng}
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setLang("ru")}>
                  {t.rus}
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => setLang("tkm")}
                >
                  {t.tkm}
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setLang("ch")}>
                  {t.ch}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
