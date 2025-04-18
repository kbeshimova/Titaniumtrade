"use client";

import React from "react";
import { useLanguage } from "../context/langContext";
import { useTab } from "../context/tabsContext";
import { useInView } from "react-intersection-observer";

export default function ProductTabs() {
  const { t } = useLanguage();
  const { activeTab, setActiveTab } = useTab();
  const tabsData = [
    {
      id: 1,
      title: t.tab1,
      products: [
        { name: t.cucumber, image: "../products/cucumber-min.png" },
        { name: t.tomato, image: "../products/pomidor-min.png" },
      ],
    },
    {
      id: 2,
      title: t.tab2,
      products: [
        { name: t.wallnuts, image: "../products/wallnuts-min.png" },
        { name: t.raisins, image: "../products/raisins-min.png" },
        { name: t.aprecotKernels, image: "../products/aprecot_kernels.png" },
        { name: t.aprecotDried, image: "../products/aprecot_dried-min.png" },
      ]
    },
    {
      id: 3,
      title: t.tab3,
      products: [
        { name: t.dragonfruit, image: "../products/Dragonfruit-min.png" },
        { name: t.durian, image: "../products/Soursop_-11-removebg-preview-min.png" },
        { name: t.mango, image: "../products/mango-min.png" },
      ],
    },
    {
      id: 4,
      title: t.tab4,
      products: [
        { name: t.orange, image: "../products/apelsin-min.png" },
        { name: t.tandarine, image: "../products/mandariny-min.png" },
        { name: t.lemon, image: "../products/limon-min.png" },
      ],
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      id="catalog"
      className={`productTabs ${inView ? "fade-in" : "hidden"}`}
      ref={ref}
    >
      <div className="tabs d-flex col-12 justify-content-center gap-3">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content mt-4 d-flex justify-content-start flex-wrap">
        {tabsData
          .find((tab) => tab.id === activeTab)
          ?.products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <button className="product-btn">{product.name}</button>
            </div>
          ))}
      </div>
    </div>
  );
}