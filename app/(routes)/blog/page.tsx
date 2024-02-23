import Link from "next/link";
import Image from "next/image";
import { getPostsMeta } from "@/app/_utils/blog";
import { Meta } from "@/app/_types/Blog";
import PostCard from "@/app/_components/postCard/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Abdelrahman El Toukhy's Blog",
};

async function page() {
  const postsMeta = await getPostsMeta();

  if (!postsMeta) return <h1>there's no blog posts yet</h1>;

  const [mostRecent, ...rest] = postsMeta;
  return (
    <div className="mx-auto mb-16 mt-24 flex max-w-5xl flex-col items-center justify-center gap-16 px-4 md:mt-28 md:px-4 lg:px-0">
      <Link
        href={`blog/${mostRecent.slug}`}
        className="flex w-full flex-col items-center justify-between overflow-hidden rounded-md bg-cream-200 text-cream-900 shadow-sm outline outline-offset-4 outline-transparent duration-300 hover:outline-cream-500 md:h-[50vh] md:flex-row md:items-stretch lg:h-[70vh]"
      >
        <div className="flex flex-col gap-4 p-8 md:gap-12">
          <p className="font-semibold text-cream-800">Most Recent Article</p>
          <div className="flex h-full flex-col justify-between gap-2">
            <p className="text-xl font-semibold md:text-3xl lg:text-4xl">
              {mostRecent.title}
            </p>
            <p className="font-semibold text-cream-600 md:text-lg">
              {mostRecent.date} — {mostRecent.readTime}
            </p>
          </div>
        </div>
        <Image
          alt={mostRecent.bannerCredits}
          src={mostRecent.banner}
          title={mostRecent.bannerCredits.split(" (")[0]}
          width={800}
          height={800}
          className="object-cover md:max-w-xs md:rounded-r-md lg:max-w-md"
        />
      </Link>
      <ul className="grid w-full grid-cols-1 justify-between justify-items-center gap-10 md:grid-cols-2 md:gap-x-0 md:gap-y-10 lg:grid-cols-3 lg:gap-y-6">
        {rest.map((postMeta: Meta) => (
          <PostCard key={postMeta.slug} post={postMeta} />
        ))}
      </ul>
    </div>
  );
}

export default page;
