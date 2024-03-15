import React from "react";
import { type Meta } from "@/app/_types/Blog";
import Image from "next/image";
import Link from "next/link";
import { generateBlogPath } from "@/app/_utils/blog";

const completeTranslations = {
  en: "English",
  ar: "Arabic",
};

export function FeaturedCard({ post }: { post: Meta }) {
  const { slug, translations, title, date, readTime, banner, bannerCredits } =
    post;

  return (
    <Link
      href={generateBlogPath(slug, translations)}
      className="flex w-full flex-col items-center justify-between overflow-hidden rounded-md bg-cream-200 text-cream-900 shadow-sm outline outline-offset-4 outline-transparent duration-300 hover:outline-cream-500 md:h-[50vh] md:flex-row md:items-stretch lg:h-[70vh]"
    >
      <div className="flex flex-col gap-2 p-8 md:gap-12">
        <p className="font-semibold text-cream-800">Most Recent Article</p>
        <div className="flex h-full flex-col justify-between gap-2">
          <div>
            <p className="mb-1.5 text-xl font-semibold md:mb-4 md:text-3xl lg:text-4xl">
              {title}
            </p>
            <div className="mb-6 flex gap-1 text-sm">
              <p>Read in</p>
              <div>
                {translations.map((sub) => (
                  <Link
                    href={`blog/${sub}/${slug}`}
                    key={sub}
                    className="mr-2 rounded bg-cream-400 px-2 py-0.5 text-xs duration-300 hover:bg-cream-500 md:text-sm"
                  >
                    {completeTranslations[sub]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs font-semibold text-cream-600 md:text-base">
            {date} — {readTime}
          </p>
        </div>
      </div>
      <Image
        alt={bannerCredits}
        src={banner}
        title={bannerCredits.split(" (")[0]}
        width={800}
        height={800}
        className="object-cover md:max-w-xs md:rounded-r-md lg:max-w-md"
      />
    </Link>
  );
}

export function Card({ post }: { post: Meta }) {
  const { bannerCredits, banner, slug, title, date, readTime } = post;

  return (
    <li className="w-72 overflow-hidden rounded-md text-cream-900 outline outline-2 outline-offset-4 outline-transparent duration-300 hover:bg-cream-100 hover:outline-cream-500">
      <Link href={generateBlogPath(slug, post.translations)}>
        <Image
          alt={bannerCredits}
          src={banner}
          title={bannerCredits.split(" (")[0]}
          width={800}
          height={800}
          className="h-[40vh] rounded-t-lg object-cover"
        />
        <div className="rounded-bl-lg rounded-br-lg border-b-2 border-l-2 border-r-2 border-cream-400 px-4 pt-2">
          <p className="mb-1 text-xs text-cream-700">
            {date} — {readTime}
          </p>
          <p className="mb-6 font-semibold">{title}</p>
          <div className="mb-3 flex items-center gap-1 text-sm font-thin">
            <p>Read in</p>
            <div className="text-xs">
              {post.translations.map((sub) => (
                <Link
                  href={`blog/${sub}/${post.slug}`}
                  key={sub}
                  className="mr-1.5 rounded bg-cream-300 px-2 py-0.5 font-normal duration-300 hover:bg-cream-500"
                >
                  {completeTranslations[sub]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
