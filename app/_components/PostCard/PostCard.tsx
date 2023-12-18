import React from "react";
import { type Meta } from "@/app/_types/Blog";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post }: { post: Meta }) {
  const { bannerCredits, banner, slug, title, date, readTime } = post;

  return (
    <li className="hover:outline-cream-500  text-cream-900 w-80 overflow-hidden rounded-md shadow outline outline-2 outline-offset-4 outline-transparent duration-300">
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
          <p className="text-cream-700 mb-3 text-sm">
            {date} — {readTime}
          </p>
          <p className="text-xl font-semibold">{title}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
