import React from "react";
import { type Meta } from "@/app/_types/Blog";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post }: { post: Meta }) {
  const { bannerCredits, banner, slug, title, date, readTime } = post;

  return (
    <li className="w-80  overflow-hidden rounded-md text-cream-900 shadow outline outline-2 outline-offset-4 outline-transparent duration-300 hover:outline-cream-500">
      <Link href={`blog/${slug}`}>
        <Image
          alt={bannerCredits}
          src={banner}
          title={bannerCredits.split(" (")[0]}
          width={800}
          height={800}
          className="h-[40vh] object-cover"
        />
        <div className="px-4 pb-8 pt-4">
          <p className="mb-3 text-sm text-cream-700">
            {date} — {readTime}
          </p>
          <p className="text-xl font-semibold">{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
