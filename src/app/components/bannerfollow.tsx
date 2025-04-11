"use client";

import React from "react";
import InteractiveButton from "./InteractiveBtn";
import { useLanguage } from "../context/langContext";


export default function BannerFollow() {
  const { t } = useLanguage();
const btnText = {
  downloadBtn: t.followBtn,
};
  return (
    <section className="banner-follow  align-items-center">
      <div className="banner-content d-flex ">
        <div className="col-8 d-flex flex-column justify-content-center">
          <h3 className="text-white">{t.instTitle}</h3>
          <p className="opacWhite">{t.instDesc}</p>
          <InteractiveButton className="primary col-lg-4 col-md-12 col-sm-6 col-12 py-3">
            {btnText.downloadBtn}
          </InteractiveButton>
        </div>
      </div>
    </section>
  );
}
