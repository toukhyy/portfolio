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
    <div className="flex flex-col items-center justify-center gap-32 py-12">
      <header>
        <Link
          href="/blog"
          className="mb-5 flex items-center gap-2.5 duration-150 hover:text-yellow-700"
        >
          <FaArrowLeftLong />
          <span className="font-semibold ">Back to Blog</span>
        </Link>

        <div className="relative mb-2 flex h-[40rem] w-[60rem] items-center justify-center">
          <div className="z-40 flex w-full items-center justify-center py-1">
            <h2 className="max-w-xl text-center text-4xl font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)]">
              {post.meta.title}
            </h2>
          </div>
          <Image
            alt={post.meta.bannerCredits}
            src={post.meta.banner}
            title={post.meta.bannerCredits.split(" (")[0]}
            width={800}
            height={800}
            className="absolute z-10 h-full w-full rounded-md object-cover"
          />
        </div>
        <p className="text-center text-lg font-semibold text-slate-600">
          {post.meta.date} — {post.meta.readTime}
        </p>
      </header>
      <main>
        <article className="prose prose-slate md:prose-lg">
          {post?.content}
        </article>
      </main>
    </div>
  );
}

export default page;
