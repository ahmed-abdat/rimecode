"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden" id="hero-scroll">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
              Seamless Transition from <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Concept to Deployment
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
