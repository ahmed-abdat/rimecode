"use client";

import React from "react";
import { PricingHeading } from "../pricing/PricingHeading";
import { PricingCard } from "../pricing/PricingCard";
import { pricingPlans } from "../pricing/PricingPlans";

const Pricing = () => {

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-black overflow-hidden w-full" id="pricing">
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-12 overflow-visible">
        <PricingHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 py-8 mb-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
