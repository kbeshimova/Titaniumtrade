"use client";
import Image from "next/image";
import { useLanguage } from "../context/langContext";
import React from "react";
import { useInView } from "react-intersection-observer";
import InteractiveButton from "./InteractiveBtn";

interface AdvantagesProps {
  btnText: {
    downloadBtn: string;
  };
}

export default function Advantages({ btnText }: AdvantagesProps) {
  const { t } = useLanguage();

  const advItems = [
    {
      img: "./quality2.svg",
      value: t.advitemTitle1,
      description: t.advitemDesc1,
    },
    {
      img: "./fruits.svg",
      value: t.advitemTitle2,
      description: t.advitemDesc2,
    },
    {
      img: "./terms.svg",
      value: t.advitemTitle3,
      description: t.advitemDesc3,
    },
    {
      img: "./shipping.svg",
      value: t.advitemTitle4,
      description: t.advitemDesc4,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      className="about d-flex flex-lg-row flex-md-column flex-sm-column flex-column col-12 gap-5 "
    >
      <div
        ref={ref}
        className={`advContent d-flex flex-column justify-content-center col-lg-6 col-md-12 col-sm-12 col-12
           ${"animate"}`}
      >
        <h2>{t.advtitle}</h2>
        <p>{t.advdesc}.</p>
        <InteractiveButton className="primary col-lg-4 col-md-12 col-sm-6 col-12 py-3">
          {btnText.downloadBtn}
        </InteractiveButton>
      </div>
      <div className="advItems d-flex flex-column col-lg-6 col-md-12 col-sm-6 col-12 gap-2">
        {advItems.map((item, index) => (
          <div
            key={index}
            className={`d-flex gap-4 advItem ${
              inView ? "fade-in" : "fade-out"
            }`}
          >
            <Image src={item.img} alt="Logo" width={50} height={50} />
            <div className="d-flex flex-column">
              <h4>{item.value}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
