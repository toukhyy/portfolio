import Link from "next/link";
import { getPostsMeta } from "@/app/_utils/blog";
import { Meta } from "@/app/_types/Blog";
import PostCard from "@/app/_components/PostCard/PostCard";
import Image from "next/image";

export const revalidate = 0;

async function page() {
  const postsMeta = await getPostsMeta();

  if (!postsMeta) return <h1>there's no blog posts yet</h1>;

  const [mostRecent, ...rest] = postsMeta;
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">
      <Link
        href={`blog/${mostRecent.slug}`}
        className="my-16 mb-24 flex h-[70vh] w-full justify-between rounded-md bg-slate-50 shadow-sm  outline outline-offset-4 outline-transparent duration-300 hover:outline-yellow-600"
      >
        <div className="flex flex-col gap-12 p-8">
          <p className="font-semibold">Most Recent Article</p>
          <div className="flex h-full flex-col justify-between">
            <p className="text-4xl font-semibold">{mostRecent.title}</p>
            <p className="text-lg font-semibold text-slate-400">
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
          className="max-w-md rounded-r-md object-cover"
        />
      </Link>
      <ul className="mb-24 flex w-full flex-wrap gap-8">
        {rest.map((postMeta: Meta) => (
          <PostCard key={postMeta.slug} post={postMeta} />
        ))}
      </ul>
    </div>
  );
}

export default page;
