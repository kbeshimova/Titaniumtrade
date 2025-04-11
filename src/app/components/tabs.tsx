"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/langContext";
import { useInView } from "react-intersection-observer";

export default function ProductTabs() {
  const { t } = useLanguage();
  const tabsData = [
    {
      id: 1,
      title: t.tab1,
      products: [
        { name: t.product1, image: "/ogurcy.svg" },
        { name: t.product2, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
      ],
    },
    {
      id: 2,
      title: t.tab2,
      products: [
        { name: t.product1, image: "/ogurcy.svg" },
        { name: t.product2, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
      ],
    },
    {
      id: 3,
      title: t.tab3,
      products: [
        { name: t.product1, image: "/ogurcy.svg" },
        { name: t.product2, image: "/ogurcy.svg" },
        { name: t.product3, image: "/ogurcy.svg" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div  id="catalog" className={`productTabs ${inView ? "fade-in" : "hidden"}`} ref={ref}>
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

      <div className="tab-content mt-4 d-flex justify-content-between flex-wrap ">
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
