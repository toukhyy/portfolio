import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getPostsMeta, getPostByPath } from "@/app/_utils/blog";
import { formatDate } from "@/app/_utils/formateDate";

type Props = {
  params: { slug: string };
};

export const revalidate = 0;

export async function generateStaticParams() {
  const postsMeta = await getPostsMeta();

  if (!postsMeta) return [];

  return postsMeta.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const post = await getPostByPath(`content/${slug}/index.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

async function page({ params }: Props) {
  const { slug } = params;

  const post = await getPostByPath(`content/${slug}/index.mdx`);
  if (!post) return <h1>Not Found</h1>;

  return (
    <>
      <header className="mx-auto mb-24 max-w-lg px-4 pt-20 md:max-w-2xl lg:max-w-5xl lg:px-0">
        <Link
          href="/blog"
          className="mb-5 flex items-center gap-2.5 text-cream-900 duration-150 hover:text-cream-800"
        >
          <FaArrowLeftLong className="h-3 w-3 md:h-4 md:w-4" />
          <span className="text-xs font-semibold md:text-base">
            Back to Blog
          </span>
        </Link>

        <div className="relative mb-2 h-52 md:h-80 lg:h-[40rem]">
          <div className="flex h-full w-full items-center justify-center">
            <h2 className="z-30 max-w-xs text-center text-xl font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] md:max-w-xl md:text-3xl lg:text-4xl">
              {post.meta.title}
            </h2>
          </div>
          <Image
            alt={post.meta.bannerCredits}
            src={post.meta.banner}
            title={post.meta.bannerCredits.split(" (")[0]}
            width={800}
            height={800}
            className="absolute left-0 top-0 h-52 w-full rounded-md object-cover md:h-full"
          />
        </div>
        <p className="text-center font-semibold text-cream-800 md:text-lg">
          {post.meta.date} — {post.meta.readTime}
        </p>
      </header>
      <main>
        <article className="prose prose-sm prose-neutral mx-auto px-4 md:prose-lg lg:prose-xl">
          {post?.content}
        </article>
      </main>
    </>
  );
}

export default page;
