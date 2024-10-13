'use client'

import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Sarah L.",
    username: "@sarahL",
    body: "RimCode delivered a sleek, user-friendly website that exceeded our expectations.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "David M.",
    username: "@davidM",
    body: "Our mobile app's user engagement skyrocketed thanks to RimCode's expertise.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emily R.",
    username: "@emilyR",
    body: "Seamless experience with RimCode. They perfectly executed our vision.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Mark T.",
    username: "@markT",
    body: "RimCode's innovation made our web app more efficient and scalable.",
    img: "https://avatar.vercel.sh/mark",
  },
  {
    name: "Lisa K.",
    username: "@lisaK",
    body: "Impressed by RimCode's flawless cross-platform app development.",
    img: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "Alex W.",
    username: "@alexW",
    body: "Our React app's performance improved significantly with RimCode's expertise.",
    img: "https://avatar.vercel.sh/alex",
  },
];

const ReviewCard = React.memo(({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[260px] sm:w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl p-3 sm:p-4 mx-2",
        "bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={img} alt={name} width={32} height={32} className="rounded-full" loading="lazy" />
        <div className="flex flex-col">
          <figcaption className="text-xs sm:text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs sm:text-sm line-clamp-3">{body}</blockquote>
    </figure>
  );
});

ReviewCard.displayName = 'ReviewCard';

const Testimonials = () => {
  return (
    <section className="relative py-8 bg-white dark:bg-black overflow-hidden w-full" id="testimonials">
      <div className="pt-8 sm:pt-16 md:pt-24"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Real feedback from clients about RimCode&apos;s web and mobile development services.
        </p>
        <div className="relative flex h-[250px] sm:h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          <Marquee pauseOnHover className="[--duration:40s] sm:[--duration:35s] md:[--duration:30s]">
            <div className="flex">
              {reviews.slice(0, reviews.length / 2).map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </div>
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] sm:[--duration:35s] md:[--duration:30s]">
            <div className="flex">
              {reviews.slice(reviews.length / 2).map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </div>
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
      <div className="pb-8 sm:pb-16 md:pb-24"></div>
    </section>
  );
};

export default React.memo(Testimonials);
